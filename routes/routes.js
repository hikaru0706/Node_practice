var express = require("express");
var router = express.Router();
var quizController = require("../controllers/QuizController");

// If we access '/',we render index.
router.get('/',(req,res)=>{
    res.render("index");
});

//From index.ejs we can jump to quiz.ejs by accessing '/quiz'
router.get('/quiz',(req,res)=>{
    res.render("quiz");
});

//By fetching '/quiz-data' we can get quiz-data from serverside.
router.get('/quiz-data',quizController.doGetQuiz);

module.exports = router;