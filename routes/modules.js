const express = require('express');
const router = express.Router();
const modules = require('../config/moduleData');

router.get('/:moduleId', (req, res) => {
    if(req.params.moduleId >= 0 && req.params.moduleId < modules.length)
        res.render('module', { module: modules[req.params.moduleId] });
    else
        res.status(404).send("That page doesn't seem to exist :(");
})

module.exports = router;