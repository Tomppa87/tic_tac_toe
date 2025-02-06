let gameBoard;

function createBoard(a) {
    /*const grid = [];    
    const row = new Array (a); 
    for (i=0;i<a;i++) {
        grid.push(row)
    }    
    gameBoard = grid;
    return gameBoard*/
    var board =  Array.from(Array(a), () => {
        return new Array(a).fill("");
    });
    gameBoard = board
    return board
    }





console.log(createBoard(3));

function playerTurn(num1,num2) {
    gameBoard[num1][num2] = "X";
    console.log(gameBoard);
}

function createPlayer (name) {
    return {name}
}

const player1 = createPlayer("Thomas");
