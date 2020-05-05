    function timer(deadline, timerSelector='#timer', secondsSelector='.seconds', minuteSelector='.minutes', hoursSelector='.hours') {
        function getTimeRemaining(endtime) {
            let tm = Date.parse(endtime) - Date.parse(new Date()),
                seconds = Math.floor((tm / 1000) % 60),
                minutes = Math.floor((tm / 1000 / 60) % 60),
                hours = Math.floor((tm / 1000 / 60 / 60));

            return {
                'total': tm,
                hours,
                minutes,
                seconds
            };
        }

        function setClock(id, endtime) {
            let timerElement = document.querySelector(id),
                seconds = timerElement.querySelector(secondsSelector),
                minutes = timerElement.querySelector(minuteSelector),
                hours = timerElement.querySelector(hoursSelector),
                timeInterval = setInterval(updateClock, 1000);

            function updateClock() {
                let t = getTimeRemaining(endtime);

                function addZero(num) {
                    if (num <= 9) {
                        return '0' + num;
                    } else return num;
                };

                hours.textContent = addZero(t.hours);
                minutes.textContent = addZero(t.minutes);
                seconds.textContent = addZero(t.seconds);

                if (t.total <= 0) {
                    clearInterval(timeInterval);
                    hours.textContent = '00';
                    minutes.textContent = '00';
                    seconds.textContent = '00';
                }
            }

        }
        setClock(timerSelector, deadline);
    }
