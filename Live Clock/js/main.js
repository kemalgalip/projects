const hour = document.getElementById("hour");
const minute = document.getElementById("minute");
const second = document.getElementById("second");

function atTheMoment() {
    let now = new Date();

    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();
    let currentSecond = now.getSeconds();

    if (currentHour < 10) {
        currentHour = "0" + currentHour;
    };
    if (currentMinute < 10) {
        currentMinute = "0" + currentMinute;
    };
    if (currentSecond < 10) {
        currentSecond = "0" + currentSecond;
    };

    hour.textContent = currentHour;
    minute.textContent = currentMinute;
    second.textContent = currentSecond;
};

setInterval(atTheMoment, 1000);
