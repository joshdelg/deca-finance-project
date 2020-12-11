const express = require('express');
const router = express.Router();
const modules = require('../config/moduleData');
const User = require('../models/User');

router.get('/:moduleId', (req, res) => {
    if(req.params.moduleId >= 0 && req.params.moduleId < modules.length)
        res.render('module', { module: modules[req.params.moduleId] });
    else
        res.status(404).send("That page doesn't seem to exist :(");
});

router.post('/submit', async(req, res) => {
    let newQuestions = [];
    Object.entries(req.body).forEach((kv) => {
        newQuestions.push({started: true, answer: parseInt(kv[1])});
    });

    const userFound = await User.findById(req.user.id);
    console.log(userFound);
    userFound.modules[0].questions = newQuestions;
    userFound.save();
    console.log(userFound);

    res.redirect('/dashboard');
});

module.exports = router;