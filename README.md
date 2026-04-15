🏥 Health Care Aggregator System

A Distributed Health Check Aggregator System built using Node.js, Express.js, MongoDB, and Shell Scripts to monitor and report performance metrics and telemetry of web services in real time.

This project aggregates multiple health signals into a unified system dashboard, stores historical telemetry logs, and simulates enterprise-grade monitoring similar to Kubernetes and AWS infrastructure health systems.

📌 Project Overview

The Health Care Aggregator System is designed to monitor system-level and service-level health metrics such as:

Memory Usage
Disk Usage
System Uptime
Dependency Health
Service Availability

It aggregates multiple health checks into a centralized endpoint:

/health

and stores logs into MongoDB, enabling continuous monitoring, historical analysis, and performance tracking.

This project simulates real-world health monitoring platforms such as:

Kubernetes Health Checks
AWS Elastic Load Balancer Health Monitoring
🎯 Objectives
Build a centralized health monitoring system
Implement liveness and readiness checks
Store health logs in MongoDB
Display real-time health data on a dashboard
Implement hierarchical health logic
Integrate Unix system health scripts
Track system telemetry continuously
Maintain team collaboration using Git
✨ Key Features
🖥️ Premium UI Dashboard
Modern dashboard interface
Clean layout with real-time metrics
Dynamic health status display
Health history tracking table
Auto-refresh capability
Status-based visual indicators
🧠 Intelligent Health Monitoring

✅ Express /health endpoint
✅ Real-time health monitoring
✅ Memory usage tracking
✅ Disk usage monitoring
✅ System uptime tracking
✅ MongoDB log storage
✅ Hierarchical health evaluation
✅ Dependency-based health logic

⚙️ Backend Architecture
Built using MVC (Model-View-Controller) pattern
Scalable API design
Centralized health controller
Structured MongoDB logging
Error handling middleware
REST-based endpoints
🖥️ Hardware & System Monitoring
Tracks physical disk usage
Tracks RAM usage
Detects system availability
Uses Unix shell scripts for diagnostics
Simulates real infrastructure checks
🧾 Automated Logging
Stores health logs automatically
Supports historical data retrieval
Enables performance trend tracking
Pagination-ready log system
🧱 System Architecture
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
🛠️ Technologies Used
Technology	Purpose
Node.js	Backend runtime
Express.js	API framework
MongoDB	Database
Mongoose	Database modeling
HTML5	Frontend structure
CSS3	UI styling
JavaScript	Frontend logic
Shell Scripts	System health checks
dotenv	Environment config
node-disk-info	Disk telemetry
cors	Cross-origin support
Git & GitHub	Version control
📂 Project Structure
health-aggregator-team

│ package.json
│ README.md
│ .gitignore
│ .env

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

├── logs
│   └── health-log.json

├── docs
│   └── system-design.txt
⚙️ Setup and Installation

Follow these steps to run the project locally.

Step 1 — Clone Repository
git clone https://github.com/YOUR-USERNAME/health-aggregator-team.git
cd health-aggregator-team
Step 2 — Configure Environment

Create .env file in root directory:

MONGO_URI=mongodb://127.0.0.1:27017/healthDB
PORT=5000
Step 3 — Install Dependencies
npm install
Step 4 — Start MongoDB

Open MongoDB Compass and connect:

mongodb://127.0.0.1:27017

Database Name:

healthDB
Step 5 — Run Backend Server
npm start

Expected Output:

MongoDB Connected
Server running on port 5000
Step 6 — Open Frontend Dashboard

Open:

frontend/index.html

Or use:

Live Server (VS Code)
🌐 API Endpoints
Health Endpoint
GET /api/v1/health

Returns:

{
  "overallStatus": "OK",
  "memoryStatus": "Healthy",
  "diskStatus": "Healthy",
  "uptime": 123.45,
  "memoryUsage": "48 MB",
  "diskUsage": "42%",
  "timestamp": "2026-04-02T10:20:30Z"
}
Logs Endpoint
GET /api/v1/logs?limit=X&page=Y

Returns:

Paginated historical logs
Stored MongoDB telemetry
Liveness Check
GET /live

Used to check:

Server running status
Readiness Check
GET /ready

Used to check:

Dependency readiness
Database connectivity
🧪 Health Monitoring Logic

The system determines overall health based on dependency status.

Hierarchical Logic Example
If Memory < Threshold → Healthy
If Disk < Threshold → Healthy
If MongoDB Connected → Healthy

If Any Fails → DEGRADED
If Critical Failure → DOWN

This implements:

🎯 Hierarchical Health Checking

📊 Frontend Dashboard

The dashboard displays:

Overall System Health
Memory Usage
Disk Usage
Uptime
Last Check Timestamp
Health History Table
Status Indicators
Auto-refresh every few seconds
🗄️ Database Design

Database:

healthDB

Collection:

healthlogs

Schema Fields:

status
memoryUsage
diskUsage
uptime
timestamp
🖥️ Shell Scripts

Used for Unix-level health diagnostics.

Memory Check Script
scripts/check-memory.sh

Checks:

System RAM usage
Disk Check Script
scripts/check-disk.sh

Checks:

Disk utilization
Storage availability
🔄 Git Workflow

All team members contribute using Git version control.

Basic workflow:

git add .
git commit -m "Update message"
git push

Used for:

Version tracking
Team collaboration
Feature updates
👥 Team Members

Rishabh Anand Singh — Backend Development
Rishika Goyal — Frontend Development
Raja Singh — Database Integration
Sachin Mishra — Shell Script Development
Priyanshu Rathore — Documentation
📈 Future Enhancements (Phase-3)
Deploy system to cloud (Render/Railway)
Add authentication layer
Implement email alerts
Add notification system
Improve UI dashboard
Docker containerization
Add multi-service health monitoring
Integrate real-time graphs
📚 References
Kubernetes Health Checks
AWS Elastic Load Balancer Health Monitoring
Node.js Documentation
MongoDB Documentation
Express.js Documentation
📌 License

This project is developed for academic and learning purposes.

⭐ Conclusion

The Health Care Aggregator System demonstrates how modern distributed systems monitor service health, track dependencies, and provide real-time visibility into application status.

It replicates enterprise-grade health monitoring workflows used in production environments, combining system-level telemetry, centralized logging, and dynamic dashboards into a unified platform.