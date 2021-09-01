/*
 * Оставшиеся дни: делим значение UTC на 1000 * 60 * 60 * 24, количество
 * миллисекунд в одном дне (миллисекунды * секунды * минуты * часы)
 */
// const days = Math.floor(time / (1000 * 60 * 60 * 24));

/*
 * Оставшиеся часы: получаем остаток от предыдущего расчета с помощью оператора
 * остатка % и делим его на количество миллисекунд в одном часе
 * (1000 * 60 * 60 = миллисекунды * минуты * секунды)
 */
// const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

/*
 * Оставшиеся минуты: получаем оставшиеся минуты и делим их на количество
 * миллисекунд в одной минуте (1000 * 60 = миллисекунды * секунды)
 */
// const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));

/*
 * Оставшиеся секунды: получаем оставшиеся секунды и делим их на количество
 * миллисекунд в одной секунде (1000)
 */
// const secs = Math.floor((time % (1000 * 60)) / 1000);

class Timer {
    constructor({ selector, targetDate }) {
        this.targetDate = targetDate;
        this.days = document.querySelector(`${selector} span[data-value="days"]`);
        this.hours = document.querySelector(`${selector} span[data-value="hours"]`);
        this.mins = document.querySelector(`${selector} span[data-value="mins"]`);
        this.secs = document.querySelector(`${selector} span[data-value="secs"]`);
        this.start();
    };

    start() {
        const countdown = setInterval(() => {
            const deltaTime = this.targetDate - Date.now();
            if (deltaTime > 0) {
                this.days.textContent = this.pad(Math.floor(deltaTime / (1000 * 60 * 60 * 24)));
                this.hours.textContent = this.pad(Math.floor((deltaTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
                this.mins.textContent = this.pad(Math.floor((deltaTime % (1000 * 60 * 60)) / (1000 * 60)));
                this.secs.textContent = this.pad(Math.floor((deltaTime % (1000 * 60)) / 1000));
            } else {
                this.days.textContent = "00";
                this.hours.textContent = "00";
                this.mins.textContent = "00";
                this.secs.textContent = "00";
                clearInterval(countdown)
            }
        }, 1000);
    }
    pad(digits) {
        return String(digits).padStart(2, '0');
    };
}

const countdownBlackFridaySale = new Timer({
    selector: '#timer-1',
    targetDate: new Date('Nov 26, 2021'),
});
