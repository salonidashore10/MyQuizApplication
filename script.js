const yesBtn = document.getElementById("yesBtn");
const firstBox = document.getElementById("first");
const secondBox = document.getElementById("second");
const nextBtn = document.getElementById("nextBtn");
const thirdBox = document.getElementById("third");

const C = document.getElementById("Lang1");
const Cpp = document.getElementById("Lang2");
const Java = document.getElementById("Lang3");
const Python = document.getElementById("Lang4");
const HTML = document.getElementById("Lang5");
const CSS = document.getElementById("Lang6");
const JS = document.getElementById("Lang7");

const basic = document.getElementById("1");
const medium = document.getElementById("2");
const advance = document.getElementById("3");

const ques = document.getElementById("ques");
const option = document.getElementById("options");
const fourthBox = document.getElementById("fourth");
const nextQuesBtn = document.getElementById("nextQuesBtn");
const prevQuesBtn = document.getElementById("prevQuesBtn");
const submit = document.getElementById("submit");
const scoreBox = document.getElementById("score");
const Languages = document.getElementById("selectLang");
const tracker=document.getElementById("track");
const content=document.getElementById("cont");

yesBtn.addEventListener("click", () => {
  firstBox.style.display = "none";
  secondBox.style.display = "block";
});

nextBtn.addEventListener("click", () => {
  secondBox.style.display = "none";
  Languages.style.display = "block";
});

let currIdx = 0;
let currentQuiz = [];
let count = 0;
let selectedAns = [];

function loadQuestion() {
  const current = currentQuiz[currIdx];
  ques.innerText = `Question ${currIdx + 1}. ${current.question}`;
  option.innerHTML = "";
  current.options.forEach((element) => {
    const btn = document.createElement("button");
    btn.className = "optionBtn";
    btn.innerText = element;

    console.log(selectedAns[currIdx]);

    if (selectedAns[currIdx] !== null) {
      btn.disabled = true;
      if (element === current.answer) {
        btn.style.borderColor = "rgb(39, 252, 6)";
        btn.style.borderWidth = "3px";
      }
      if (element === selectedAns[currIdx] && element !== current.answer) {
        btn.style.borderWidth = "3px";
        btn.style.borderColor = "red";
      }
    }

    else{
      btn.disabled = false;
    }

    btn.addEventListener("click", () => {
      console.log("clicked");
      if (selectedAns[currIdx] !== null) {
        return;
      }
      selectedAns[currIdx] = element;

      count++;
      console.log(count);

      // const allBtn = document.querySelectorAll(".optionBtn");
      const allBtn = document.querySelectorAll(".optionBtn");

      allBtn.forEach((btns) => {
        btns.disabled = true;
        if (btns.innerText === current.answer) {
          btns.style.borderColor = "rgb(39, 252, 6)";
          btns.style.borderWidth = "3px";
        }
        if (btns.innerText === element && element !== current.answer) {
          btns.style.borderWidth = "3px";
          btns.style.borderColor = "red";
        }
      });
    });

    option.appendChild(btn);
  });
}
let lang="";

// C.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="C";
// });
// Cpp.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="Cpp";
// });
// Java.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="Java";
// });
// Python.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="Python";
// });
// HTML.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="HTML";
// });
// CSS.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="CSS";
// });
// JS.addEventListener("click",()=>{
//   Languages.style.display="none";
//   thirdBox.style.display = "block";
//   lang="JS";
// });

function selectLanguage(language) {
    lang = language;
    Languages.style.display = "none";
    thirdBox.style.display = "block";
}

C.onclick = () => selectLanguage("C");
Cpp.onclick = () => selectLanguage("Cpp");
Java.onclick = () => selectLanguage("Java");
Python.onclick = () => selectLanguage("Python");
HTML.onclick = () => selectLanguage("HTML");
CSS.onclick = () => selectLanguage("CSS");
JS.onclick = () => selectLanguage("JS");

// Basic Mode
basic.addEventListener("click", () => {
  currentQuiz = quizData[lang].basicQues;
  selectedAns = new Array(currentQuiz.length).fill(null);
  thirdBox.style.display = "none";
  fourthBox.style.display = "block";
  count = 0;
  currIdx = 0;
  loadQuestion();
});

