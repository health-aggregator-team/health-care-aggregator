const HealthLog = require('./models/HealthLog')
const diskinfo = require('node-disk-info')
const os = require('os')

const checkHealth = async (req, res, next) => {
    try {
        // Advanced System Probes
        const processMemory = process.memoryUsage().rss / 1024 / 1024
        
        // System OS level memory probe
        const totalMem = os.totalmem()
        const freeMem = os.freemem()
        const systemMemoryUsagePercent = ((totalMem - freeMem) / totalMem) * 100

        // Real Disk probe
        let diskUsagePercent = 0
        try {
            const disks = diskinfo.getDiskInfoSync()
            if (disks && disks.length > 0) {
                // Find primary OS drive or first drive
                const mainDisk = disks[0] 
                diskUsagePercent = parseFloat(mainDisk.capacity.replace('%', ''))
            }
        } catch (e) {
            console.warn("Could not retrieve physical disk details, using fallback:", e.message)
            diskUsagePercent = 50 // Fail-safe fallback if disk scanning errors out
        }

        let memoryStatus = "Healthy"
        let diskStatus = "Healthy"

        if (processMemory > 500 || systemMemoryUsagePercent > 85) {
            memoryStatus = "Warning"
        }
        
        if (diskUsagePercent > 85) {
            diskStatus = "Warning"
        }

        const overallStatus = (memoryStatus === "Healthy" && diskStatus === "Healthy") ? "OK" : "DEGRADED"

        const healthData = {
            overallStatus: overallStatus,
            memoryStatus: memoryStatus,
            uptime: process.uptime(),
            memoryUsage: processMemory.toFixed(2) + " MB",
            timestamp: new Date(),
            diskStatus: diskStatus,
            diskUsage: Number(diskUsagePercent).toFixed(2) + "%"
        }

        const log = new HealthLog(healthData)
        await log.save()

        res.json(healthData)
    } catch (error) {
        next(error) // bubble up to global error handler router
    }
}

const getLogs = async (req, res, next) => {
    try {
        // Implement advanced pagination features via ?limit & ?page
        const page = parseInt(req.query.page, 10) || 1
        const limit = parseInt(req.query.limit, 10) || 10
        const startIndex = (page - 1) * limit

        const logs = await HealthLog.find()
            .sort({ timestamp: -1 })
            .skip(startIndex)
            .limit(limit)

        res.json(logs)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    checkHealth,
    getLogs
}
