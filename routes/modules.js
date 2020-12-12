const express = require('express');
const router = express.Router();
const modules = require('../config/moduleData');
const questionsData = require('../config/questionData');
const User = require('../models/User');

router.get('/:moduleId', (req, res) => {
    if(req.params.moduleId >= 0 && req.params.moduleId < modules.length) {

        const qs = req.user.modules[req.params.moduleId].questions;
        let userRes = [];
        qs.forEach((q) => {
            userRes.push({started: q.started, answer: q.answer, correct: q.correct});
        })
        console.log(userRes[0]);
        res.render('module', {
            module: modules[req.params.moduleId],
            userRes: userRes,
            questions: questionsData[req.params.moduleId].questions
        });
    } else {
        res.status(404).send("That page doesn't seem to exist :(");
    }
});

router.post('/submit', async(req, res) => {
    let newQuestions = [];
    Object.entries(req.body).forEach((kv, i) => {
        if(kv[0].startsWith('q')) {
            newQuestions.push({started: true, answer: parseInt(kv[1]), correct: (true) ? (parseInt(kv[1]) === questionsData[req.body.moduleId].questions[i].correctAns) : false});
        }
    });


    const userFound = await User.findById(req.user.id);
    userFound.modules[req.body.moduleId].questions = newQuestions;
    userFound.modules[req.body.moduleId].complete = true;
    userFound.save();
    console.log(userFound.modules[0]);

    res.redirect('/dashboard');
});

module.exports = router;