// Intermediate Mode
medium.addEventListener("click", () => {
  currentQuiz = quizData[lang].mediumQues;
  selectedAns = new Array(currentQuiz.length).fill(null);
  thirdBox.style.display = "none";
  fourthBox.style.display = "block";
  count = 0;
  currIdx = 0;
  loadQuestion();
});

// Advance Mode
advance.addEventListener("click", () => {
  currentQuiz = quizData[lang].advanceQues;
  selectedAns = new Array(currentQuiz.length).fill(null);
  thirdBox.style.display = "none";
  fourthBox.style.display = "block";
  count = 0;
  currIdx = 0;
  loadQuestion();
});

// Submit Response btn
const submitBtn = document.createElement("button");
submitBtn.innerHTML = `<i class="fa-solid fa-paper-plane"></i>&nbsp;&nbsp;Submit Response`;
submitBtn.className = "subBtn";

const checkScore = document.createElement("button");
checkScore.innerText = "Check Score";

// check Score
scoreBox.style.display = "none";

checkScore.addEventListener("click", () => {

  scoreBox.innerHTML = "";
  submit.style.display = "none";
  scoreBox.style.display = "block";
  scoreBox.className = "checkScore";

  let score = 0;
  for (let i = 0; i < currentQuiz.length; i++) {
    if (selectedAns[i] === currentQuiz[i].answer) {
      score++;
    }
  }

  const firstHeading = document.createElement("h5");
  firstHeading.innerText = "ThankYou For Using My Application 🥰\n";
  const scoreHeading = document.createElement("h2");
  scoreHeading.innerText = "Your Score 👇\n\n";
  const nextHeading = document.createElement("h4");
  nextHeading.innerText = `Correct answers ✅ : ${score}\n`;
  const nextHeading2 = document.createElement("h4");
  nextHeading2.innerText = `Wrong answers ❎ : ${currentQuiz.length - score}\n\n`;
  const lastHeading = document.createElement("h3");
  lastHeading.innerText = `Final Score : ${score} / ${currentQuiz.length} \n\n`;
  const lastSecHeading = document.createElement("h5");
  lastSecHeading.innerText = "Do you want to Play Again 👇\n";

  scoreBox.appendChild(firstHeading);
  scoreBox.appendChild(scoreHeading);
  scoreBox.appendChild(nextHeading);
  scoreBox.appendChild(nextHeading2);
  scoreBox.appendChild(lastHeading);
  scoreBox.appendChild(lastSecHeading);
  scoreBox.appendChild(playAgainBtn);
});

const playAgainBtn = document.createElement("button");
playAgainBtn.innerText = "Play Again";
// Play Again
playAgainBtn.addEventListener("click", () => {
  count = 0;
  currIdx = 0;
  selectedAns = [];
  // currentQuiz = [];

  scoreBox.innerHTML = "";

  Languages.style.display = "block";
  thirdBox.style.display = "none";
  scoreBox.style.display = "none";
  fourthBox.style.display = "none";
  submit.style.display = "none";
});

const OKbtn = document.createElement("button");
OKbtn.innerText = "OK";

OKbtn.addEventListener("click", () => {
  fourthBox.style.display = "block";
  submit.style.display = "none";
});

const innerSubmit=document.getElementById("inner");

submitBtn.addEventListener("click", () => {
  fourthBox.style.display = "none";
  submit.style.display = "block";
  if (count !== currentQuiz.length) {
    content.innerText = `Answer All Quesstions First !`;
    tracker.innerHTML=`${count} / ${currentQuiz.length}`;
    submit.appendChild(OKbtn);
  } else {
    // submit.innerText = `Your response has been recorded !`;
    content.innerText = `Your response has been recorded !`;
    tracker.innerHTML=`${count} / ${currentQuiz.length}`;
    submit.appendChild(checkScore);
    submit.removeChild(OKbtn);
  }
});

nextQuesBtn.addEventListener("click", () => {
  if (currIdx < currentQuiz.length - 1) {
    currIdx++;
    loadQuestion();
  }

  if (currIdx === currentQuiz.length - 1) {
    nextQuesBtn.replaceWith(submitBtn);
  }
});
prevQuesBtn.addEventListener("click", () => {
  submitBtn.replaceWith(nextQuesBtn);

  if (currIdx > 0) {
    currIdx--;
    loadQuestion();
  }
});

