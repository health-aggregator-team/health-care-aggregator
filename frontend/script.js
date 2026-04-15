async function checkHealth() {
    const statusEl = document.getElementById("status");
    const cardStatus = document.getElementById("card-status");
    const pulseDot = document.getElementById("system-pulse");

    try {
        const response = await fetch("http://localhost:5000/api/v1/health");
        const data = await response.json();

        // Update overall status
        statusEl.innerText = data.overallStatus;
        
        // Dynamic card styling based on health
        if (data.overallStatus === "OK") {
            cardStatus.className = "metric-card status-ok";
            pulseDot.className = "pulse-dot pulsing";
        } else {
            cardStatus.className = "metric-card status-degraded";
            pulseDot.className = "pulse-dot pulsing"; // Keep pulsing but warn styling possible
        }

        // Update metrics
        document.getElementById("uptime").innerText = parseInt(data.uptime) + "s";
        document.getElementById("memory").innerText = data.memoryUsage;
        document.getElementById("disk").innerText = data.diskUsage;
        
        // Format timestamp beautifully
        const dateObj = new Date(data.timestamp);
        document.getElementById("time").innerText = "Updated: " + dateObj.toLocaleTimeString();

    } catch (error) {
        statusEl.innerText = "OFFLINE";
        cardStatus.className = "metric-card status-offline";
        pulseDot.className = "pulse-dot offline";
        document.getElementById("time").innerText = "Connection lost. Retrying...";
    }
}

async function loadLogs() {
    try {
        const response = await fetch("http://localhost:5000/api/v1/logs?limit=10");
        const logs = await response.json();

        const tbody = document.querySelector("#logTable tbody");
        tbody.innerHTML = ""; // Clear loader text

        logs.forEach(log => {
            const row = tbody.insertRow();
            
            // Status Code Column
            const statusText = log.overallStatus || log.status || "UNKNOWN";
            const cell0 = row.insertCell(0);
            const statusBadge = document.createElement("span");
            
            // Assign class based on state
            let badgeClass = "badge-subtle";
            if(statusText === "OK") badgeClass = "badge-ok";
            if(statusText === "DEGRADED" || statusText === "Warning") badgeClass = "badge-warn";
            
            statusBadge.className = `badge ${badgeClass}`;
            statusBadge.innerText = statusText;
            cell0.appendChild(statusBadge);

            // Memory Column
            row.insertCell(1).innerText = log.memoryUsage || "--";

            // Time Column
            const dateObj = new Date(log.timestamp);
            row.insertCell(2).innerText = dateObj.toLocaleDateString() + " " + dateObj.toLocaleTimeString();
        });

    } catch (error) {
        const tbody = document.querySelector("#logTable tbody");
        tbody.innerHTML = `<tr><td colspan="3" class="text-center">Failed to fetch historical data.</td></tr>`;
    }
}

// Initial hydration
checkHealth();
loadLogs();

// Setup synchronization interval
setInterval(() => {
    checkHealth();
    loadLogs();
}, 5000);