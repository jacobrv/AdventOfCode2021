let vals = document.querySelector('pre').innerText.split('\n');
let parsedLines = [];
let grid = [];
let numIntersections = 0;
let drawGrid = '';

resetGrid();

vals.forEach(val=> {
 let temp = val.split(' -> ');
 if(val) {
    parsedLines.push({
        x1 : parseInt(temp[0].split(',')[0]),
        y1 : parseInt(temp[0].split(',')[1]),
        x2 : parseInt(temp[1].split(',')[0]),
        y2 : parseInt(temp[1].split(',')[1])
    })
 }
});

parsedLines.forEach(lineItem => {
    
    // if diag line
    if(lineItem.x1 != lineItem.x2 && lineItem.y1 != lineItem.y2) {

        let startPoint = {y: 0, x: 0};
        let endPoint = {y: 0, x: 0};

        if(lineItem.x1 < lineItem.x2) {
            startPoint = {y: lineItem.y1, x: lineItem.x1};
            endPoint = {y: lineItem.y2, x: lineItem.x2};
        }
        else {
            endPoint = {y: lineItem.y1, x: lineItem.x1};
            startPoint = {y: lineItem.y2, x: lineItem.x2};
        }

        let slope = 0;
        if(endPoint.y > startPoint.y) {
            slope = 1;
        }
        else {
            slope = -1;
        }

        let dist = endPoint.x - startPoint.x;
                
        for(let i = 0; i<=dist; i++) {
            grid[startPoint.y+(slope*i)][startPoint.x+i]++;
        }
    }
    // if straight line
    else if((lineItem.x1 == lineItem.x2 && lineItem.y1 != lineItem.y2) || (lineItem.x1 != lineItem.x2 && lineItem.y1 == lineItem.y2)){
        for(let i = Math.min(lineItem.x1, lineItem.x2); i<=Math.max(lineItem.x1, lineItem.x2); i++) {
            for(let j = Math.min(lineItem.y1, lineItem.y2); j<=Math.max(lineItem.y1, lineItem.y2); j++) {
                grid[j][i]++;
            }
        }
    }
});

drawTheGrid();

function resetGrid() {
    grid = [];
    for(let i =0; i< 1000; i++) {
        let tg = [];
        for(let j=0; j<1000; j++) {
            tg.push(0);
        }
        grid.push(tg);
    }
}

function drawTheGrid() {
    numIntersections = 0;
    drawGrid='';
    for(let i=0; i<1000; i++) {
        let gridDrawLine = '';
        for(let j=0; j<1000; j++) {
            if(grid[i][j]==0) {
                gridDrawLine+='-';
            }
            else {
                gridDrawLine+=''+grid[i][j];
            }
            
            if(grid[i][j]>1){
                numIntersections++;
            }
        }
        drawGrid+=gridDrawLine+'\n';
    }
    
    console.log(grid);
    
    console.log(drawGrid);
    
    console.log(numIntersections);
}

