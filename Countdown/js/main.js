let updownList = document.querySelectorAll(".updown");
let digits = document.querySelectorAll(".digits");
let buttons = document.querySelectorAll(".button");

let interval;
let mousedownTimeout;
let mousedownInterval;
let alarm = new Audio("audio/alarm.wav");
let timeupPopup = document.querySelector(".timeup_popup");

let updownAction = (i) => {
    let element = document.getElementById(updownList[i].id.split("_")[1]);
    let parsedValue = parseInt(element.textContent);
    switch (updownList[i].id.split("_")[0]) {
        case "up":
            if (parsedValue < 59) {
                parsedValue += 1;
                if (parsedValue < 10) {
                    parsedValue = "0" + parsedValue;
                };
                element.textContent = parsedValue.toString();
            }
            else if (parsedValue === 59) {
                element.textContent = "00";
            };
            break;
        case "down":
            if (parsedValue > 0) {
                parsedValue -= 1;
                if (parsedValue < 10) {
                    parsedValue = "0" + parsedValue;
                };
                element.textContent = parsedValue.toString();
            }
            else if (parsedValue === 0) {
                element.textContent = "59";
            };
    };
};

let update = () => {
    let hourValue = parseInt(digits[0].textContent);
    let minuteValue = parseInt(digits[1].textContent);
    let secondValue = parseInt(digits[2].textContent);
    
    if (secondValue > 0) {
        secondValue -= 1;
        if (secondValue < 10) {
            secondValue = "0" + secondValue;
        };
        digits[2].textContent = secondValue.toString();
    }
    else if (secondValue === 0) {
        if (minuteValue > 0) {
            minuteValue -= 1;
            if (minuteValue < 10) {
                minuteValue = "0" + minuteValue;
            };
            digits[1].textContent = minuteValue.toString();
            digits[2].textContent = "59";
        }
        else if (minuteValue === 0) {
            if (hourValue > 0) {
                hourValue -= 1;
                if (hourValue < 10) {
                    hourValue = "0" + hourValue;
                };
                digits[0].textContent = hourValue.toString();
                digits[1].textContent = "59";
                digits[2].textContent = "59";
            }
            else if (hourValue === 0) {
                reset();
                startAlarm();
                popPopup();
            };
        };
    };
};

let startInterval = () => {
    interval = setInterval(update, 1000);
};

let stopInterval = () => {
    clearInterval(interval);
};

let reset = () => {
    for (let i = 0; i < 3; i++) {
        digits[i].textContent = "00";
    };
    stopInterval();
};

let startAlarm = () => {
    alarm.loop= true;
    alarm.play();
};

let stopAlarm = () => {
    alarm.pause();
    alarm.currentTime = 0;
};

let popPopup = () => {
    timeupPopup.classList.add("pop_popup");
};

for (let i = 0; i < updownList.length; i++) {
    updownList[i].addEventListener("mousedown", () => {
        updownAction(i);
        mousedownTimeout = setTimeout(() => {
            mousedownInterval = setInterval(() => {
                updownAction(i);
            }, 75);
        }, 500);
    });

    updownList[i].addEventListener("mouseup", () => {
        clearTimeout(mousedownTimeout);
        clearInterval(mousedownInterval);
    });
    
    updownList[i].addEventListener("touchstart", () => {
        mousedownTimeout = setTimeout(() => {
            mousedownInterval = setInterval(() => {
                updownAction(i);
            }, 75);
        }, 600);
    });
    
    updownList[i].addEventListener("touchend", () => {
        updownAction(i);
        event.preventDefault();
        clearTimeout(mousedownTimeout);
        clearInterval(mousedownInterval);
    });
};

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", () => {
        switch (event.target.id) {
            case "start":
                startInterval();
                break;
            case "stop":
                stopInterval();
                break;
            case "reset":
                reset();
        };
    });
};

document.getElementById("close_popup").addEventListener("click", () => {
    timeupPopup.classList.remove("pop_popup");
    stopAlarm();
});