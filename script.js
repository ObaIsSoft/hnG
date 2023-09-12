const dateContainer = document.getElementById("date")
function updateUTCDayAndTime() {
        const utcDate = new Date().toUTCString();
        const utcTime = utcDate.split(' ')[4];
        const utcDay = utcDate.split(',')[0];

        document.getElementById('c-time').textContent = utcTime;
        document.getElementById('c-day').textContent = utcDay;
    }

    setInterval(updateUTCDayAndTime, 1000);

    updateUTCDayAndTime();
