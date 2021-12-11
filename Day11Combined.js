// test
/*let vals = `5483143223
2745854711
5264556173
6141336146
6357385478
4167524645
2176841721
6882881134
4846848554
5283751526`;*/


// real
let vals = `5251578181
6158452313
1818578571
3844615143
6857251244
2375817613
8883514435
2321265735
2857275182
4821156644`;

let parsedVals = vals.split('\n');

let grid = [];
for(let i=0;i<10;i++) {
    let t = parsedVals[i].split('');
    let tGrid = [];
    t.forEach(tt => {
        let ttt = {
            val: parseInt(tt),
            hasFlashed: false,
            dirty: false
        }
        tGrid.push(ttt);
    });
    grid.push(tGrid);
}


console.log(grid);


let anyDirty = true;
let stepNumber = 0;
let totalFlashes = 0;

let stepFlash = 0;
let stopNow = false;

function runStep() {
    stepNumber++;
    stepFlash = 0;
    console.log(`Step ${stepNumber}`);
    for(let i = 0; i<10; i++) {
        for(let j=0; j<10; j++) {
            if(!grid[i][j].dirty) {
                grid[i][j].val++;
                grid[i][j].dirty = true;
                grid[i][j].hasFlashed = false;
            }
        }
    }

    anyDirty = true;

    while(anyDirty) {
        for(let i = 0; i<10; i++) {
            for(let j=0; j<10; j++) {
                grid[i][j].dirty = false;
            }
        }

        for(let i = 0; i<10; i++) {
            for(let j=0; j<10; j++) {
                if(grid[i][j].val>9 && !grid[i][j].hasFlashed) {
                    flashFromPoint(i,j);
                }
            }
        }

        // are any dirty
        anyDirty = false;
        for(let i = 0; i<10; i++) {
            for(let j=0; j<10; j++) {
                if(grid[i][j].dirty) {
                    anyDirty = true;
                }
            }
        }
    }
    
    for(let i = 0; i<10; i++) {
        for(let j=0; j<10; j++) {
            if(grid[i][j].hasFlashed) {
                grid[i][j].val = 0;
            }
        }
    }

    if(stepFlash==100) {
        console.log(`All Flashed On Step: ${stepNumber}`);
        stopNow = true;
    }

    console.log(grid);
}

function flashFromPoint(i, j) {
    console.log('flash');
    totalFlashes++;
    stepFlash++;
    grid[i][j].hasFlashed = true;
    for(let k = -1; k <= 1; k++) {
        for(let l = -1; l <= 1; l++) {
            if(!(k==0 && l==0)) {
                if(grid[k+i] && grid[k+i][l+j]) {
                    grid[k+i][l+j].val++;
                    grid[k+i][l+j].dirty=true;
                }
            }
        }
    }
}

// use this for part 1
/*for(let i = 0; i<100; i++) {
    runStep();
}*/

// use this for part 2
while(!stopNow) {
    runStep();
}

console.log(totalFlashes);
