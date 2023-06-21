"use strict";

console.clear();

// Set timeout

// const button = document.querySelector("button");
//
// const onClick = () => {
//   setTimeout(() => {
//     alert("The button was clicked!");
//   }, 2000);
// };
//
// button.addEventListener("click", onClick);

// const say = () => {
//   console.log("I'm saying!");
// };
//
// const timerId = setTimeout(say, 1000);
//
// clearTimeout(timerId);


// Set interval

const startBtn = document.querySelector("#js-start");
const stopBtn = document.querySelector("#js-stop");
let timerId = null;

startBtn.addEventListener("click", () => {
  timerId = setInterval(() => {
    console.log(`Process is going. Current number is ${Math.random()}`);
  }, 1000);
});

stopBtn.addEventListener("click", () => {
  clearInterval(timerId);
  console.log(`Process with id ${timerId} has stopped.`);
});



























