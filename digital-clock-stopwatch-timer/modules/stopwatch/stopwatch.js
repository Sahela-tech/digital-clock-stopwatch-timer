function initStopwatch() {
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

    if (swStartBtn) {
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
    }

    if (swStopBtn) {
        swStopBtn.addEventListener('click', () => {
            clearInterval(swInterval);
            swStartBtn.disabled = false;
            swStopBtn.disabled = true;
        });
    }

    if (swResetBtn) {
        swResetBtn.addEventListener('click', () => {
            clearInterval(swInterval);
            swElapsedTime = 0;
            swDisplay.textContent = '00:00:00.00';
            swStartBtn.disabled = false;
            swStopBtn.disabled = true;
            swResetBtn.disabled = true;
        });
    }
}
