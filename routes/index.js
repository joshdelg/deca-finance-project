const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middleware/auth');
const modules = require('../config/moduleData');

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
        modules: modules
    });
});

module.exports = router;