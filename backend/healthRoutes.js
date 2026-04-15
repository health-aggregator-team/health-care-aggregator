const express = require('express')
const router = express.Router()
const { checkHealth, getLogs } = require('./healthController')

// @route   GET /api/v1/health
// @desc    Poll system sensors and return robust health status
router.get('/health', checkHealth)

// @route   GET /api/v1/logs
// @desc    Retrieve paginated sensor logs from MongoDB
router.get('/logs', getLogs)

module.exports = router
