let main = document.querySelector(".main")
let turn_head = document.getElementById("turn_header")
// Needs a bit of work

let gameBoard;

function createBoard() {   
    const board =  Array.from(Array(3), () => {
        return new Array(3).fill("");
    });
    gameBoard = board
    return board
    }
const board = [];
let boardDOM = document.querySelector(".board")    
function createBoardDOM() {
    
    for (i=0;i<9;i++) {
        const grid = document.createElement("button");
        grid.id = i;        
        grid.classList.add("grid");
        grid.innerHTML = ""
        board.push("")
        grid.addEventListener("click", (e) => {
            console.log("hello"+e.target.id);
            /*e.target.innerHTML = player1Token
            board[grid.id] = player1Token;*/
            playerTurnDom(parseInt(e.target.id))
            checkWinDom();
            
        })
        boardDOM.appendChild(grid)
    }
    return board;
}
createBoardDOM()
    
console.log(createBoard());

function playerTurnDom(num) {
    let player1Turn;
    let valid;
    function checkValidDom() {
        valid = (board[num] === "");
        return valid;
    }
    function checkTurnDom() {
        if ((count === 0)||(count % 2 == 0)) {
            player1Turn = true;
            turn_head.innerHTML = `Next up is: ${player2.name}`;

        } else {
            player1Turn = false;
            turn_head.innerHTML = `Next up is: ${player1.name}`
        };
        return player1Turn;
    }
    function playTurnDom() {
        if (valid === true) {
            if (player1Turn) {
                board[num] = player1Token;
                document.getElementById(num).innerHTML = player1Token
                               
                count +=1;
            }   else {
                board[num] = player2Token;
                document.getElementById(num).innerHTML = player2Token
                count +=1;
            }
        } else {
            console.log("Error")
            return;            
        }
    }
    checkValidDom();
    checkTurnDom();
    playTurnDom();
    
}
function checkWinDom() {
    const flatBoard = board;
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
    winTest = [];
    for (let i = 0; i<winningConditions.length;i++) {
        //console.log(winningConditions[i])            
        //console.log(winTest)            
        for (let j = 0; j<3;j++) {
            //console.log(winningConditions[i][j])
            winTest.push(flatBoard[winningConditions[i][j]]);
        }
        console.log(winTest)
        if (winTest[0] === player1Token && winTest[1] === player1Token && winTest[2] === player1Token) {
            console.log(`Winner is ${player1.name}`)
        } else if (winTest[0] === player2Token && winTest[1] === player2Token && winTest[2] === player2Token){
            console.log(`Winner is ${player2.name}`)
        }            
        else {
            winTest = [];
        }
    }       
}
/*
checkWin();
console.log(gameBoard);

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
                gameBoard[num1][num2] = player1Token;
                count +=1;
            }   else {
                gameBoard[num1][num2] = player2Token;
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
        winTest = [];
        for (let i = 0; i<winningConditions.length;i++) {
            //console.log(winningConditions[i])            
            //console.log(winTest)            
            for (let j = 0; j<3;j++) {
                //console.log(winningConditions[i][j])
                winTest.push(flatBoard[winningConditions[i][j]]);
            }
            console.log(winTest)
            if (winTest[0] === player1Token && winTest[1] === player1Token && winTest[2] === player1Token) {
                console.log(`Winner is ${player1.name}`)
            } else if (winTest[0] === player2Token && winTest[1] === player2Token && winTest[2] === player2Token){
                console.log(`Winner is ${player2.name}`)
            }            
            else {
                winTest = [];
            }
        }       
    }
    checkWin();
    console.log(gameBoard);
}*/
let count = 0;

function createPlayer (name, token) {
    return {name, token}
}

const player1 = createPlayer("Thomas", "X");
const player1Token = player1.token;
const player2 = createPlayer("Helena", "O");
const player2Token = player2.token;

turn_head.innerHTML = `Let the games begin. ${player1.name} starts.`



