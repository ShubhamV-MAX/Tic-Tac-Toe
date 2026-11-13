let boxes = document.querySelectorAll(".box");
let newGameBut = document.querySelector("#newGame");
let resetButton = document.querySelector("#resetButton");
let winner = document.createElement("h1");
document.querySelector("h1").prepend(winner);

let winningPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [6, 4, 2]
]

let user = true;

boxes.forEach((box) => {
    box.classList.add("forDesign");
    box.addEventListener("click", () =>{
        if(user){
            box.innerText = "X";
            user = false;
        }
        else{
            box.innerText = "O";
            user = true;
        }
        box.disabled = true;

        checkWinner();
    });
});
const checkWinner = () => {
    for(let patern of winningPatterns){
        let pos1val = boxes[patern[0]].innerText;
        let pos2val = boxes[patern[1]].innerText;
        let pos3val = boxes[patern[2]].innerText;
        
        if(pos1val !== "" && pos2val !== "" && pos3val !== ""){
            if(pos1val === pos2val && pos2val === pos3val){
                alert(`Player ${pos1val} won the game`);
                win = pos1val;
                winner.innerText = `Player ${win} has won the Game.`;
                boxes.forEach((box) => {
                    box.disabled = true;
                });
            }
        }
    }
}
newGameBut.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winner.innerText = "";
});
resetButton.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
    });
    winner.innerText = "";
});

