"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.api = exports.data = exports.version = exports.health = void 0;
const https_1 = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");
// Health check endpoint
exports.health = (0, https_1.onRequest)({ cors: true }, (request, response) => {
    logger.info("Health check requested", { structuredData: true });
    response.json({
        status: "OK",
        message: "Luminous Path Engine Backend is running",
        timestamp: new Date().toISOString(),
        environment: "Firebase Functions"
    });
});
// Version endpoint
exports.version = (0, https_1.onRequest)({ cors: true }, (request, response) => {
    logger.info("Version info requested", { structuredData: true });
    response.json({
        version: "1.0.0",
        name: "Luminous Path Engine",
        description: "A modern web application backend",
        platform: "Firebase",
        runtime: "Node.js Cloud Functions"
    });
});
// Data endpoint
exports.data = (0, https_1.onRequest)({ cors: true }, (request, response) => {
    logger.info("Data requested", { structuredData: true });
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
exports.api = (0, https_1.onRequest)({ cors: true }, (request, response) => {
    logger.info("API info requested", { structuredData: true });
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
//# sourceMappingURL=index.js.map