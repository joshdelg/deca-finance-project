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

    modules.forEach((mod, i) => {
        if(req.user.modules[i]) {
            mod.completed = req.user.modules[i].complete
        } else {
            mod.completed = false;
        }
    });

    res.render('dashboard', {
        name: req.user.displayName.split(' ')[0],
        modules: modules,
    });
});

module.exports = router;