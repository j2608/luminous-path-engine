#!/bin/bash
# Deployment script for Luminous Path Engine

echo "🚀 Starting Luminous Path Engine deployment..."

# Build the frontend
echo "📦 Building frontend..."
npm run build

# Install backend dependencies
echo "🔧 Installing backend dependencies..."
cd backend && npm install

# Start the backend server
echo "🌟 Starting backend server..."
npm start