const ctrlAuth = require('../controllers/authentication');
const ctrlProfile = require('../controllers/profile');

const express = require('express');
const router = express.Router();

const jwt = require('express-jwt');
require('dotenv').config();
const auth = jwt({
    secret: process.env.SECRET,
    userProperty: 'payload'
});

// Profile
router.get('/profile', auth, ctrlProfile.profileRead);

// Authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;