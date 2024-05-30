const againEl = document.getElementById("again"),
  commonNumberEl = document.getElementById("commonNumber"),
  inputEl = document.getElementById("input"),
  checkEl = document.getElementById("check"),
  atempEl = document.getElementById("atemp"),
  keyNumberEl = document.getElementById("keyNumber"),
  wrapperEl = document.getElementById("wrapper"),
  bodyEl = document.querySelector("body"),
  recordEl = document.getElementById("record");

let rendomNumber = Math.floor(Math.random() * 25) + 1;
let attamps = 8;
let record = 0;
let checkNumber = () => {
  new Audio("./musics/button.mp3").play();
  let inputVal = inputEl.value;
  if (inputVal == rendomNumber) {
    keyNumberEl.textContent = "You are Winer! 🎉🎉🎉🎉🎉🎉🎉";
    commonNumberEl.textContent = rendomNumber;
    inputEl.disabled = true;
    bodyEl.classList.add("bg-green-400");
    commonNumberEl.classList.add("bg-green-300");
    wrapperEl.classList.add("bg-green-200");
    new Audio("./musics/brass-fanfare.mp3").play();
    checkEl.disabled = true;
    if (record < attamps) {
      record = attamps;
      recordEl.textContent = attamps;
    }
  } else if (inputVal < rendomNumber) {
    keyNumberEl.textContent = "Too low.";
    attamps--;
    atempEl.textContent = attamps;
  } else if (inputVal > rendomNumber) {
    keyNumberEl.textContent = "Too high.";
    attamps--;
    atempEl.textContent = attamps;
  }
  if (attamps == 0) {
    keyNumberEl.textContent = "You are loser.😒";
    bodyEl.classList.add("bg-red-400");
    commonNumberEl.classList.add("bg-red-300");
    wrapperEl.classList.add("bg-red-200");
    checkEl.disabled = true;
    commonNumberEl.textContent = rendomNumber;
    new Audio("./musics/brass-fail.mp3").play();
  }
  inputEl.value = "";
};

const refresh = () => {
  new Audio("./musics/button.mp3").play();
  let newRendomNumber = Math.floor(Math.random() * 20) + 1;
  rendomNumber = newRendomNumber;
  console.log(rendomNumber);
  commonNumberEl.textContent = "?";
  inputEl.value = "";
  attamps = 8;
  atempEl.textContent = attamps;
  keyNumberEl.textContent = "Start game : )";
  bodyEl.classList.add("bg-white");
  wrapperEl.classList.remove("bg-green-200");
  commonNumberEl.classList.remove("bg-green-300");
  bodyEl.classList.remove("bg-red-400");
  commonNumberEl.classList.remove("bg-red-300");
  wrapperEl.classList.remove("bg-red-200");
  inputEl.disabled = false;
  checkEl.disabled = false;
};

//EVENTS
checkEl.addEventListener("click", checkNumber);
againEl.addEventListener("click", refresh);
document.addEventListener("keydown", (e) => {
  if (e.keyCode == 13) {
    if (attamps == 0) {
      e.keyCode.disabled = true;
    }
    checkNumber();
  }
});
