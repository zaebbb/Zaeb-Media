import { radioPlayerInit } from './radio.js';
import { videoPlayerInit } from './video.js';
import { audioPlayerInit } from './audio.js';

const playerBtn = document.querySelectorAll(".player-btn");
const playerBlock = document.querySelectorAll(".player-block");
const temp = document.querySelector(".temp");

playerBtn.forEach((btn, i) => {
    btn.addEventListener("click", () => {
        deactivationPlayer();
        btn.classList.add("active");
        playerBlock[i].classList.add("active");
    });
});

const stopVideoPlayer = videoPlayerInit();
const stopRadioPlayer = radioPlayerInit();
const stopAudioPlayer = audioPlayerInit();


function deactivationPlayer(){
    playerBtn.forEach((item) => {
        item.classList.remove("active");
    });
    playerBlock.forEach((item) => {
        item.classList.remove("active");
    });
    temp.style.display = "none";

    stopVideoPlayer();
    stopRadioPlayer();
    stopAudioPlayer();
}