const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');

// @desc Login/Landing page
// @route GET /
router.get('/', ensureGuest, (req, res) => {
    res.render('login', {
        layout: 'login'
    });
});

// @desc Dashboard
// @route GET /dashboard
router.get('/dashboard', (req, res) => {
    res.render('dashboard', {
        name: req.user.displayName.split(' ')[0],
        modules: [
            {
                name: "Module 1",
                description: "This is module 1",
                color: "teal"
            },
            {
                name: "Module 2",
                description: "Hello everyone my name is Josh",
                color: "red"
            },
            {
                name: "Module 3",
                description: "Hello this is module 3's description",
                color: "green"
            },
            {
                name: "Module 1",
                description: "This is module 1",
                color: "teal"
            },
            {
                name: "Module 2",
                description: "Hello everyone my name is Josh",
                color: "red"
            },
            {
                name: "Module 3",
                description: "Hello this is module 3's description",
                color: "green"
            }
        ]
    });
});

module.exports = router;