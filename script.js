let hours = document.querySelector('.hours');
let minutes = document.querySelector('.minutes');
let seconds = document.querySelector('.seconds');

function everySecond() {
    let now = new Date().toLocaleTimeString();
    let hoursPart = `${now.slice(0, 2)}:`;
    hours.innerText = hoursPart;
    let minutesPart = `${now.slice(3, 5)}:`;
    minutes.innerText = minutesPart;
    let secondsPart = now.slice(6);
    seconds.innerText = secondsPart;
}

setInterval(everySecond, 1000);