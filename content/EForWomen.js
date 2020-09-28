let menu = document.getElementById("toggle");
let close = document.getElementById("close");
let menuDiv = document.getElementById("menu");
let menuDiv1 = document.getElementById("menuDiv1");
let menuDiv2 = document.getElementById("menuDiv2");
let menuLink = document.getElementsByClassName("menuLink");
let active = document.getElementById("active");
let activeSubMenu = document.getElementById("activeSubMenu");
let white = document.getElementById("white");
let sm = document.getElementById("SM");
 
menu.addEventListener("click", openMenu); 
function openMenu(){
        sm.style.display = "block";
        menu.style.visibility = "hidden";
        menuDiv.style.visibility = "visible";
        menuDiv1.style.transform = "translateX(-50%) translateY(-50%)";
        active.style.color = "#37d72f";
        activeSubMenu.style.color = "#37d72f";
        white.style.color = "#fff";
        menuDiv2.style.opacity = "1";
}
close.addEventListener("click", closeMenu);
    function closeMenu(){
        menu.style.visibility = "visible";
        menuDiv.style.visibility = "hidden";
}

// Fided Video-Div
const myvideo = document.getElementById("video");
const playBtn = document.getElementById('playBtn');
const pauseBtn = document.getElementById('pauseBtn');
const stopBtn = document.getElementById('stopBtn');
const timeOut = document.getElementById('timeOut');
const vidNumOut = document.getElementById('vidNum');
const start = document.getElementById('start');
const videoDiv = document.getElementById('videoDiv');
const overlay = document.getElementById('overlay');
let timer = null;

start.addEventListener('click', () => {
        overlay.style.display = "block";
        videoDiv.style.display = "block";
});

playBtn.addEventListener('click', vidAction);
pauseBtn.addEventListener('click', vidAction);
stopBtn.addEventListener('click', vidAction);
myvideo.addEventListener('click', vidEnded);

// vids
const vids = ["WorkOutW1.mp4", "WorkOutW2.mp4", "WorkOutW3.mp4", "WorkOutW4.mp4", "WorkOutW5.mp4", "WorkOutW6.mp4", "WorkOutW7.mp4", "WorkOutW8.mp4", "WorkOutW9.mp4", "WorkOutW10.mp4", "WorkOutW11.mp4", "WorkOutW12.mp4"];
let vidPlaying = 0;

function vidAction(event) {
        switch (event.target.id) {
                case "playBtn":
                        playVideo();
                        timer = setInterval(update, 100);
                        break;
                case "pauseBtn":
                        myvideo.pause();
                        break;
                case "stopBtn":
                        myvideo.pause();
                        myvideo.currentTime = 0;
                        overlay.style.display = "none";
                        videoDiv.style.display = "none";
                        vidPlaying = 0;
                        myvideo.src = vids[vidPlaying];
                        break;
        }
}

function update() {
        timeOut.innerHTML = "Time: " + myTime(myvideo.currentTime) + "/" + myTime(myvideo.duration);
}

function myTime(time) {
        var hr = ~~(time / 3600);
        var min = ~~((time / 3600) / 60);
        var sec = ~~time % 60;
        var sec_min = "";
        if (hr > 0) {
                sec_min += "" + hrs + ":" + (min < 10 ? "0" : "");
        }
        sec_min += "" + min + ":" + (sec < 10 ? "0" : "");
        sec_min += "" + Math.round(sec);
        return sec_min;
}

function vidEnded() {
        clearInterval(timer);
        timeOut.innerHTML = "Timer: 0"
        nextVideo();
        playVideo();
}

function playVideo() {
        myvideo.play();
        timer = setInterval(update, 100);
        myvideo.onended = function () {
                nextVideo();
                playVideo();
        }
}

function nextVideo() {
        if (vidPlaying < 4) {
                vidPlaying++;
        } else {
                vidPlaying = 0;
        }
        myvideo.src = vids[vidPlaying];
}