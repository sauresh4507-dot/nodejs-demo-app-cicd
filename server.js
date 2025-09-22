const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(express.json());

// Root endpoint
app.get('/', (req, res) => {
    res.json({
        message: '🚀 Hello from Node.js CI/CD Pipeline!',
        version: '1.0.0',
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// Health check endpoint
app.get('/health', (req, res) => {
    res.status(200).json({ 
        status: 'healthy',
        uptime: process.uptime(),
        timestamp: new Date().toISOString()
    });
});

// API info endpoint
app.get('/api/info', (req, res) => {
    res.json({
        app: 'nodejs-demo-app',
        description: 'Demo app for CI/CD pipeline',
        endpoints: [
            'GET / - Welcome message',
            'GET /health - Health check',
            'GET /api/info - API information'
        ]
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎉 Server running on port ${PORT}`);
    console.log(`📍 Access at: http://localhost:${PORT}`);
});

// Export for testing
module.exports = app;