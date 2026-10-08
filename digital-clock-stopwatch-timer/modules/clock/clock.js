function initClock() {
    function updateClock() {
        const now = new Date();
        let hours = now.getHours();
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        const ampm = hours >= 12 ? 'PM' : 'AM';
        
        hours = hours % 12 || 12;
        hours = String(hours).padStart(2, '0');
        
        const clockDisplay = document.getElementById('clock-display');
        const dateDisplay = document.getElementById('date-display');

        if (clockDisplay) clockDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
        if (dateDisplay) {
            const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };
            dateDisplay.textContent = now.toLocaleDateString('en-US', options);
        }
    }
    setInterval(updateClock, 1000);
    updateClock();
}
