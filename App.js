let boxes = document.querySelectorAll('.box');
let resetbtn = document.querySelector('.reset');
let msg = document.querySelector('.msg');
let msgwinner = document.querySelector('#msgwinner');
let turnO = true;

let winPatterns = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]

const disabledboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const resetganme = () =>{
    turnO = true;
    enalbeboxes();
    msg.classList.add("hide");
    
}

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        
        if(turnO){
            box.innerText = "O";
            box.classList.add("o");
            turnO = false;
        }
        else{
            box.innerText = "X";
            box.classList.add("x");
            turnO = true;
        }
        

        checkwinner();

    });
}); 

const enalbeboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
        box.classList.remove("o");
        box.classList.remove("x");
}
}

const showwinner = (winner) => {
    msg.innerText = `Congratulations! Winner is ${winner}`;
    msg.classList.remove("hide");
    disabledboxes();
    confetti({
    particleCount: 250,
    spread: 200,
    origin: { y: 0.6 }
});
}
const checkdraw = () => {
let draw = true;
boxes.forEach((box) => {
    if(box.innerText == ""){
        draw = false;
    }
});
if(draw){
    msg.innerText = "It's a Draw!";

    msg.classList.remove("hide");
    disabledboxes();
}
};

const checkwinner = () => {
    
    for(let pattern of winPatterns){
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;
        if(pos1 != "" && pos2 != "" && pos3 != ""){
            if(pos1 == pos2 && pos2 == pos3){
                
                showwinner(pos1);
                
            }
        }
    }
    checkdraw();
};


  

resetbtn.addEventListener("click", resetganme);
newbtn.addEventListener("click", resetganme);
