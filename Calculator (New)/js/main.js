
let inputDigits = document.querySelector(".input_digits_p");
let operation = document.querySelector(".operation_p");
let answer;

const operators = document.querySelectorAll(".operator");

for (let i = 0; i < 10; i++) {
    document.getElementById("b" + i).addEventListener("click", () => {
        if (i === 0) {
            if (/^0+$/.test(inputDigits.textContent) === false) {
                inputDigits.append(i);
            };
        }
        else {
            inputDigits.append(i);
        };
    });

    window.addEventListener("keydown", (e) => {
        if (e.code === "Digit" + i || e.code === "Numpad" + i) {
            if (e.code === "Digit0" || e.code === "Numpad0") {
                if (/^0+$/.test(inputDigits.textContent) === false) {
                    inputDigits.append(i);
                };
            }
            else {
                inputDigits.append(i);
            };
        };
    });
};

for (let i = 0; i < 5; i++) {
    operators[i].addEventListener("click", () => {
        switch (operators[i].id) {
            case "plus":
                if (inputDigits.textContent.length !== 0) {
                    operation.append(inputDigits.textContent);
                    operation.append("+");
                    inputDigits.textContent = "";
                };
                break;
            case "minus":
                if (inputDigits.textContent.length !== 0) {
                    operation.append(inputDigits.textContent);
                    operation.append("-");
                    inputDigits.textContent = "";
                };
                break;
            case "x":
                if (inputDigits.textContent.length !== 0) {
                    operation.append(inputDigits.textContent);
                    operation.append("*");
                    inputDigits.textContent = "";
                };
                break;
            case "equal":
                operation.append(inputDigits.textContent);
                inputDigits.textContent = "";
                if (/[+\-*/]/.test(operation.textContent.charAt(operation.textContent.length - 1))) {
                    operation.textContent = operation.textContent.slice(0, -1);
                };
                answer = eval(operation.textContent);
                inputDigits.textContent = answer;
                operation.textContent = "";
                break;
            case "dot":
                if (inputDigits.textContent.includes(".") === false && inputDigits.textContent.length !== 0) {
                    inputDigits.append(".");
                };
                break;
            case "slash":
                if (inputDigits.textContent.length !== 0) {
                    operation.append(inputDigits.textContent);
                    operation.append("/");
                    inputDigits.textContent = "";
                };
                break;
        };
    });
};

window.addEventListener("keydown", (e) => {
    switch (e.code) {
        case "Escape":
            inputDigits.textContent = "";
            operation.textContent = "";
            break;
        case "Period":
        case "NumpadDecimal":
            if (inputDigits.textContent.includes(".") === false && inputDigits.textContent.length !== 0) {
                inputDigits.append(".");
            };
            break;
        case "NumpadAdd":
            if (inputDigits.textContent.length !== 0) {
                operation.append(inputDigits.textContent);
                operation.append("+");
                inputDigits.textContent = "";
            };
            break;
        case "Minus":
        case "NumpadSubtract":
            if (inputDigits.textContent.length !== 0) {
                operation.append(inputDigits.textContent);
                operation.append("-");
                inputDigits.textContent = "";
            };
            break;
        case "NumpadMultiply":
            if (inputDigits.textContent.length !== 0) {
                operation.append(inputDigits.textContent);
                operation.append("*");
                inputDigits.textContent = "";
            };
            break;
        case "Slash":
        case "NumpadDivide":
            if (inputDigits.textContent.length !== 0) {
                operation.append(inputDigits.textContent);
                operation.append("/");
                inputDigits.textContent = "";
            };
            break;
        case "Equal":
        case "Enter":
        case "NumpadEnter":
            operation.append(inputDigits.textContent);
            inputDigits.textContent = "";
            if (/[+\-*/]/.test(operation.textContent.charAt(operation.textContent.length - 1))) {
                operation.textContent = operation.textContent.slice(0, -1);
            };
            answer = eval(operation.textContent);
            inputDigits.textContent = answer;
            operation.textContent = "";
            break;
    };
});

inputDigits.addEventListener("click", () => {
    inputDigits.textContent = "";
});
operation.addEventListener("click", () => {
    operation.textContent = "";
});