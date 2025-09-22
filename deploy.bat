@echo off
REM Deployment script for Luminous Path Engine (Windows)

echo 🚀 Starting Luminous Path Engine deployment...

REM Build the frontend
echo 📦 Building frontend...
call npm run build

REM Install backend dependencies
echo 🔧 Installing backend dependencies...
cd backend
call npm install

REM Start the backend server
echo 🌟 Starting backend server...
call npm start