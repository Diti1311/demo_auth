const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../services/authService');

// POST: /api/auth/signup
router.post('/signup', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const result = await registerUser(email, password);
        return res.status(201).json(result);
    } catch (error) {
        return res.status(400).json({ error: error.message });
    }
});

// POST: /api/auth/login
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: 'Email and password are required' });
        }

        const result = await loginUser(email, password);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(401).json({ error: error.message });
    }
});

module.exports = router;