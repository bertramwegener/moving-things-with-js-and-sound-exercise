// Your code here
"use strict"

const dodger = document.getElementById("dodger");



document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowLeft") {
      moveDodgerLeft();
    }

    if (e.key === "ArrowRight") {
        moveDodgerRight();
      }

      if (e.key === "ArrowUp") {
        moveDodgerUp();
      }

      if (e.key === "ArrowDown") {
        moveDodgerDown();
      }
  });



function moveDodgerLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left > 0) {
        dodger.style.left = `${left - 10}px`;  
        playSoundOnMovement();
    }

    else {
        playGameOverSound();
    }
    }



function moveDodgerRight() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);

    if (left < 360) {
        dodger.style.left = `${left + 10}px`;
        playSoundOnMovement();
    }

    else {
        playGameOverSound();
    }
    }



function moveDodgerUp() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom < 360) {
        dodger.style.bottom = `${bottom + 10}px`;
        playSoundOnMovement();
    }

    else {
        playGameOverSound();
    }
    }



function moveDodgerDown() {
    const bottomNumbers = dodger.style.bottom.replace("px", "");
    const bottom = parseInt(bottomNumbers, 10);

    if (bottom > 0) {
        dodger.style.bottom = `${bottom - 10}px`;
        playSoundOnMovement();
    }

    else {
        playGameOverSound();
    }
    }


const movementSound = document.getElementById("movementSound");

function playSoundOnMovement() {
        movementSound.currentTime = 0;
        movementSound.play();
    }



const gameoverSound = document.getElementById("gameoverSound");

function playGameOverSound() {
        movementSound.currentTime = 0;
        gameoverSound.play();
    }