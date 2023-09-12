function updateUTCDayAndTime() {
        const utcDate = new Date();
        const utcTimeMilliseconds = utcDate.getTime();
        const utcDay = new Intl.DateTimeFormat('en-US', { weekday: 'long' }).format(utcDate);

        document.getElementById('c-time').textContent = utcTimeMilliseconds.toString();
        document.getElementById('c-day').textContent = utcDay;
    }

    setInterval(updateUTCDayAndTime, 1000);

    updateUTCDayAndTime();
