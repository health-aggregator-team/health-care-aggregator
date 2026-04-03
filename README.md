# 🏥 Health Aggregator System

A **Health Aggregator System** built using **Node.js, Express, MongoDB, and Shell Scripts** that monitors system health, tracks service dependencies, and displays real-time health status through a web dashboard.

---

# 📌 Project Overview

The Health Aggregator System is designed to monitor the health of application services and system resources such as **memory usage**, **disk usage**, and **service uptime**.

It aggregates multiple health checks into a single endpoint (`/health`) and stores historical logs in **MongoDB**, enabling monitoring and analysis over time.

This project simulates real-world health monitoring systems similar to **Kubernetes Health Checks** and **AWS ELB Health Monitoring**.

---

# 🎯 Objectives

* Build a centralized **health monitoring system**
* Implement **liveness and readiness checks**
* Store health logs in **MongoDB**
* Display real-time health data on a dashboard
* Implement **hierarchical health logic**
* Integrate **Unix system health scripts**
* Track project progress using **Git**

---

# 🚀 Features

 Express `/health` endpoint
 Real-time health monitoring
 Memory usage tracking
 Disk usage monitoring
 MongoDB health log storage
 Health history dashboard
 Auto-refresh health checks
 Unix shell script integration
 Hierarchical health evaluation
 Professional frontend dashboard

---

# 🧱 System Architecture

```
Frontend Dashboard
        ↓
 Express Server (/health)
        ↓
 Health Controller Logic
        ↓
 MongoDB Database
        ↓
 Shell Scripts (Memory & Disk)
```

---

# 🛠️ Technologies Used

| Technology        | Purpose            |
| ----------------- | ------------------ |
| **Node.js**       | Backend runtime    |
| **Express.js**    | API server         |
| **MongoDB**       | Database for logs  |
| **Mongoose**      | MongoDB modeling   |
| **HTML**          | Frontend structure |
| **CSS**           | Styling            |
| **JavaScript**    | Frontend logic     |
| **Shell Scripts** | System checks      |
| **Git & GitHub**  | Version control    |

---

# 📂 Project Structure

```
health-aggregator-team

│ package.json
│ README.md
│ .gitignore

├── backend
│   ├── server.js
│   ├── db.js
│   ├── healthController.js
│   ├── healthRoutes.js
│   └── models
│       └── HealthLog.js

├── frontend
│   ├── index.html
│   ├── style.css
│   └── script.js

├── scripts
│   ├── check-memory.sh
│   └── check-disk.sh

├── docs
│   └── system-design.txt
```

---

# ⚙️ Installation Guide

Follow these steps to run the project locally.

## Step 1 — Clone Repository

```
git clone https://github.com/YOUR-USERNAME/health-aggregator-team.git
cd health-aggregator-team
```

---

## Step 2 — Install Dependencies

```
npm install
```

---

## Step 3 — Start MongoDB

Open **MongoDB Compass** and connect to:

```
mongodb://127.0.0.1:27017
```

---

## Step 4 — Run Backend

```
npm start
```

You should see:

```
MongoDB Connected
Server running on port 5000
```

---

## Step 5 — Run Frontend

Open:

```
frontend/index.html
```

Or use **Live Server**.

---

# 🌐 API Endpoints

## Health Endpoint

```
GET /health
```

Returns:

```
{
  overallStatus: "OK",
  memoryStatus: "Healthy",
  diskStatus: "Healthy",
  uptime: 123.45,
  memoryUsage: "48 MB",
  diskUsage: "42%",
  timestamp: "2026-04-02T..."
}
```

---

## Logs Endpoint

```
GET /logs
```

Returns last 10 stored health logs.

---

# 🧪 Health Monitoring Logic

The system determines overall health based on dependencies.

### Example Logic:

* If **memory usage < 500MB** → Healthy
* If **disk usage < 80%** → Healthy
* If any dependency fails → System becomes **DEGRADED**

This implements **hierarchical health checking**.

---

# 📊 Frontend Dashboard

The dashboard displays:

* Overall system health
* Memory usage
* Disk usage
* Uptime
* Health history logs
* Auto-refresh every 5 seconds

---

# 🗄️ Database Design

**Database Name:**

```
healthDB
```

**Collection:**

```
healthlogs
```

**Schema Fields:**

* status
* memoryUsage
* diskUsage
* uptime
* timestamp

---

# 🖥️ Shell Scripts

## Memory Check

```
scripts/check-memory.sh
```

Checks system memory usage.

---

## Disk Check

```
scripts/check-disk.sh
```

Checks disk usage.

---

# 🔄 Git Workflow

All team members contributed using Git.

Basic workflow:

```
git add .
git commit -m "Message"
git push
```

---

# 👥 Team Members
* Rishabh Anand Singh — Backend Development
* Rishika Goyal — Frontend Development
* Sachin Kumar — Database Integration
* Priyanshu Rathore — Shell Script Development
* Raja Singh — Documentation

---

# 📈 Future Enhancements (Phase-3)

* Deploy project to cloud
* Add real system monitoring
* Implement authentication
* Add alert notifications
* Improve UI dashboard
* Docker containerization

---

# 📚 References

* Kubernetes Health Checks
* AWS Elastic Load Balancer Health Monitoring
* Node.js Documentation
* MongoDB Documentation..

---

# 📌 License

This project is developed for academic purposes.

---

# ⭐ Conclusion

The Health Aggregator System demonstrates how modern applications monitor service health, maintain logs, and provide real-time dashboards.

It simulates real-world health monitoring environments used in enterprise systems.
