function initTimer() {
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

    if (tmStartBtn) {
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
    }

    if (tmStopBtn) {
        tmStopBtn.addEventListener('click', () => {
            clearInterval(tmInterval);
            tmStartBtn.disabled = false;
            tmStopBtn.disabled = true;
        });
    }

    if (tmResetBtn) {
        tmResetBtn.addEventListener('click', () => {
            clearInterval(tmInterval);
            tmTotalSeconds = 0;
            tmDisplay.classList.add('hidden');
            tmInputs.classList.remove('hidden');
            tmStartBtn.disabled = false;
            tmStopBtn.disabled = true;
            tmResetBtn.disabled = true;
        });
    }
}
