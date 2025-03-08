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