
let inputDigits = document.querySelector(".input_digits_p");
let operation = document.querySelector(".operation_p");
let answer;

inputDigits.addEventListener("click", () => {
    inputDigits.textContent = "";
});
operation.addEventListener("click", () => {
    operation.textContent = "";
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        inputDigits.textContent = "";
        operation.textContent = "";
    };
});

document.getElementById("one").addEventListener("click", () => {
    inputDigits.append("1");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit1" || e.code === "Numpad1") {
        inputDigits.append("1");
    };
});

document.getElementById("two").addEventListener("click", () => {
    inputDigits.append("2");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit2" || e.code === "Numpad2") {
        inputDigits.append("2");
    };
});

document.getElementById("three").addEventListener("click", () => {
    inputDigits.append("3");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit3" || e.code === "Numpad3") {
        inputDigits.append("3");
    };
});

document.getElementById("four").addEventListener("click", () => {
    inputDigits.append("4");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit4" || e.code === "Numpad4") {
        inputDigits.append("4");
    };
});

document.getElementById("five").addEventListener("click", () => {
    inputDigits.append("5");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit5" || e.code === "Numpad5") {
        inputDigits.append("5");
    };
});

document.getElementById("six").addEventListener("click", () => {
    inputDigits.append("6");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit6" || e.code === "Numpad6") {
        inputDigits.append("6");
    };
});

document.getElementById("seven").addEventListener("click", () => {
    inputDigits.append("7");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit7" || e.code === "Numpad7") {
        inputDigits.append("7");
    };
});

document.getElementById("eight").addEventListener("click", () => {
    inputDigits.append("8");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit8" || e.code === "Numpad8") {
        inputDigits.append("8");
    };
});

document.getElementById("nine").addEventListener("click", () => {
    inputDigits.append("9");
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit9" || e.code === "Numpad9") {
        inputDigits.append("9");
    };
});

document.getElementById("zero").addEventListener("click", () => {
    if (/^0+$/.test(inputDigits.textContent) === false) {
        inputDigits.append("0");
    };
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Digit0" || e.code === "Numpad0") {
        if (/^0+$/.test(inputDigits.textContent) === false) {
            inputDigits.append("0");
        };
    };
});

document.getElementById("dot").addEventListener("click", () => {
    if (inputDigits.textContent.includes(".") === false && inputDigits.textContent.length !== 0) {
        inputDigits.append(".");
    };
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Period" || e.code === "NumpadDecimal") {
        if (inputDigits.textContent.includes(".") === false && inputDigits.textContent.length !== 0) {
            inputDigits.append(".");
        };
    };
});

document.getElementById("plus").addEventListener("click", () => {
    if (inputDigits.textContent.length !== 0) {
        operation.append(inputDigits.textContent);
        operation.append("+");
        inputDigits.textContent = "";
    };
});
window.addEventListener("keydown", (e) => {
    if (e.code === "NumpadAdd") {
        if (inputDigits.textContent.length !== 0) {
            operation.append(inputDigits.textContent);
            operation.append("+");
            inputDigits.textContent = "";
        };
    };
});

document.getElementById("minus").addEventListener("click", () => {
    if (inputDigits.textContent.length !== 0) {
        operation.append(inputDigits.textContent);
        operation.append("-");
        inputDigits.textContent = "";
    };
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Minus" || e.code === "NumpadSubtract") {
        if (inputDigits.textContent.length !== 0) {
            operation.append(inputDigits.textContent);
            operation.append("-");
            inputDigits.textContent = "";
        };
    };
});

document.getElementById("x").addEventListener("click", () => {
    if (inputDigits.textContent.length !== 0) {
        operation.append(inputDigits.textContent);
        operation.append("*");
        inputDigits.textContent = "";
    };
});
window.addEventListener("keydown", (e) => {
    if (e.code === "NumpadMultiply") {
        if (inputDigits.textContent.length !== 0) {
            operation.append(inputDigits.textContent);
            operation.append("*");
            inputDigits.textContent = "";
        }
    };
});

document.getElementById("slash").addEventListener("click", () => {
    if (inputDigits.textContent.length !== 0) {
        operation.append(inputDigits.textContent);
        operation.append("/");
        inputDigits.textContent = "";
    };
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Slash" || e.code === "NumpadDivide") {
        if (inputDigits.textContent.length !== 0) {
            operation.append(inputDigits.textContent);
            operation.append("/");
            inputDigits.textContent = "";
        };
    };
});

document.getElementById("equal").addEventListener("click", () => {
    operation.append(inputDigits.textContent);
    inputDigits.textContent = "";
    if (/[+\-*/]/.test(operation.textContent.charAt(operation.textContent.length - 1))) {
        operation.textContent = operation.textContent.slice(0, -1);
    };
    answer = eval(operation.textContent);
    inputDigits.textContent = answer;
    operation.textContent = "";
});
window.addEventListener("keydown", (e) => {
    if (e.code === "Equal" || e.code === "Enter" || e.code === "NumpadEnter") {
        operation.append(inputDigits.textContent);
        inputDigits.textContent = "";
        if (/[+\-*/]/.test(operation.textContent.charAt(operation.textContent.length - 1))) {
            operation.textContent = operation.textContent.slice(0, -1);
        };
        answer = eval(operation.textContent);
        inputDigits.textContent = answer;
        operation.textContent = "";
    };
});