"use strict";

window.addEventListener("load", start);

let rangeStart, rangeEnd, guess;

function start() {
  document.querySelector("#btn-start").addEventListener("click", getRange);
  document.querySelector("#buttons").addEventListener("click", checkGuess);
}

function getRange() {
  rangeStart = document.getElementById("range-start").valueAsNumber;
  rangeEnd = document.getElementById("range-end").valueAsNumber;
  document.querySelector("#btn-ready").remove();
  giveGuess();
}

function giveGuess() {
  guess = Math.floor((rangeStart + rangeEnd) / 2);
  const list = document.querySelector("#guess-list");
  const buttonDiv = document.querySelector("#buttons");
  const string = `<li>I'm guessing ${guess}:</li>`;
  if (!buttonDiv.querySelector("#btn-higher")) {
    const buttons = `<button id="btn-higher">Too Low</button><button id="btn-lower">Too High</button><button id="btn-correct">Correct!</button>`;
    buttonDiv.insertAdjacentHTML("afterbegin", buttons);
  }
  list.insertAdjacentHTML("beforeend", string);
}

function checkGuess(evt) {
  evt.preventDefault();
  const target = evt.target;

  if (target.id.includes("btn-higher")) {
    rangeStart = guess + 1;
    updateGuess();
  } else if (target.id.includes("btn-lower")) {
    rangeEnd = guess - 1;
    updateGuess();
  } else if (target.id.includes("btn-correct")) {
    guessIsCorrect();
  }
}

function updateGuess() {
  if (rangeStart >= rangeEnd) {
    const list = document.querySelector("#guess-list");
    const string = `<li>There's only one possibility left: ${rangeStart} </li>`;
    list.insertAdjacentHTML("beforeend", string);
    document.querySelector("#buttons").remove();
  } else {
    guess = Math.floor((rangeStart + rangeEnd) / 2);
    giveGuess();
  }
}

function guessIsCorrect(guess) {
  const list = document.querySelector("#guess-list");
  const string = `<br><li>I guessed it!!</li>`;
  list.insertAdjacentHTML("beforeend", string);
  document.querySelector("#buttons").remove();
}
