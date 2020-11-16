const express = require('express');
const router = express.Router();
const modules = require('../config/moduleData');

router.get('/:moduleId', (req, res) => {
    res.render('module', { module: modules[req.params.moduleId] });
})

module.exports = router;