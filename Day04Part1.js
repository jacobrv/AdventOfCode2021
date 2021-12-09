let vals = document.querySelector('pre').innerText.split('\n\n');

let numbersToCall = vals.shift().split(',');
let boards = []
vals.forEach(val => {
    let temp = val.replace(/\s/g, ',').split(',');
    boards.push(temp.filter(t=>t!=''));
});
console.log(numbersToCall);
console.log(boards);

let winnerFound = false;
let winnerScore = 0;


function checkForWinners() {
    boards.forEach(board => checkBoard(board));
}

function calcWinningScore(board) {
    board.forEach(b => {
        if(!calledNumbers.includes(b)){
            winnerScore+=parseInt(b);
        }
    })
}

function checkBoard(board) {

    if(winnerFound) {
        return;
    }
    // horiz
    for(let i=0;i<5;i++) {
        let rowWin = true;
        for(let j=i*5; j<(i*5)+5; j++)
        {
            if(!calledNumbers.includes(board[j]))
            {
                rowWin = false;
                break;
            }
        }
        if(rowWin) {
            winnerFound = true;
            calcWinningScore(board);
            console.log('WINNER FOUND: '+(winnerScore * parseInt(calledNumbers.pop())));
            return;
        }
    }
    // verts
    for(let i=0;i<5;i++) {
        let rowWin = true;
        for(let j=i; j<25; j=j+5)
        {
            if(!calledNumbers.includes(board[j]))
            {
                rowWin = false;
                break;
            }
        }
        if(rowWin) {
            winnerFound = true;
            calcWinningScore(board);
            console.log('WINNER FOUND: '+(winnerScore * parseInt(calledNumbers.pop())));
            return;
        }
    }

}



let calledNumbers = [];

while(!winnerFound && numbersToCall.length>0) {
    calledNumbers.push(numbersToCall.shift());

    checkForWinners();
}

