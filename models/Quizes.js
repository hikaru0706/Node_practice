const API_KEY="https://opentdb.com/api.php?amount=2&type=multiple";
const fetch = require('node-fetch');
const Quiz=require("../public/javascripts/quiz");

const ResponseAnswers=[];

module.exports={
    getQuiz:function(res){
      fetch(API_KEY)
      .then(response => response.json())
      .then(json => {const quiz = new Quiz(json);
          for (var i = 1; i <= quiz.getNumOfQuiz(); i++) {
            ResponseAnswers.push(quiz.getAnswers(i));
      }
            res.send({
              quiz,
              Answers:ResponseAnswers
            });
        });
    }
};

