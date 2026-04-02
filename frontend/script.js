async function checkHealth() {

    try {

        const response = await fetch("http://localhost:5000/health")

        const data = await response.json()

        document.getElementById("status").innerText = data.overallStatus

        document.getElementById("uptime").innerText =
            data.uptime.toFixed(2) + " seconds"

        document.getElementById("memory").innerText =
            data.memoryUsage

        document.getElementById("disk").innerText =
    data.diskUsage

        document.getElementById("time").innerText =
            new Date(data.timestamp).toLocaleString()

    } catch (error) {

        document.getElementById("status").innerText =
            "Server Not Reachable"
        

    }

}

async function loadLogs() {

    try {

        const response =
            await fetch("http://localhost:5000/logs")

        const logs = await response.json()

        const table =
            document.getElementById("logTable")

        table.innerHTML =
            "<tr><th>Status</th><th>Memory</th><th>Time</th></tr>"

        logs.forEach(log => {

            const row = table.insertRow()

            row.insertCell(0).innerText =
                log.overallStatus || log.status

            row.insertCell(1).innerText =
                log.memoryUsage

            row.insertCell(2).innerText =
                new Date(log.timestamp)
                    .toLocaleString()

        })

    } catch (error) {

        console.log("Failed to load logs")

    }

}
checkHealth()
loadLogs()

setInterval(() => {

    checkHealth()
    loadLogs()

}, 5000)