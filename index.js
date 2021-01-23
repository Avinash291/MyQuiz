const readLineSync = require('readline-sync');

function start()
{
  const start = readLineSync.question('\nAre you ready for the quiz?' + '\n');

  if(start == "yes")
  {
    console.log("Good, let's start!");
    main();
  }
  else
  {
    console.log("No worries, comeback later once you are ready.");
    return;
  }
}
var myquestions = [
  {
    question : " India is a federal union comprising twenty-nine states and how many union territories?",
    answers : {
      a : 6,
      b : 7,
      c : 8,
      d : 9
    },
    correctAnswer : 'b'
  },
  {
    question : "Which of the following is the capital of Arunachal Pradesh?",
    answers : {
      a : 'Itanagar',
      b : 'Dispur',
      c : 'Imphal',
      d : 'Panaji'
    },
    correctAnswer : 'a'
  },
  {
    question : "What are the major languages spoken in Andhra Pradesh?",
    answers : {
      a : 'English and Telugu',
      b : 'Telugu and Urdu',
      c : 'Telugu and Kannada',
      d : 'All of the above languages'
    },
    correctAnswer : 'b'
  },
  {
    question : "What is the state flower of Haryana?",
    answers : {
      a : 'Lotus',
      b : 'Rhododendron',
      c : 'Golden Shower',
      d : 'Not declared'
    },
    correctAnswer : 'a'
  },
  {
    question : "Which of the following states is not located in the North?",
    answers : {
      a : 'Jharkhand',
      b : 'Jammu and Kashmir',
      c : 'Himachal Pradesh',
      d : 'Haryana'
    },
    correctAnswer : 'a'
  },
];
function main(){
  let score = 0;
  for(var iterator = 0; iterator < myquestions.length; iterator++)
  {
    showQuestion(iterator);
    console.log('\n');
    showAnswers(iterator);
    console.log('\n');
    var letters = /^[a-d]+$/;
    const user_answer = readLineSync.question('Enter your option: ' + '\n');
    if(user_answer.match(letters))
    {
      if (user_answer == myquestions[iterator].correctAnswer)
      {
      console.log('Great! Correct Answer.' + '\n');
      score = score + 1;
      }
      else
      {
      console.log(`Sorry! Wrong Answer` + '\n');
      }
    }
    else{
      console.log('Please choose from the mentioned options! You have to restart the quiz!!' + '\n');
      return;
    }
  }
  DisplayScore(score);
}
function showQuestion(questionnumber){
  console.log(`${myquestions[questionnumber].question}`);
}

//showQuestion(myquestions);
function showAnswers(questionnumber){

  for(var abc in myquestions[questionnumber].answers)
  {
    console.log(`${abc} ${myquestions[questionnumber].answers[abc]}`);
  }
}

function DisplayScore(score){
  console.log(`You scored ${score} out of ${myquestions.length}`);
}

start();
