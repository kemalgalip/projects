let XButton = document.getElementById("X");
let OButton = document.getElementById("O");

let boxList = [
    document.getElementById("box1"),
    document.getElementById("box2"),
    document.getElementById("box3"),
    document.getElementById("box4"),
    document.getElementById("box5"),
    document.getElementById("box6"),
    document.getElementById("box7"),
    document.getElementById("box8"),
    document.getElementById("box9")
];

let playerScore = document.querySelector(".player_score");
let drawScore = document.querySelector(".draw_score");
let computerScore = document.querySelector(".computer_score");

playerScore.textContent = 0;
drawScore.textContent = 0;
computerScore.textContent = 0;

let computerCount = 0;

function check() {
    if (boxList[0].className === boxList[1].className && boxList[1].className === boxList[2].className) {
        if (XButton.className === "selected" && boxList[1].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[1].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[1].className === "box_X") {
            computerScore.textContent += 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[1].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[3].className === boxList[4].className && boxList[4].className === boxList[5].className) {
        if (XButton.className === "selected" && boxList[4].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[4].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[6].className === boxList[7].className && boxList[7].className === boxList[8].className) {
        if (XButton.className === "selected" && boxList[7].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[7].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[7].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[7].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[0].className === boxList[3].className && boxList[3].className === boxList[6].className) {
        if (XButton.className === "selected" && boxList[3].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[3].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[3].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[3].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[1].className === boxList[4].className && boxList[4].className === boxList[7].className) {
        if (XButton.className === "selected" && boxList[4].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[4].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[2].className === boxList[5].className && boxList[5].className === boxList[8].className) {
        if (XButton.className === "selected" && boxList[5].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[5].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[5].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[5].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[0].className === boxList[4].className && boxList[4].className === boxList[8].className) {
        if (XButton.className === "selected" && boxList[4].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[4].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[2].className === boxList[4].className && boxList[4].className === boxList[6].className) {
        if (XButton.className === "selected" && boxList[4].className === "box_X") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        }
        else if (XButton.className === "selected" && boxList[4].className === "box_O") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_X") {
            computerScore.textContent = Number(computerScore.textContent) + 1;
            return true;
        }
        else if (OButton.className === "selected" && boxList[4].className === "box_O") {
            playerScore.textContent = Number(playerScore.textContent) + 1;
            return true;
        };
    }
    else if (boxList[0].className !== "" && boxList[1].className !== "" && boxList[2].className !== "" && boxList[3].className !== "" && boxList[4].className !== "" && boxList[5].className !== "" && boxList[6].className !== "" && boxList[7].className !== "" && boxList[8].className !== "") {
        reset();
        drawScore.textContent = Number(drawScore.textContent) + 1;
        if (OButton.classList.contains("selected")) {
            computerGo();
        };
    };
};

function computerGo() {
    while (true) {
        randomIndex = getRandomDigit();
        if (XButton.classList.contains("selected") && boxList[randomIndex].className === "" && computerCount < 4) {
            boxList[randomIndex].classList.add("box_O");
            computerCount += 1;
            if (check()) {
                reset();
            };
            break;
        }
        else if (OButton.classList.contains("selected") && boxList[randomIndex].className === "" && computerCount < 5) {
            boxList[randomIndex].classList.add("box_X");
            computerCount += 1;
            if (check()) {
                reset();
                computerGo();
            };
            break;
        }
        else if (XButton.classList.contains("selected") && computerCount >= 4) {
            break;
        }
        else if (OButton.classList.contains("selected") && computerCount >= 5) {
            break;
        }
        else {
            continue;
        };
    };
};

function getRandomDigit() {
    return Math.floor(Math.random() * boxList.length);
};

function reset() {
    document.getElementById("box1").className = "";
    document.getElementById("box2").className = "";
    document.getElementById("box3").className = "";
    document.getElementById("box4").className = "";
    document.getElementById("box5").className = "";
    document.getElementById("box6").className = "";
    document.getElementById("box7").className = "";
    document.getElementById("box8").className = "";
    document.getElementById("box9").className = "";
    computerCount = 0;
};

XButton.addEventListener("click", () => {
    if (XButton.classList.contains("selected") === false) {
        XButton.classList.add("selected");
        OButton.classList.remove("selected");
    };
    reset();
});

OButton.addEventListener("click", () => {
    if (OButton.classList.contains("selected") === false) {
        OButton.classList.add("selected");
        XButton.classList.remove("selected");
    };
    reset();
    computerGo();
});

document.getElementById("1").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[0].className === "") {
        boxList[0].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[0].className === "") {
        boxList[0].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("2").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[1].className === "") {
        boxList[1].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[1].className === "") {
        boxList[1].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});
document.getElementById("3").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[2].className === "") {
        boxList[2].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[2].className === "") {
        boxList[2].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("4").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[3].className === "") {
        boxList[3].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[3].className === "") {
        boxList[3].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("5").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[4].className === "") {
        boxList[4].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[4].className === "") {
        boxList[4].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("6").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[5].className === "") {
        boxList[5].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[5].className === "") {
        boxList[5].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("7").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[6].className === "") {
        boxList[6].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[6].className === "") {
        boxList[6].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("8").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[7].className === "") {
        boxList[7].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[7].className === "") {
        boxList[7].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

document.getElementById("9").addEventListener("click", () => {
    if (XButton.classList.contains("selected") && boxList[8].className === "") {
        boxList[8].classList.add("box_X");
        if (check()) {
            reset();
        }
        else {
            computerGo();
        };
    }
    else if (OButton.classList.contains("selected") && boxList[8].className === "") {
        boxList[8].classList.add("box_O");
        if (check()) {
            reset();
            computerGo();
        }
        else {
            computerGo();
        };
    };
});

window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
        reset();
        if (OButton.classList.contains("selected")) {
            computerGo();
        };
    };
});