const player1 = 'X';
const player2 = 'O';

let currentPlayer = player1;
let board = ['', '', '', '', '', '', '', '', ''];

function handleClick(index) {
    if (board[index] === '') {
        board[index] = currentPlayer;
        renderBoard();
        checkWinner();
        currentPlayer = currentPlayer === player1 ? player2 : player1;
    }
}

function renderBoard() {
    const cells = document.querySelectorAll('.cell');
    cells.forEach((cell, index) => {
        cell.textContent = board[index];
    });
}

function resetGame() {
    board = ['', '', '', '', '', '', '', '', ''];
    currentPlayer = player1;
    renderBoard();
}

function checkWinner() {
    const winningCombos = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];

    for (let combo of winningCombos) {
        const [a, b, c] = combo;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            alert(`Player ${board[a]} wins!`);
            resetGame();
            return;
        }
    }

    if (!board.includes('')) {
        alert('It\'s a draw!');
        resetGame();
    }
}

renderBoard();
