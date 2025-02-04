let BOARD_SIZE = 15;
let board; //kenttä talennetaan tähän







document.getElementById("new-game-btn").addEventListener('click', startGame);

function startGame(){
    document.getElementById("intro-screen").style.display = 'none';
    document.getElementById("game-screen").style.display = 'block';

    board = generateRandomBoard();
    drawBoard(board);
}

function generateRandomBoard(){

    const newBoard = Array.from({ length: BOARD_SIZE}, () =>
        Array.apply(BOARD_SIZE).fill(' '));

    console.log(newBoard);

// set walls in edges
for (let y = 0; y < BOARD_SIZE; y++) {

    for (let x = 0; x < BOARD_SIZE; x++) {
     if (y === 0 || y === BOARD_SIZE - 1 || x === 0 || x === BOARD_SIZE - 1) {
     newBoard[y][x] = 'W'; //W is wall
     }
    }

   }
    
   return newBoard;

}

function drawBoard(board) {
    const gameBoard = document.getElementById('game-board');

    //JÄÄTIIN TÄHÄN: Asetataan grid sarakkeet ja rivit dynaamisesti BOARD_SIZEN mukaan
    gameBoard.style.gridTemplateColumns = `repeat(${BOARD_SIZE}, 1fr)`;
}