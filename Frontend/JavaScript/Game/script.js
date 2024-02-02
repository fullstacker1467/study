document.addEventListener("DOMContentLoaded", function () {
  const cells = document.querySelectorAll(".cell");
  const resultDisplay = document.getElementById("result");
  const resetBtn = document.getElementById("resetBtn");
  let currentPlayer = "X";
  let gameBoard = ["", "", "", "", "", "", "", "", ""];
  let gameActive = true;

  function checkWinner() {
    const winPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (
        gameBoard[a] &&
        gameBoard[a] === gameBoard[b] &&
        gameBoard[a] === gameBoard[c]
      ) {
        return gameBoard[a];
      }
    }

    return null;
  }

  function checkDraw() {
    return !gameBoard.includes("");
  }

  function handleClick(index) {
    if (!gameBoard[index] && gameActive) {
      gameBoard[index] = currentPlayer;
      cells[index].innerText = currentPlayer;

      const winner = checkWinner();
      const draw = checkDraw();

      if (winner) {
        resultDisplay.innerText = `${winner} wins!`;
        gameActive = false;
      } else if (draw) {
        resultDisplay.innerText = "It's a draw!";
        gameActive = false;
      } else {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
      }
    }
  }

  function resetGame() {
    gameBoard = ["", "", "", "", "", "", "", "", ""];
    gameActive = true;
    currentPlayer = "X";
    resultDisplay.innerText = "";
    cells.forEach((cell) => {
      cell.innerText = "";
    });
  }

  cells.forEach((cell) => {
    cell.addEventListener("click", () => handleClick(cell.dataset.index));
  });

  resetBtn.addEventListener("click", resetGame);
});
