const quizDB = [
    {
        question: "Q1: Who is the highest run getter in a single ODI match? ",
        a : "Rohit Sharma",
        b : "Virat Kohli",
        c : "MS Dhoni",
        d : "Sachin Tendulkar",
        ans : "ans1"
    },
    {
        question: "Q2: Who is the fastest to reach 23000 international runs? ",
        a : "Sachin Tendulkar",
        b : "Rahul Dravid",
        c : "Virat Kohli",
        d : "Ricky Ponting",
        ans : "ans3"
    },
    {
        question: "Q3: Who is the fastest indian pacer to reach 100 test wickets? ",
        a : "Kapil Dev",
        b : "Mohd Shami",
        c : "Jasprit Bumrah",
        d : "Zaheer Khan",
        ans : 'ans3'
    },
    {
        question: "Q4: Who holds the best bowling average in test cricket so far? ",
        a : "Dale Steyn",
        b : "Gleen Mcgrath",
        c : "James Anderson",
        d : "Shane Warne"  ,
        ans : 'ans2'
    },
    {
        question: "Q5: When does the Ball offer Reverse swing ",
        a : "When the ball is completely new",
        b : "When the ball becomes old",
        c : "When the ball becomes old with shine on both sides",
        d : "When the ball becomes old with shine on one side"  ,
        ans : 'ans4'
    }
];

const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.getElementById('submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');


let questionCount = 0;
let scoreCount = 0;

const loadQuestion = () => {
    const questionList = quizDB[questionCount]
    question.innerHTML = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
};


loadQuestion();

const getCheckedAnswer = () => {
    let answer;
    answers.forEach((curAnsEle) => {
        if(curAnsEle.checked){
            answer = curAnsEle.id;
        }
    });
    return answer;
};


const deselectall = () => {
    answers.forEach((curAnsEle) => {
        curAnsEle.checked = false;
    });
};

submit.addEventListener('click',() => {
    
    const checkAnswer = getCheckedAnswer();
    if(checkAnswer === quizDB[questionCount].ans){
        scoreCount++;
    }
    questionCount++;

    deselectall();

    if(questionCount < quizDB.length)
    {
       loadQuestion();
    }else{



       submit.style.display = "none";
       showScore.innerHTML = `
       
       <h3>You scored ${scoreCount}/${quizDB.length} &#128515;</h3>
       <button class="btn" onclick="location.reload()">Try Again</button>
       `;

       showScore.classList.remove('scoreArea');
    }
    
});



