let btn1 = document.querySelector("button");
let cells = document.querySelectorAll(".cell");
let player = "X";
let gameOver = false;

btn1.addEventListener("click", function() {
    cells.forEach(cell => {
        cell.textContent = "";
    });
    player = "X";
    gameOver = false;
});

cells.forEach(cell => {
    cell.addEventListener("click", function() {
        if (gameOver || cell.textContent !== "") return;
        cell.textContent = player;
        checkWin();
        player = player === "X" ? "O" : "X";
    });
});

function checkWin() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
        [0, 4, 8], [2, 4, 6] // diagonals
    ];      
    for (let pattern of winPatterns) {
        const [a, b, c] = pattern;
        if (cells[a].textContent && cells[a].textContent === cells[b].textContent && cells[a].textContent === cells[c].textContent) {
            alert(`${cells[a].textContent} wins!`);
            gameOver = true;
            return;
        }
    }
    if ([...cells].every(cell => cell.textContent)) {
        alert("It's a draw!");
        gameOver = true;
    }
}

