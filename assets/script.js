/*jshint esversion: 6 */
//Buttons const
const start_btn_slasher = document.querySelector(".start-btn-slasher button");//slasher card button
const start_btn_monster = document.querySelector(".start-btn-monster button"); //monster card button
const start_btn_paranormal = document.querySelector(".start-btn-paranormal button"); //paranormal card button
const continue_btn = document.querySelector(".buttons .start"); //Info box continue button
const next_btn = document.querySelector(".next_btn"); //Next button in Quiz box
const user_btn = document.getElementById('username-btn'); //Start button in username box
const next_card = document.querySelector(".buttons .next_card"); //Result box next button

//Boxes and containers const
const rule_box = document.querySelector(".rule_box");
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const final_box = document.querySelector(".final_box");
const quiz_back = document.querySelector(".quiz_back"); // quiz background
const container_disabled = document.querySelector("#card-container"); //removes card container for sizing 
const card_container = document.getElementById('card-container'); //card container fade in after username box
const user_container = document.getElementById('username-container');
const title_container = document.getElementById('title-container'); //title container fade in

//Card wraps const
const slasherWrap = document.querySelector(".card-wrap1"); //card wrap slasher card
const monsterWrap = document.querySelector(".card-wrap3"); //card wrap monster card
const paranormalWrap = document.querySelector(".card-wrap2"); //card wrap paranormal card

//Quiz Box const
const option_list = document.querySelector(".option_list"); // select options for quizz
const timeCount = document.querySelector(".timer .timer_sec"); //timer 

//Local storage const
const userInput = document.querySelector("#username"); //Username data

//Variables 
let cardCount = 0; //card counter
let activeCard = "none"; //check cards played/non played
let i;
let que_count =  0; //counts question in footer
let que_numb = 1; // select question number
let counter;
let timeValue = 15; //set time value to 15 sec
let userScore = 0; // calculate user score
let totalScore = 0; // calculate final score
let questionsArray; //stores question arrays
let username; //set username value
let saveData = {
    "slasher card": false,
    "paranormal card": false,
    "monster card": false,
    "total score": 0
};// card and score dictionary for local storage

//Local Storage 

function saveGame(){
  localStorage.setItem(username, JSON.stringify(saveData));
} //Save game data 

function loadGame(){
  let Data = JSON.parse(localStorage.getItem(username));
  if(Data == null){
        console.log("No saved data found");
  }else{
      saveData = Data;
  }
} //load previous username or create username

//Restoring of the cards played/already played
function restoreGameScreen(){
    console.log("restoring");
    console.log(saveData);
    if(saveData["slasher card"] == true){
        slasherWrap.classList.add("noHover"); //removes hover on card
        cardCount += 1; //add to card counter
    }if(saveData["paranormal card"] == true){
        paranormalWrap.classList.add("noHover"); //removes hover on card
        cardCount += 1; //add to card counter
    }if(saveData["monster card"] == true){
     monsterWrap.classList.add("noHover"); //removes hover on card
     cardCount += 1; //add to card counter
    }if(cardCount == 3) {
        showFinal(); //Shows final result if all cards are played
    }
} 

//Showing Cards on username button click

function fadeIn(el){
 el.classList.add('fadein'); 
}

function fadeOut(el){
  el.classList.add('fadeout'); 
}

user_btn.addEventListener('click', function(){
  username = userInput.value;
  fadeIn(card_container); //card container fade in
  fadeIn(title_container); //title container fade in
  fadeOut(user_container); //username box fade out
  loadGame(); ////load previous username or create username
  restoreGameScreen(); // restore game screen depending on loadGame status
  }
);

//Card buttons 

start_btn_slasher.onclick =()=>{
    activeCard = "slasher"; //check active card
    container_disabled.classList.add("disabled"); //removes card container
    quiz_back.classList.add("activeBack"); //activates quiz background
    rule_box.classList.add("activeInfo"); // activate rule box
    slasherWrap.classList.add("noHover");//removes hover from the played card
}; //

start_btn_monster.onclick =()=>{
    activeCard = "monster"; //check active card
    container_disabled.classList.add("disabled");//removes card container
    quiz_back.classList.add("activeBack");//activates quiz background
    rule_box.classList.add("activeInfo");// activate rule box
    monsterWrap.classList.add("noHover");//removes hover from the played card
};

start_btn_paranormal.onclick =()=>{
    activeCard = "paranormal";//check active card
    container_disabled.classList.add("disabled");//removes card container
    quiz_back.classList.add("activeBack");//activates quiz background
    rule_box.classList.add("activeInfo");// activate rule box
    paranormalWrap.classList.add("noHover");//removes hover from the played card
};

