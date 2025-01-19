// server.js

const express = require('express');
const cors = require('cors');
const connectDB = require('./db/db');
const { readdirSync } = require('fs');
const { join } = require('path');
const app = express();
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

// Connect to the database
connectDB()
  .then(() => {
    console.log('Database connected successfully');
  })
  .catch((error) => {
    console.error('Database connection error:', error);
    process.exit(1);
  });

// Define port
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
const routesPath = './routes';
readdirSync(routesPath).forEach((file) => {
  const routePath = join(__dirname, routesPath, file);
  if (file.endsWith('.js') && file !== 'index.js') {
    const route = require(routePath);
    if (typeof route === 'function') {
      app.use('/api/v1', route);
    }
  }
});

// Error handler for invalid routes
app.use((req, res, next) => {
  const error = new Error('Not found');
  error.status = 404;
  next(error);
});

// Error handler middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(err.status || 500).json({
    message: err.message,
    error: process.env.NODE_ENV === 'production' ? {} : err,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
