//getting all required elements
const start_btn_slasher = document.querySelector(".start-btn-slasher button");
const start_btn_monster = document.querySelector(".start-btn-monster button");
const start_btn_paranormal = document.querySelector(".start-btn-paranormal button");
const rule_box = document.querySelector(".rule_box");
const quiz_back = document.querySelector(".quiz_back");
const container_disabled = document.querySelector(".card-container");
const slasherWrap = document.querySelector(".card-wrap1");
const monsterWrap = document.querySelector(".card-wrap3");
const paranormalWrap = document.querySelector(".card-wrap2");
const exit_btn = rule_box.querySelector(".buttons .quit");
const continue_btn = rule_box.querySelector(".buttons .start");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_sec");
const next_btn = quiz_box.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const next_card = result_box.querySelector(".buttons .next_card");

let activeCard = "None"

//Card buttons 

start_btn_slasher.onclick =()=>{
    activeCard = "slasher";
    container_disabled.classList.add("disabled");
    quiz_back.classList.add("activeBack");
    rule_box.classList.add("activeInfo");
    slasherWrap.classList.add("noHover");
}

start_btn_monster.onclick =()=>{
    activeCard = "monster";
    container_disabled.classList.add("disabled");
    quiz_back.classList.add("activeBack");
    rule_box.classList.add("activeInfo");
    monsterWrap.classList.add("noHover");
}

start_btn_paranormal.onclick =()=>{
    activeCard = "paranormal";
    container_disabled.classList.add("disabled");
    quiz_back.classList.add("activeBack");
    rule_box.classList.add("activeInfo");
    paranormalWrap.classList.add("noHover");
}

// Rule box Exit Button

exit_btn.onclick =()=>{
    rule_box.classList.remove("activeInfo");
}

// Rule Box Play Button

continue_btn.onclick =()=>{
    rule_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
     showQuestions(0);
     queCounter(1);
     startTimer(15);
}

//Quiz box 

let que_count =  0;
let que_numb = 1;
let counter;
let timeValue = 15;
let userScore = 0;
let totalScore = 0;
let cardCount = 0;
let questionsArray;

//Quizz box questions/answers from array in questions.js

function showQuestions(index){
    let questionCategory = "None"
    if(activeCard == "slasher"){
        questionsArray = questions2;
    }
    else if(activeCard == "monster"){
        questionsArray = questions3;
    }
    else if(activeCard == "paranormal"){
        questionsArray = questions1;
    }
    const que_title = document.querySelector(".que_title");
    const que_name = document.querySelector(".que_name");
    let que_tag = '<span>'+ questionsArray[index].numb + ". " + questionsArray[index].question +'</span>';
    let option_tag = '<div class="option"><span>'+ questionsArray[index].options[0] +'</span></div>'
    + '<div class="option"><span>'+ questionsArray[index].options[1] +'</span></div>'
    + '<div class="option"><span>'+ questionsArray[index].options[2] +'</span></div>'
    + '<div class="option"><span>'+ questionsArray[index].options[3] +'</span></div>';
    que_name.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    que_title.innerHTML = questionsArray[index].category; 

    const option = option_list.querySelectorAll(".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}
//Allow to select function and display correct/wrong answers

function optionSelected(answer){
    clearInterval(counter);
    let userAns = answer.textContent;
    let correctAns = questionsArray[que_count].answer;
    const allOptions = option_list.children.length;
    if(userAns == correctAns){
        userScore += 1;
        totalScore += 1;
        console.log(userScore);
        answer.classList.add("correct");
        console.log("Answer is correct");

    }else{
        answer.classList.add("incorrect");
         console.log("Answer is wrong");

         for (i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct")
            }
        }
    }
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    }
    next_btn.style.display = "block";
}

//Next button display

next_btn.onclick =()=>{
   if(que_count < questionsArray.length -1){
        que_count++;
        que_numb++;
    showQuestions(que_count);
    queCounter(que_numb);
    clearInterval(counter);
    startTimer(timeValue);
    next_btn.style.display = "none";
   }else{
       console.log("Questions completed");
       showResult();
   };
}

// Question counter in Quizz box footer

function queCounter(index){
    const question_counter = document.querySelector(".total");
    let totalQuestionCountTag = '<span><p>'+ index +'</p> of <p>'+ questionsArray.length +'</p> Questions</span>';
    question_counter.innerHTML = totalQuestionCountTag;  
}

//Timer

function startTimer(time){
    counter = setInterval(timer, 1000);
    function timer(){
        timeCount.textContent = time;
        time--;
        if(time < 9){
            let addZero = timeCount.textContent;
            timeCount.textContent = "0" + addZero;
        }
        if(time < 0){
            clearInterval(counter);
             timeCount.textContent = "00";
        } 
    }
}

// Card result box

function showResult(){
    console.log("total score " + totalScore);
    cardCount += 1;
    console.log("card count " + cardCount);
    rule_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const cardScore = result_box.querySelector(".card_score");
    if (userScore > 3){ 
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questionsArray.length +'</p></span>';
        cardScore.innerHTML = scoreTag;  
    }
    else if(userScore > 1){ 
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questionsArray.length +'</p></span>';
        cardScore.innerHTML = scoreTag;
    }
    else{ 
        let scoreTag = '<span>and congrats! 🎉, You got <p>'+ userScore +'</p> out of <p>'+ questionsArray.length +'</p></span>';
        cardScore.innerHTML = scoreTag;
    }
}

//Next button on result box

next_card.onclick = ()=>{
    result_box.classList.remove("activeResult"); //hide result box
    timeValue = 15; 
    que_count = 0;
    que_numb = 1;
    userScore = 0;
    widthValue = 0;
    container_disabled.classList.remove("disabled");
    quiz_back.classList.remove("activeBack");
}