// Rule Box Play Button

continue_btn.onclick =()=>{
    rule_box.classList.remove("activeInfo");//removes rule container
    quiz_box.classList.add("activeQuiz");//activates quiz box
    showQuestions(0); // Show the questions from questions.js
    queCounter(1); //Count questions
    startTimer(15); //Start timer at 15sec
};

//Quiz box 

function showQuestions(index){
    if(activeCard == "slasher"){
        questionsArray = questions2;
    }//set question array to active card 
    else if(activeCard == "monster"){
        questionsArray = questions3;
    }//set question array to active card 
    else if(activeCard == "paranormal"){
        questionsArray = questions1;
    }//set question array to active card 
    const que_title = document.querySelector(".que_title"); //store question title
    const que_name = document.querySelector(".que_name"); //store question name
    let que_tag = '<span>'+ questionsArray[index].numb + ". " + questionsArray[index].question +'</span>'; // created question tag from array
    let option_tag = '<div class="option"><span>'+ questionsArray[index].options[0] +'</span></div>' // get options from question array
    + '<div class="option"><span>'+ questionsArray[index].options[1]+'</span></div>' // get options from question array
    + '<div class="option"><span>'+ questionsArray[index].options[2]+'</span></div>' // get options from question array
    + '<div class="option"><span>'+ questionsArray[index].options[3]+'</span></div>'; // get options from question array
    que_name.innerHTML = que_tag; //sets question name in HTML file with que_tag span
    option_list.innerHTML = option_tag; //sets options in HTML file with option_tag 
    que_title.innerHTML = questionsArray[index].category; //sets quiz category in HTML file from array.

    const option = option_list.querySelectorAll(".option");
    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }//allows to select an option on click
}

//Allow to select function and display correct/wrong answers

function  optionSelected(answer){
    clearInterval(counter);//timer restart
    let userAns = answer.textContent; //set username answer
    let correctAns = questionsArray[que_count].answer; //set correct answer from question array
    const allOptions = option_list.children.length; //targets all options
    if(userAns == correctAns){
        userScore += 1; //add point to card score
        totalScore += 1; //add point to final score
        console.log(userScore); //console shows user score
        answer.classList.add("correct");//add green colors
        console.log("Answer is correct"); // console shows correct answer

    }else{
        answer.classList.add("incorrect"); //add red colors
         console.log("Answer is wrong"); //console shows wrong answer

         for (i = 0; i < allOptions; i++) {
            if(option_list.children[i].textContent == correctAns){
            option_list.children[i].setAttribute("class", "option correct");
            }//shows correct answer if wrong one is clicked
        }
    }
    
    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add("disabled"); 
    } //disable other options after click
    next_btn.style.display = "block"; //displays button after answer is selected
}

//Next button display

next_btn.onclick =()=>{
   if(que_count < questionsArray.length -1){
        que_count++;//add to footer question counter
        que_numb++;//add to question number
    showQuestions(que_count);//shows following question and options
    queCounter(que_numb);//update question counter in footer
    clearInterval(counter); //timer reset
    startTimer(timeValue);//start timer
    next_btn.style.display = "none";//removes next button until click
   }else{
       console.log("Questions completed");
       showResult();//if all 5 questions are completed, it shows the card result box
   }
};

// Question counter in Quizz box footer

function queCounter(index){
    const question_counter = document.querySelector(".total"); //select the CSS class in quiz footer
    let totalQuestionCountTag = '<span><p>'+ index +'</p> of <p>'+ questionsArray.length +'</p> Questions</span>'; //creates a span storing question array length
    question_counter.innerHTML = totalQuestionCountTag;  // insert span in HTML
}

//Timer

function startTimer(time){
    counter = setInterval(timer, 1000); //set counter variable interval to seconds
    function timer(){
        timeCount.textContent = time;
        time--; //decreasing
        if(time < 9){
            let addZero = timeCount.textContent; 
            timeCount.textContent = "0" + addZero; //add a 0 from 9
        }if(time < 0){
            clearInterval(counter);
             timeCount.textContent = "00"; //stops timer at 00
             const allOptions = option_list.children.length; //gett options items
             let correcAns = questionsArray[que_count].answer; //correct answer from questions array
             for(i=0; i < allOptions; i++){
                if(option_list.children[i].textContent == correcAns){ //match option to correct answer
                    option_list.children[i].setAttribute("class", "option correct"); //adding green color answer
                    console.log("Time Off: Auto selected correct answer.");
                }
            }
            for(i=0; i < allOptions; i++){
                option_list.children[i].classList.add("disabled"); // disable all options
            }
            next_btn.style.display = "block"; //show the buttons once option is selected
        }
    }
}

