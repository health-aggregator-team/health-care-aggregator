#  🏥 Health Care Aggregator System

A **Distributed Health Check Aggregator System** built using **Node.js, Express.js, MongoDB, and Shell Scripts** to monitor and report performance metrics and telemetry of web services in real time.

This project aggregates multiple health signals into a unified dashboard, stores historical telemetry logs, and simulates enterprise-grade monitoring similar to Kubernetes and AWS infrastructure health systems.

---

# 📌 Project Overview

The **Health Care Aggregator System** monitors system-level and service-level health metrics such as:

- Memory Usage  
- Disk Usage  
- System Uptime  
- Dependency Health  
- Service Availability  

It aggregates multiple health checks into a centralized endpoint:

```
/health
```

and stores logs into **MongoDB**, enabling continuous monitoring, historical analysis, and performance tracking.

This project simulates real-world health monitoring platforms such as:

- Kubernetes Health Checks  
- AWS Elastic Load Balancer Health Monitoring  

---

# 🎯 Objectives

- Build a centralized health monitoring system  
- Implement liveness and readiness checks  
- Store health logs in MongoDB  
- Display real-time health data on a dashboard  
- Implement hierarchical health logic  
- Integrate Unix system health scripts  
- Track system telemetry continuously  
- Maintain team collaboration using Git  

---

# ✨ Key Features

## 🖥️ Dashboard Features

- Real-time system health display  
- Memory usage monitoring  
- Disk usage tracking  
- System uptime monitoring  
- Health history tracking table  
- Auto-refresh capability  
- Status-based visual indicators  

---

## ⚙️ Backend Features

- Express `/health` endpoint  
- MVC-based backend architecture  
- MongoDB health log storage  
- Hierarchical dependency checks  
- Error handling middleware  
- REST-based API endpoints  

---

# 🧱 System Architecture

```
Frontend Dashboard
        ↓
 Express Server (/health)
        ↓
 Health Controller Logic
        ↓
 Dependency Checks
        ↓
 MongoDB Database
        ↓
 Shell Scripts (Disk & Memory)
```

---

# 🛠️ Technologies Used

| Technology | Purpose |
|-----------|--------|
| Node.js | Backend runtime |
| Express.js | API framework |
| MongoDB | Database |
| Mongoose | Database modeling |
| HTML5 | Frontend structure |
| CSS3 | UI styling |
| JavaScript | Frontend logic |
| Shell Scripts | System health checks |
| dotenv | Environment configuration |
| node-disk-info | Disk monitoring |
| cors | Cross-origin support |
| Git & GitHub | Version control |

---

# 📂 Project Structure

```
health-care-aggregator/

│ package.json
│ README.md
│ .gitignore
│ .env

├── backend/
│   ├── server.js
│   ├── db.js
│   ├── healthController.js
│   ├── healthRoutes.js
│   └── models/
│       └── HealthLog.js

├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js

├── scripts/
│   ├── check-memory.sh
│   └── check-disk.sh

├── logs/
│   └── health-log.json

├── docs/
│   └── system-design.txt
```

---

# ⚙️ Setup and Installation

## Step 1 — Clone Repository

```bash
git clone https://github.com/health-aggregator-team/health-care-aggregator.git
cd health-care-aggregator
```

---

## Step 2 — Install Dependencies

```bash
npm install
```

---

## Step 3 — Configure Environment

Create `.env` file:

```
MONGO_URI=mongodb://127.0.0.1:27017/healthDB
PORT=5000
```

---

## Step 4 — Run Backend Server

```bash
npm start
```

Expected Output:

```
MongoDB Connected
Server running on port 5000
```

---

# 🌐 API Endpoints

## Health Endpoint

```
GET /api/v1/health
```

Returns:

```json
{
  "overallStatus": "OK",
  "memoryStatus": "Healthy",
  "diskStatus": "Healthy",
  "uptime": 123.45,
  "memoryUsage": "48 MB",
  "diskUsage": "42%",
  "timestamp": "2026-04-02T10:20:30Z"
}
```

---

## Logs Endpoint

```
GET /api/v1/logs?limit=X&page=Y
```

Returns paginated health logs.

---

# 🧪 Health Monitoring Logic

Hierarchical logic example:

- If Memory < Threshold → Healthy  
- If Disk < Threshold → Healthy  
- If MongoDB Connected → Healthy  
- If Any Dependency Fails → DEGRADED  
- If Critical Failure → DOWN  

---

# 📊 Frontend Dashboard

The dashboard displays:

- Overall System Health  
- Memory Usage  
- Disk Usage  
- System Uptime  
- Last Check Timestamp  
- Health History Logs  
- Status Indicators  
- Auto-refresh functionality  

---

# 🗄️ Database Design

Database:

```
healthDB
```

Collection:

```
healthlogs
```

Fields:

- status  
- memoryUsage  
- diskUsage  
- uptime  
- timestamp  

---

# 👥 Team Members

- Rishabh Anand Singh — Backend Development  
- Rishika Goyal — Frontend Development  
- Raja Singh — Database Integration  
- Sachin Mishra — Shell Script Development  
- Priyanshu Rathore — Documentation  

---

# 📈 Future Enhancements

- Cloud deployment (Render / Railway)  
- Authentication system  
- Email alerts  
- Notification system  
- Docker support  
- Multi-service monitoring  

---

# 📌 License

This project is created for **academic purposes**.

---

# ⭐ Conclusion

The **Health Care Aggregator System** demonstrates how distributed systems monitor application health, maintain logs, and provide real-time dashboards similar to enterprise infrastructure monitoring tools.
