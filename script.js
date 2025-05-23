function startCountdown() {
    let count = 3;
    const countdownElement = document.getElementById("countdown");
    countdownElement.textContent = count;
    
    const timer = setInterval(() => {
        count--;
        countdownElement.textContent = count;
        if (count <= 0) {
            clearInterval(timer);
            countdownElement.textContent = "0";
        }
    }, 1000);
}

const elem = document.documentElement;

function openFullscreen() {
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.mozRequestFullScreen) { // Firefox
    elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) { // Chrome, Safari, Opera
    elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { // IE/Edge
    elem.msRequestFullscreen();
    }
}
