let secretNumber = Math.floor(100) + 1;
let attempts = 0;

function checkGuess() {
    const userGuess = parseInt(document.getElementById("user-guess").value);
    attempts++;

    if (userGuess < secretNumber) {
        document.getElementById("game-info").innerText = "Try again! Your guess is too low.";
    } else if (userGuess > secretNumber) {
        document.getElementById("game-info").innerText = "Try again! Your guess is too high.";
    } else {
        document.getElementById("game-info").innerText = `Congratulations! You found the number in ${attempts} attempts.`;
    }
}