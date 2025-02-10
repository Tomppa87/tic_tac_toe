let main = document.querySelector(".main")
let head = document.getElementById("header")
let turn_head = document.getElementById("turn_header")
let submitBtn = document.getElementById("submit_btn");
let player1Input = document.getElementById("player1");
let player2Input = document.getElementById("player2");
let resetBtn = document.createElement("button");
let playerForm = document.querySelector(".playerForm")
resetBtn.id = "reset_btn"
resetBtn.innerHTML = "Reset Game"
resetBtn.addEventListener("click", () => {
    resetBoard()
})

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Hello")
    player1 = createPlayer(player1Input.value, "X")    
    player2 = createPlayer(player2Input.value, "O");
    turn_head.innerHTML = `Let the games begin. ${player1.name} starts.`
    turn_head.appendChild(resetBtn)
})

let gameBoard;

function createPlayer (name, token) {
    return {name, token}
}

let player1 = {} 
let player2 = {}

function createBoard() {
    let board =  Array.from(Array(3), () => {
        return new Array(3).fill("");
    });
    gameBoard = board
    return board
}
let board = [];
let boardDOM = document.querySelector(".board")    
function createBoardDOM() {    
    for (i=0;i<9;i++) {
        const grid = document.createElement("button");
        grid.id = i;        
        grid.classList.add("grid");
        grid.innerHTML = ""
        board.push("")
        grid.addEventListener("click", (e) => {
            if ((player1.name) && (player2.name)) {
                playerTurnDom(parseInt(e.target.id))
                checkWinDom();
            }
            else {
                return
            }
                        
        })
        boardDOM.appendChild(grid)
    }
    return board;
}
createBoardDOM()

function resetBoard() {
    board = [];    
    while (boardDOM.lastElementChild) {
    boardDOM.removeChild(boardDOM.lastElementChild);
    }
    count = 0;
    createBoardDOM()
    turn_head.removeChild(turn_head.lastChild)
    turn_head.removeChild(turn_head.lastChild)
    turn_head.appendChild(playerForm)
    playerForm.reset();  
}

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
        } else {
            player1Turn = false;
        }
        return player1Turn;
    }
    function playTurnDom() {
        if (valid === true) {
            if (player1Turn) {
                board[num] = player1.token;
                document.getElementById(num).innerHTML = player1.token;
                turn_head.innerHTML = `Next up is: ${player2.name}`;
                turn_head.appendChild(resetBtn)
                count +=1;
            }   else {
                board[num] = player2.token;
                document.getElementById(num).innerHTML = player2.token
                turn_head.innerHTML = `Next up is: ${player1.name}`
                turn_head.appendChild(resetBtn)
                count +=1;
            }
        } else {            
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
    let winCondition = false;
    
    for (let i = 0; i<winningConditions.length;i++) {         
        for (let j = 0; j<3;j++) {
            winTest.push(flatBoard[winningConditions[i][j]]);
        }
        if (winTest[0] === player1.token && winTest[1] === player1.token && winTest[2] === player1.token) {
            console.log(`Winner is ${player1.name}`)
            turn_head.innerHTML = `The winner is: ${player1.name}`;
            winCondition = true;
            turn_head.appendChild(resetBtn)            
            
        } else if (winTest[0] === player2.token && winTest[1] === player2.token && winTest[2] === player2.token){
            console.log(`Winner is ${player2.name}`);
            turn_head.innerHTML = `The winner is: ${player2.name}`;
            winCondition = true;
            turn_head.appendChild(resetBtn)
        }   else {
            winTest = [];
        }
    }  
    if ((flatBoard.includes("") === false) && (winCondition === false)){
        turn_head.innerHTML = "The winner is: Nobody. You both Suck";
        console.log("Draw")
        turn_head.appendChild(resetBtn)
    }  
}   

let count = 0;
