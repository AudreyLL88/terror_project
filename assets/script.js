//getting all required elements
const start_btn_slasher = document.querySelector(".start-btn-slasher button");
const start_btn_monster = document.querySelector(".start-btn-monster button");
const start_btn_paranormal = document.querySelector(".start-btn-paranormal button");
const rule_box = document.querySelector(".rule_box");
const quiz_back = document.querySelector(".quiz_back");
const container_disabled = document.querySelector(".card-container");


let activeCard = "None"

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