let main = document.querySelector(".main")

let gameBoard;

function createBoard() {   
    const board =  Array.from(Array(3), () => {
        return new Array(3).fill("");
    });
    gameBoard = board
    return board
    }
console.log(createBoard());

function playerTurn(num1,num2) {
    let player1Turn;
    let valid;
    function checkValid(num1,num2) {
        valid = (gameBoard[num1][num2] === "");
        
        return valid;
    }

    function checkTurn() {
        if ((count === 0)||(count % 2 == 0)) {
            player1Turn = true;
        } else {
            player1Turn = false
        };
        return player1Turn;
    }
    function playTurn() {
        if (valid === true) {
            if (player1Turn) {
                gameBoard[num1][num2] = "X";
                count +=1;
            }   else {
                gameBoard[num1][num2] = "O";
                count +=1;
            }
        } else {
            console.log("Error")
            return;            
        }
    }
    checkValid(num1,num2);
    checkTurn();
    playTurn();

    function checkWin() {
        const flatBoard = gameBoard.flat();
        console.log(flatBoard) 
        const winningConditions = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        winTest = []
        for (let i = 0; i<winningConditions.length;i++) {
            console.log(winningConditions[i])
            
            console.log(winTest)
            
            for (let j = 0; j<3;j++) {
                console.log(winningConditions[i][j])
                winTest.push(flatBoard[winningConditions[i][j]])
            }
            console.log(winTest)
            // need to check here that all are X or O
            winTest = []
        }       
    }
    checkWin();
    
    
        
     
    
    
    
        
    
    
    console.log(gameBoard);
}
let count = 0;

function createPlayer (name) {
    return {name}
}

const player1 = createPlayer("Thomas");
const player2 = createPlayer("Helena");


