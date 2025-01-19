// userRoutes.js

const express = require('express');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Signup route
router.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user
        const newUser = await User.create({ username, email, password: hashedPassword });
        // Generate JWT token
        const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET);
        // Send response with user data and token
        res.status(201).json({ user: newUser, token });
    } catch (error) {
        // Handle any errors
        console.error('Error signing up:', error);
        res.status(500).json({ message: 'Error signing up' });
    }
});

// Login route
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        const validPassword = await bcrypt.compare(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ message: 'Invalid email or password' });
        }
        const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
        res.status(200).json({ user, token });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
