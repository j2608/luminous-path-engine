const express = require('express');
const cors = require('cors');
const path = require('path');
const compression = require('compression');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(compression());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files from the React app build directory
app.use(express.static(path.join(__dirname, '../dist')));

// API routes
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Luminous Path Engine Backend is running',
    timestamp: new Date().toISOString()
  });
});

app.get('/api/version', (req, res) => {
  res.json({ 
    version: '1.0.0',
    name: 'Luminous Path Engine',
    description: 'A modern web application backend'
  });
});

// Sample API endpoint for demonstration
app.get('/api/data', (req, res) => {
  res.json({
    message: 'Welcome to Luminous Path Engine!',
    data: [
      { id: 1, name: 'Component A', type: 'feature' },
      { id: 2, name: 'Component B', type: 'utility' },
      { id: 3, name: 'Component C', type: 'widget' }
    ],
    timestamp: new Date().toISOString()
  });
});

// Catch all handler: send back React's index.html file for client-side routing
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: 'Something went wrong!',
    message: process.env.NODE_ENV === 'development' ? err.message : 'Internal server error'
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Luminous Path Engine Backend running on port ${PORT}`);
  console.log(`Frontend served at: http://localhost:${PORT}`);
  console.log(`API available at: http://localhost:${PORT}/api`);
});

module.exports = app;