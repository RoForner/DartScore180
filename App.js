let score = localStorage.getItem("score")
    ? parseInt(localStorage.getItem("score"))
    : 501;

let history = [];

updateDisplay();

function subtractScore() {

    const input = document.getElementById("throwInput");

    let value = parseInt(input.value);

    if (isNaN(value)) return;

    history.push(score);

    score -= value;

    if (score < 0) {
        score += value;
        history.pop();
        alert("Bust!");
        return;
    }

    save();
    input.value = "";
}

function undo() {

    if (history.length === 0) return;

    score = history.pop();

    save();
}

function resetGame() {

    score = 501;
    history = [];

    save();
}

function save() {

    localStorage.setItem("score", score);

    updateDisplay();
}

function updateDisplay() {

    document.getElementById("score").innerText = score;
}
