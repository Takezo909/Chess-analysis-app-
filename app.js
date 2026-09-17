const game = new Chess();

let selectedSquare = null;

console.log(game.fen());

const board = document.getElementById("chessboard");

const pieces = [
    "♜", "♞", "♝", "♛", "♚", "♝", "♞", "♜",
    "♟", "♟", "♟", "♟", "♟", "♟", "♟", "♟",
    "",   "",   "",   "",   "",   "",   "",   "",
    "",   "",   "",   "",   "",   "",   "",   "",
    "",   "",   "",   "",   "",   "",   "",   "",
    "",   "",   "",   "",   "",   "",   "",   "",
    "♙", "♙", "♙", "♙", "♙", "♙", "♙", "♙",
    "♖", "♘", "♗", "♕", "♔", "♗", "♘", "♖"
];

for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {

        const square = document.createElement("div");

        const squareName = String.fromCharCode(97 + col) + (8 - row);
        square.dataset.square = squareName;
        square.addEventListener("click", handleSquareClick);

        if ((row + col) % 2 === 0) {
            square.classList.add("light");
        } else {
            square.classList.add("dark");
        }

        function handleSquareClick(event) {
            const square = event.currentTarget;
            const squareName = square.dataset.square;

            if (selectedSquare === null) {
                selectedSquare = squareName;
                console.log("Selected:", selectedSquare);
            } else {

                const move = game.move({
                    from: selectedSquare,
                    to: squareName
            });

            if (move) {
                console.log("Legal move:", move);
            } else {
                console.log("Illegal move");
            }

            selectedSquare = null;
        }
}

        const piece = pieces[row * 8 + col];

        square.textContent = piece;

        board.appendChild(square);
    }
}