/*jshint esversion: 6 */
const start_btn_slasher = document.querySelector(".start-btn-slasher button");
const start_btn_monster = document.querySelector(".start-btn-monster button");
const start_btn_paranormal = document.querySelector(".start-btn-paranormal button");
const rule_box = document.querySelector(".rule_box");
const continue_btn = document.querySelector(".buttons .start");
const quiz_box = document.querySelector(".quiz_box");
const option_list = document.querySelector(".option_list");
const timeCount = document.querySelector(".timer .timer_sec");
const slasherWrap = document.querySelector(".card-wrap1");
const monsterWrap = document.querySelector(".card-wrap3");
const paranormalWrap = document.querySelector(".card-wrap2");
const quiz_back = document.querySelector(".quiz_back");
const container_disabled = document.querySelector("#card-container");
const next_btn = document.querySelector(".next_btn");
const result_box = document.querySelector(".result_box");
const next_card = document.querySelector(".buttons .next_card");
const final_box = document.querySelector(".final_box");
const user_btn = document.getElementById('username-btn');
const card_container = document.getElementById('card-container');
const user_container = document.getElementById('username-container');
const title_container = document.getElementById('title-container');
const userInput = document.querySelector("#username");

//Local Storage 
let saveData = {
    "slasher card": false,
    "paranormal card": false,
    "monster card": false,
    "total score": 0
};
let cardCount = 0;

function saveGame(){
  localStorage.setItem(username, JSON.stringify(saveData));
};

function loadGame(){
  let Data = JSON.parse(localStorage.getItem(username));
  if(Data == null){
        console.log("No saved data found");
  }else{
      saveData = Data;
  }
};

function restoreGameScreen(){
    console.log("restoring");
    console.log(saveData);
    if(saveData["slasher card"] == true){
        slasherWrap.classList.add("noHover");
        cardCount += 1;
    }if(saveData["paranormal card"] == true){
        paranormalWrap.classList.add("noHover");
        cardCount += 1;
    }if(saveData["monster card"] == true){
     monsterWrap.classList.add("noHover");
     cardCount += 1;
    }if(cardCount == 3) {
        showFinal();
    }
}

//Showing Cards on username button click

function fadeIn(el){
 el.classList.add('fadein'); 
};

function fadeOut(el){
  el.classList.add('fadeout'); 
};

let username;

user_btn.addEventListener('click', function(){
  username = userInput.value;
  fadeIn(card_container);
  fadeIn(title_container);
  fadeOut(user_container);
  console.log(username);
  loadGame();
  restoreGameScreen();
  }
);

//Card buttons 

let activeCard = "none";

start_btn_slasher.onclick =()=>{
    activeCard = "slasher";
    container_disabled.classList.add("disabled");
    quiz_back.classList.add("activeBack");
    rule_box.classList.add("activeInfo");
    slasherWrap.classList.add("noHover");
};

start_btn_monster.onclick =()=>{
    activeCard = "monster";
    container_disabled.classList.add("disabled");
    quiz_back.classList.add("activeBack");
    rule_box.classList.add("activeInfo");
    monsterWrap.classList.add("noHover");
};

start_btn_paranormal.onclick =()=>{
    activeCard = "paranormal";
    container_disabled.classList.add("disabled");
    quiz_back.classList.add("activeBack");
    rule_box.classList.add("activeInfo");
    paranormalWrap.classList.add("noHover");
};

// Rule Box Play Button

continue_btn.onclick =()=>{
    rule_box.classList.remove("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
    queCounter(1);
    startTimer(15);
};

//Quiz box 

let i;
let que_count =  0;
let que_numb = 1;
let counter;
let timeValue = 15;
let userScore = 0;
let totalScore = 0;

let questionsArray;

function showQuestions(index){
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
    + '<div class="option"><span>'+ questionsArray[index].options[1]+'</span></div>'
    + '<div class="option"><span>'+ questionsArray[index].options[2]+'</span></div>'
    + '<div class="option"><span>'+ questionsArray[index].options[3]+'</span></div>';
    que_name.innerHTML = que_tag; 
    option_list.innerHTML = option_tag; 
    que_title.innerHTML = questionsArray[index].category; 

    const option = option_list.querySelectorAll(".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

//Allow to select function and display correct/wrong answers

function  optionSelected(answer){
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
            option_list.children[i].setAttribute("class", "option correct");
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
   }
};

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
        }if(time < 0){
            clearInterval(counter);
             timeCount.textContent = "00";
        }   
    }
}

// Card result box

    function showResult(){
    saveData["total score"] = totalScore;
    if(activeCard == "slasher"){
        saveData["slasher card"] = true;
    }else if(activeCard == "paranormal"){
        saveData["paranormal card"] = true;
    }else if(activeCard == "monster"){
        saveData["monster card"] = true;
    };
    saveGame();
    console.log("total score " + totalScore);
    cardCount += 1;
    console.log("card count " + cardCount);
    rule_box.classList.remove("activeInfo"); 
    quiz_box.classList.remove("activeQuiz"); 
    result_box.classList.add("activeResult"); 
    const cardScore = result_box.querySelector(".card_score");
    if (userScore > 3){ 
        let scoreTag = `<span>You survived this time... You have <p>${userScore}</p> out of <p>${questionsArray.length}</p></span>`;
        cardScore.innerHTML = scoreTag;  
    }else if(userScore > 2){ 
        let scoreTag = `<span>You barely made it... You have <p>${userScore}</p> out of <p>${questionsArray.length}</p></span>`;
        cardScore.innerHTML = scoreTag;
    }else{ 
        let scoreTag = `<span> You disappeared! You only have <p>${userScore}</p> out of <p>${questionsArray.length}</p></span>`;
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
    if(cardCount >= 3){
        showFinal();
    }else{
        container_disabled.classList.remove("disabled");
        quiz_back.classList.remove("activeBack");
    }
};

//Final result box 

function showFinal(){ 
    localStorage.removeItem(username);
    result_box.classList.remove("activeResult"); 
    final_box.classList.add("activeFinal");
    const finalText = final_box.querySelector(".final_score");
    if (userScore == 15){ 
        let finalTag = '<span>and congrats! 🎉, You got <p>'+ totalScore +'</p></span>';
        finalText.innerHTML = finalTag;  
    }
    else if(userScore > 10){ 
        let finalTag = '<span>and nice 😎, You got only <p>'+ totalScore +'</p></span>';
        finalText.innerHTML = finalTag;
    }
    else{ 
        let finalTag = '<span>and sorry 😐, You got only <p>'+ totalScore +'</p></span>';
        finalText.innerHTML = finalTag;
    }
};


