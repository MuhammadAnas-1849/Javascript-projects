let gameSeq = [];
let userSeq = [];
let btns = ["yellow", "red", "green", "blue"];
let h2 = document.querySelector("h2");
let level = 0;
let stratGmae = false;

document.addEventListener("keypress", function () {
  if (stratGmae === false) {
    stratGmae = true;
    console.log(stratGmae);
    levelUp();
  }
});

function flash(btn) {
  btn.classList.add("flash");
  setTimeout(function time() {
    btn.classList.remove("flash");
  }, 250);
}
function userFlash(btn) {
  btn.classList.add("userFlash");
  setTimeout(function time() {
    btn.classList.remove("userFlash");
  }, 250);
}

function levelUp() {
  userSeq = [];
  level++;
  h2.innerText = `leve ${level}`;
  let rand = Math.floor(Math.random() * 3);
  let randBtn = btns[rand];
  let randColor = document.querySelector(`.${randBtn}`);
  gameSeq.push(randBtn);
  flash(randColor);
}

function check(idx) {
  if (userSeq[idx] === gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    reset();
  }
}

function userClick() {
  let btn = this;
  userFlash(btn);
  let userBtn = btn.getAttribute("id");
  userSeq.push(userBtn);
  check(userSeq.length - 1);
  console.log(userSeq);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
  btn.addEventListener("click", userClick);
}

function reset() {
  h2.innerHTML = `Game Is Over! <BR>Press Any Key To Restart The Game.`;

  level = 0;
  stratGmae = false;
  gameSeq = [];
  userSeq = [];
}
