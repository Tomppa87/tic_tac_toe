let main = document.querySelector(".main")

let gameBoard;

function createBoard(a) {   
    var board =  Array.from(Array(a), () => {
        return new Array(a).fill("");
    });
    gameBoard = board
    return board
    }
console.log(createBoard(3));

function playerTurn(num1,num2) {
    let player1Turn;
    let valid;
    function checkValid(num1,num2) {
        valid = (gameBoard[num1][num2] === "");
        
        return valid;
    }
        console.log(valid)
        
    
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
            
        }
    }
    checkValid(num1,num2);
    checkTurn();
    playTurn();
    
    
        
     
    
    
    
        
    
    
    console.log(gameBoard);
}
let count = 0;

function createPlayer (name) {
    return {name}
}

const player1 = createPlayer("Thomas");
const player2 = createPlayer("Helena");


