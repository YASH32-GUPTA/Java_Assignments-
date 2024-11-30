// Select DOM elements
const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start");
const pauseButton = document.getElementById("pause");
const resetButton = document.getElementById("reset");

let timerInterval;
let remainingTime = 0;
let isPaused = false;

// Function to format time as MM:SS
function formatTime(seconds) {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

// Start Timer
startButton.addEventListener("click", () => {
    if (!isPaused) {
        const minutes = parseInt(minutesInput.value) || 0;
        const seconds = parseInt(secondsInput.value) || 0;
        remainingTime = minutes * 60 + seconds;
    }

    if (remainingTime > 0) {
        isPaused = false;
        clearInterval(timerInterval);
        timerInterval = setInterval(() => {
            if (remainingTime > 0) {
                remainingTime--;
                timerDisplay.textContent = formatTime(remainingTime);
            } else {
                clearInterval(timerInterval);
                timerDisplay.textContent = "00:00";
                alert("Time's up!");
            }
        }, 1000);
    }
});

// Pause Timer
pauseButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    isPaused = true;
});

// Reset Timer
resetButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    timerDisplay.textContent = "00:00";
    minutesInput.value = "0";
    secondsInput.value = "0";
    remainingTime = 0;
    isPaused = false;
});
