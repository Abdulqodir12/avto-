const elEightBtn = document.querySelector(".js-eight");
const time_el = document.querySelector(".watch .time");
const elFiveBtn = document.querySelector(".js-five");
const elThreeBtn = document.querySelector(".js-three");

let seconds = 0;
let interval = null;     

elEightBtn.addEventListener('click', starts);
elFiveBtn.addEventListener('click', start);
elThreeBtn.addEventListener('click', star);

function timer (){
    seconds++
    
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) / 60);
    let secs = seconds % 60;
    
    if(secs < 10) secs = '0' + secs;
    if(mins < 10) mins = "0" + mins;
    if(hrs < 10) hrs = "0" + hrs;
    
    time_el.innerText = `⌚️ ${hrs}:${mins}:${secs}`;
}

function starts () {

    if(interval){
        return
    }
    
    interval = setInterval(timer, 1000);   
}

setTimeout(()=>{
    clearInterval(interval);
    time_el.textContent = null;
},482000);

function start () {

    if(interval){
        return
    }
    
    interval = setInterval(timer, 1000);   
}

setTimeout(()=>{
    clearInterval(interval);
    time_el.textContent = null;
},302000);

function star () {

    if(interval){
        return
    }
    
    interval = setInterval(timer, 1000);   
}

setTimeout(()=>{
    clearInterval(interval);
    time_el.textContent = null;
},182000);

console.log(time_el);

const starts_btn = document.querySelector(".js-eight");
const start_btn = document.querySelector(".js-five");
const star_btn = document.querySelector(".js-three");
const continue_btn = starts_btn.querySelector('.restart');
const quiz_box = document.querySelector(".quiz_box");
const result_box = document.querySelector(".result_box");
const option_list = document.querySelector(".option_list");
const restart_quiz = result_box.querySelector(".restart");
const elSection = document.querySelector(".exam-section");

starts_btn.onclick = () => {
    elSection.classList.add("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}
start_btn.onclick = () => {
    elSection.classList.add("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}
star_btn.onclick = () => {
    elSection.classList.add("activeInfo");
    quiz_box.classList.add("activeQuiz");
    showQuestions(0);
}

let que_count = 0;
let userScore = 0;

function showQuestions(index) {
    const quiz_text = document.querySelector(".quiz_text");

    let que_tag = document.querySelector(".js-quiz-img").src = roadSymbols[index].symbol_img;
    let option_tag = '<div class="option"><span>' + roadSymbols[index].options[0] + '</span></div>'
    + '<div class="option"><span>'+ roadSymbols[index].options[1] + '</span></div>'
    + '<div class="option"><span>'+ roadSymbols[index].options[2] + '</span></div>'
    + '<div class="option"><span>'+ roadSymbols[index].options[3] + '</span></div>'

    quiz_text.src = que_tag;
    option_list.innerHTML = option_tag;

    const option = option_list.querySelectorAll(".option");

    for(i=0; i < option.length; i++){
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

const next_btn = document.querySelector('.next_btn');
next_btn.onclick = () => {
    if(que_count < roadSymbols.length - 1){
        que_count++;
        showQuestions(que_count);
    } else {
        showResult();
    }
}

function optionSelected(symbol_title){
    let userAns = symbol_title.textContent; // user tanlagan variant
    let correctAns = roadSymbols[que_count].symbol_title; // arraydan kelayotgan to'g'ri javob
    const allOptions = option_list.children.length; // barcha variantlarimizni olamiz
    // qancha bo'lishidan qatiy nazar 

    if(userAns == correctAns){
        userScore += 1;
        symbol_title .classList.add('correct');
        console.log('Correct answer' + ' ' + userScore);
    } else {
        symbol_title .classList.add('incorrect');
        console.log('Wrong answer')
    }

    for(i=0; i < allOptions; i++){
        option_list.children[i].classList.add('disabled');
    }

    next_btn.classList.add('show');
}

function showResult() {
    quiz_box.classList.remove("activeQuiz");
    result_box.classList.add("activeResult");
    const scoreText = result_box.querySelector(".score_text");

    if (userScore > 50) {
        let scoreTag = '<p>🥳 Wooow sen' + userScore + ' tasiga javob berolding!</p>'
        scoreText.innerHTML = scoreTag;
    } else if(userScore > 1) {
        let scoreTag = '<p>😉 Yaxshi' + userScore + ' tasiga javob berolding!</p>'
        scoreText.innerHTML = scoreTag;
    } else {
        let scoreTag = '<p>😐 Afsuski seni baling yetarli emas!</p>'
        scoreText.innerHTML = scoreTag;
    }
}

restart_quiz.onclick = () => {
    quiz_box.classList.add("activeQuiz");
    result_box.classList.remove('activeResult');
    que_count = 0;
    userScore = 0;
    showQuestions(que_count)
    next_btn.classList.remove('show');
}