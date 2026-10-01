// Navigation Tabs
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
        btn.classList.add('active');
        document.getElementById(btn.dataset.tab).classList.add('active');
    });
});

// Digital Clock
function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12 || 12;
    hours = String(hours).padStart(2, '0');
    
    document.getElementById('clock-display').textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
    
    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
    document.getElementById('date-display').textContent = now.toLocaleDateString('en-US', options);
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let swInterval = null;
let swStartTime = 0;
let swElapsedTime = 0;

const swDisplay = document.getElementById('stopwatch-display');
const swStartBtn = document.getElementById('sw-start');
const swStopBtn = document.getElementById('sw-stop');
const swResetBtn = document.getElementById('sw-reset');

function formatStopwatchTime(ms) {
    const hrs = String(Math.floor(ms / 3600000)).padStart(2, '0');
    const mins = String(Math.floor((ms % 3600000) / 60000)).padStart(2, '0');
    const secs = String(Math.floor((ms % 60000) / 1000)).padStart(2, '0');
    const hundredths = String(Math.floor((ms % 1000) / 10)).padStart(2, '0');
    return `${hrs}:${mins}:${secs}.${hundredths}`;
}

swStartBtn.addEventListener('click', () => {
    swStartTime = Date.now() - swElapsedTime;
    swInterval = setInterval(() => {
        swElapsedTime = Date.now() - swStartTime;
        swDisplay.textContent = formatStopwatchTime(swElapsedTime);
    }, 10);
    swStartBtn.disabled = true;
    swStopBtn.disabled = false;
    swResetBtn.disabled = false;
});

swStopBtn.addEventListener('click', () => {
    clearInterval(swInterval);
    swStartBtn.disabled = false;
    swStopBtn.disabled = true;
});

swResetBtn.addEventListener('click', () => {
    clearInterval(swInterval);
    swElapsedTime = 0;
    swDisplay.textContent = '00:00:00.00';
    swStartBtn.disabled = false;
    swStopBtn.disabled = true;
    swResetBtn.disabled = true;
});

// Timer
let tmInterval = null;
let tmTotalSeconds = 0;

const tmDisplay = document.getElementById('timer-display');
const tmInputs = document.getElementById('timer-inputs');
const tmStartBtn = document.getElementById('tm-start');
const tmStopBtn = document.getElementById('tm-stop');
const tmResetBtn = document.getElementById('tm-reset');

function formatTimerTime(totalSecs) {
    const hrs = String(Math.floor(totalSecs / 3600)).padStart(2, '0');
    const mins = String(Math.floor((totalSecs % 3600) / 60)).padStart(2, '0');
    const secs = String(totalSecs % 60).padStart(2, '0');
    return `${hrs}:${mins}:${secs}`;
}

tmStartBtn.addEventListener('click', () => {
    if (tmTotalSeconds === 0) {
        const h = parseInt(document.getElementById('timer-hrs').value) || 0;
        const m = parseInt(document.getElementById('timer-min').value) || 0;
        const s = parseInt(document.getElementById('timer-sec').value) || 0;
        tmTotalSeconds = h * 3600 + m * 60 + s;
    }

    if (tmTotalSeconds <= 0) return;

    tmInputs.classList.add('hidden');
    tmDisplay.classList.remove('hidden');
    tmDisplay.textContent = formatTimerTime(tmTotalSeconds);

    tmInterval = setInterval(() => {
        tmTotalSeconds--;
        tmDisplay.textContent = formatTimerTime(tmTotalSeconds);

        if (tmTotalSeconds <= 0) {
            clearInterval(tmInterval);
            alert('Timer Finished!');
            tmResetBtn.click();
        }
    }, 1000);

    tmStartBtn.disabled = true;
    tmStopBtn.disabled = false;
    tmResetBtn.disabled = false;
});

tmStopBtn.addEventListener('click', () => {
    clearInterval(tmInterval);
    tmStartBtn.disabled = false;
    tmStopBtn.disabled = true;
});

tmResetBtn.addEventListener('click', () => {
    clearInterval(tmInterval);
    tmTotalSeconds = 0;
    tmDisplay.classList.add('hidden');
    tmInputs.classList.remove('hidden');
    tmStartBtn.disabled = false;
    tmStopBtn.disabled = true;
    tmResetBtn.disabled = true;
});
