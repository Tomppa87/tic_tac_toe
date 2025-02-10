let main = document.querySelector(".main")
let turn_head = document.getElementById("turn_header")
let submitBtn = document.getElementById("submit_btn");
let player1Input = document.getElementById("player1");
let player2Input = document.getElementById("player2");
let resetBtn = document.createElement("button");
resetBtn.id = "reset_btn"
resetBtn.innerHTML = "Reset Game"
resetBtn.addEventListener("click", () => {
    resetBoard()
}
)

submitBtn.addEventListener("click", function (e) {
    e.preventDefault();
    console.log("Hello")
    player1 = createPlayer(player1Input.value, "X")
    //player1Token = player1.token;
    player2 = createPlayer(player2Input.value, "O");
    //player2Token = player2.token;
    turn_head.innerHTML = `Let the games begin. ${player1.name} starts.`
    turn_head.appendChild(resetBtn)
})

// Needs a bit of work

let gameBoard;

function createPlayer (name, token) {
    return {name, token}
}

let player1 = {} //= createPlayer("Thomas", "X");
//let player1Token = player1.token;
let player2 = {}//createPlayer("Helena", "O");
//let player2Token = player2.token;

function createBoard() {  
    //
 
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

function resetBoard() {
    createBoardDOM()
    createBoard()

    
}
    
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
            

        } else {
            player1Turn = false;
            
        };
        return player1Turn;
    }
    function playTurnDom() {
        if (valid === true) {
            if (player1Turn) {
                board[num] = player1.token;
                document.getElementById(num).innerHTML = player1.token;
                turn_head.innerHTML = `Next up is: ${player2.name}`;
                               
                count +=1;
            }   else {
                board[num] = player2.token;
                document.getElementById(num).innerHTML = player2.token
                turn_head.innerHTML = `Next up is: ${player1.name}`
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
        if (winTest[0] === player1.token && winTest[1] === player1.token && winTest[2] === player1.token) {
            console.log(`Winner is ${player1.name}`)
            turn_head.innerHTML = `The winner is: ${player1.name}`;
        } else if (winTest[0] === player2.token && winTest[1] === player2.token && winTest[2] === player2.token){
            console.log(`Winner is ${player2.name}`);
            turn_head.innerHTML = `The winner is: ${player2.name}`;
            
        } else if (flatBoard.includes("") === false){
            turn_head.innerHTML = "The winner is: Nobody. You both Suck";
            console.log("Draw");
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






