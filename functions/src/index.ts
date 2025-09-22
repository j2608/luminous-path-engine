import {onRequest} from "firebase-functions/v2/https";
import * as logger from "firebase-functions/logger";

// Health check endpoint
export const health = onRequest({cors: true}, (request, response) => {
  logger.info("Health check requested", {structuredData: true});
  
  response.json({
    status: "OK",
    message: "Luminous Path Engine Backend is running",
    timestamp: new Date().toISOString(),
    environment: "Firebase Functions"
  });
});

// Version endpoint
export const version = onRequest({cors: true}, (request, response) => {
  logger.info("Version info requested", {structuredData: true});
  
  response.json({
    version: "1.0.0",
    name: "Luminous Path Engine",
    description: "A modern web application backend",
    platform: "Firebase",
    runtime: "Node.js Cloud Functions"
  });
});

// Data endpoint
export const data = onRequest({cors: true}, (request, response) => {
  logger.info("Data requested", {structuredData: true});
  
  response.json({
    message: "Welcome to Luminous Path Engine!",
    data: [
      { id: 1, name: "Component A", type: "feature", status: "active" },
      { id: 2, name: "Component B", type: "utility", status: "active" },
      { id: 3, name: "Component C", type: "widget", status: "active" },
      { id: 4, name: "Authentication System", type: "security", status: "ready" },
      { id: 5, name: "Dashboard Analytics", type: "analytics", status: "ready" }
    ],
    timestamp: new Date().toISOString(),
    server: "Firebase Cloud Functions"
  });
});

// Main API endpoint
export const api = onRequest({cors: true}, (request, response) => {
  logger.info("API info requested", {structuredData: true});
  
  response.json({
    message: "Luminous Path Engine API",
    version: "1.0.0",
    endpoints: {
      health: "/health",
      version: "/version", 
      data: "/data"
    },
    documentation: "https://github.com/j2608/luminous-path-engine",
    timestamp: new Date().toISOString()
  });
});