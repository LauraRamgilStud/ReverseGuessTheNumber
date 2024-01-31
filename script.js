"use strict";

window.addEventListener("load", start);

let guess;

function start() {
  console.log("JavaSript is running");
  guess = generateRandomGuess();
  document.querySelector("#btn-start").addEventListener("click", giveGuess);
  document.querySelector("#buttons").addEventListener("click", checkGuess);
}

function generateRandomGuess() {
  return Math.floor(Math.random() * 99) + 1;
}

function giveGuess() {
  document.querySelector("#btn-ready").remove();
  const list = document.querySelector("#guess-list");
  const buttonDiv = document.querySelector("#buttons");
  const string = `<li>I'm guessing ${generateRandomGuess()}:</li>`;
  const buttons = `<button id="btn-higher">Too Low</button><button id="btn-lower">Too High</button><button id="btn-correct">Correct!</button>`;
  list.insertAdjacentHTML("beforeend", string);
  buttonDiv.insertAdjacentHTML("afterbegin", buttons);
}

function checkGuess(evt) {
  evt.preventDefault();
  const target = evt.target;

  if (target.id.includes("btn-higher")) {
    guessTooLow();
  } else if (target.id.includes("btn-lower")) {
    guessTooHigh();
  } else if (target.id.includes("btn-correct")) {
    guessIsCorrect();
  }
}

function guessTooLow() {
  const list = document.querySelector("#guess-list");
  const string = `<li>I'm guessing ${generateRandomGuess()}:</li>`;
  list.insertAdjacentHTML("beforeend", string);
}

function guessTooHigh() {
  const list = document.querySelector("#guess-list");
  const string = `<li>I'm guessing ${generateRandomGuess()}:</li>`;
  list.insertAdjacentHTML("beforeend", string);
}

function guessIsCorrect(guess) {
  const list = document.querySelector("#guess-list");
  const string = `<br><li>I guessed it!!</li>`;
  list.insertAdjacentHTML("beforeend", string);
  document.querySelector("#buttons").remove();
}
