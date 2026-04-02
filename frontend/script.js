async function checkHealth() {

    try {

        const response = await fetch("http://localhost:5000/health")

        const data = await response.json()

        document.getElementById("status").innerText = data.status

        document.getElementById("uptime").innerText =
            data.uptime.toFixed(2) + " seconds"

        document.getElementById("memory").innerText =
            data.memoryUsage

        document.getElementById("time").innerText =
            new Date(data.timestamp).toLocaleString()

    } catch (error) {

        document.getElementById("status").innerText =
            "Server Not Reachable"

    }

}