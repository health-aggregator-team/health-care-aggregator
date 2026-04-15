# Health Care Aggregator

A Distributed Health Check Aggregator System built to monitor and report the performance metrics and telemetry of web services in real time. 

## ✨ Features

- **Premium UI Dashboard**: A sleek, glassmorphism-inspired dark mode frontend with dynamic status badges, beautiful typography, and live-updating metric grids.
- **MVC Backend Architecture**: Built using a highly scalable Model-View-Controller design.
- **Genuine Hardware Probing**: Tracks machine telemetry—including true physical disk capacity mapping (via `node-disk-info`) and multi-level RAM allocation checks (Node.js Heap vs global OS capacity).
- **Graceful Error Handling**: Features a global middleware safety net that shields the Express loop from abrupt crashes during failing database pipelines.
- **Automated Logging**: Pings the system natively and saves comprehensive status logs directly to MongoDB, readable via REST endpoints with support for pagination.
- **Localhost Optimized**: Designed to be cleanly run and evaluated on local hardware environments without cloud dependencies.

## 🚀 Technologies

* **Frontend**: Vanilla HTML5, CSS3, Javascript
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Local Instance via Mongoose)
* **Tooling**: dotenv, node-disk-info, cors

## ⚙️ Setup and Installation

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/en/) and [MongoDB](https://www.mongodb.com/) installed and running locally.

### 1. Configure the Environment
Clone the repository, then create a `.env` file in the root directory:
```env
MONGO_URI=mongodb://127.0.0.1:27017/healthDB
PORT=5000
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Run the Backend Server
```bash
npm start
```
The server will now be listening on port 5000 (or whichever port is defined in `.env`).

### 4. Open the Interface
There is no build step required for the frontend! To access the dynamic dashboard, simply double click to open the `frontend/index.html` file into your favorite web browser.

## 📡 API Reference

- `GET /api/v1/health` - Resolves the current system diagnostics matrix and appends the log to MongoDB.
- `GET /api/v1/logs?limit=X&page=Y` - Returns chronological system telemetry logs, complete with limit and pagination parsing.
