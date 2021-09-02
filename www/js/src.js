const button = document.querySelector('button'),
    clock = document.querySelector('h1');

let seconds = '00',
    minutes = '00',
    hours = '00',
    timerCall;

const timer = () => {
    seconds++;

    if (seconds < 10) seconds = '0' + seconds;

    if (seconds > 59) {
        seconds = '00';
        minutes++;

        if (minutes < 10) minutes = '0' + minutes;
    }

    if (minutes > 59) {
        minutes = `00`;
        hours++;
        if (hours < 10) hours = `0` + hours;
    }

    clock.textContent = `${hours}:${minutes}:${seconds}`;
};

button.addEventListener('click', (e) => {
    e.preventDefault();
    button.textContent = 'Restart';
    timerCall = setInterval(timer, 1000);
    clock.setAttribute('class', 'active');
    button.remove();
});