// Card result box

    function showResult(){
        saveData["total score"] = totalScore; //store in total score
        if(activeCard == "slasher"){
            saveData["slasher card"] = true; //save played card
        }else if(activeCard == "paranormal"){
            saveData["paranormal card"] = true;//save played card
        }else if(activeCard == "monster"){
            saveData["monster card"] = true;//save played card
        }
        saveGame(); //save card results
        cardCount += 1; //add to card counter when card questions are over
        rule_box.classList.remove("activeInfo"); //removes rule box
        quiz_box.classList.remove("activeQuiz"); //removes quiz box
        result_box.classList.add("activeResult"); //activate card result box
        const cardScore = result_box.querySelector(".card_score"); //set the card score 
        if (userScore > 3){ 
            let scoreTag = `<p>You survived this time... You have <span>${userScore}</span> out of <span>${questionsArray.length}</span> questions.</p>`;//create different span depending on the score
            cardScore.innerHTML = scoreTag;  //insert span in HTML
        }else if(userScore > 2){ 
            let scoreTag = `<p>You barely made it... You have <span>${userScore}</span> out of <span>${questionsArray.length}</span> questions.</p>`; //create different span depending on the score
            cardScore.innerHTML = scoreTag; //insert span in HTML
        }else{ 
            let scoreTag = `<p> You disappeared! You have only <span>${userScore}</span> out of <span>${questionsArray.length}</span> questions.</p>`; //create different span depending on the score
            cardScore.innerHTML = scoreTag; //insert span in HTML
        }
}

//Next button on result box

next_card.onclick = ()=>{
    result_box.classList.remove("activeResult"); //removes card result box
    timeValue = 15; //reset timer
    que_count = 0; //reset question counter
    que_numb = 1; //reset question number
    userScore = 0; //reset card score
    if(cardCount >= 3){
        showFinal(); //if all three cards are played it shows the final box
    }else{
        container_disabled.classList.remove("disabled"); //if still cards to play, reactivate the card container
        quiz_back.classList.remove("activeBack");//removes the quiz background
    }
};

//Final result box 

function showFinal(){ 
    localStorage.removeItem(username); //remove the username from local storage to allow replaying the game
    result_box.classList.remove("activeResult"); //removes 
    final_box.classList.add("activeFinal");//activate final box
    const finalText = final_box.querySelector(".final_score"); //stores final score text message
    const final_title = document.querySelector(".final_title");
    if (totalScore == 15){ 
        final_title.innerHTML = results[0].score; //select title from result.js array depending on score
        let finalTag = `<p>You know too much, maybe it was you all along! You have <span>${totalScore}</span> out of <span>15</span> questions.</p>`; //create different span depending on the score
        finalText.innerHTML = finalTag;  
    }
    else if(totalScore >= 13){ 
        final_title.innerHTML = results[1].score;  //select title from result.js array depending on score
        let finalTag = `<p>You survived! You are pure but traumatised forever, yay! You have <span>${totalScore}</span> out of <span>15</span> questions.</p>`; //create different span depending on the score
        finalText.innerHTML = finalTag;  //insert span in HTML
    }
    else if(totalScore >= 8){ 
        final_title.innerHTML = results[2].score;  //select title from result.js array depending on score
        let finalTag = `<p>You acted like a hero now you suffer for it! You have <span>${totalScore}</span> out of <span>15</span> questions.</p>`; //create different span depending on the score
        finalText.innerHTML = finalTag;  //insert span in HTML
    }
    else if(totalScore >= 3){ 
        final_title.innerHTML = results[3].score;  //select title from result.js array depending on score
        let finalTag = `<p>You fool! You should have stayed with the group! You only have <span>${totalScore}</span> out of <span>15</span> questions.</p>`; //create different span depending on the score
        finalText.innerHTML = finalTag;  //insert span in HTML
    }
     else { 
        final_title.innerHTML = results[4].score;  //select title from result.js array depending on score
        let finalTag = `<p>You just had to go and look didn't you? You only have <span>${totalScore}</span> out of <span>15</span> questions.</p>`; //create different span depending on the score
        finalText.innerHTML = finalTag;  //insert span in HTML
    }
}


