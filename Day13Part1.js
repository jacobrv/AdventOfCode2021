/*let vars = `6,10
0,14
9,10
0,3
10,4
4,11
6,0
6,12
4,1
0,13
10,12
3,4
3,0
8,4
1,10
2,14
8,10
9,0

fold along y=7
fold along x=5`;*/

let vars = document.querySelector('pre').innerText;


let sections = vars.split('\n\n');

let paper = sections[0].split('\n');
let folds = sections[1].split('\n');



let grid = [];
let paperParsed = [];

let hX = 0;
let hY = 0;
paper.forEach(p => {
    p = p.split(',');
    p[0] = parseInt(p[0]);
    p[1] = parseInt(p[1]);
    paperParsed.push(p);
    if(p[0]>hX) {
        hX = p[0];
    }
    if(p[1]>hY) {
        hY = p[1];
    }
});


for(let i = 0; i <= hY; i++) {
    grid[i] = [];
}

for(let x = 0; x <= hX; x++) {
    for(let y = 0; y <= hY; y++) {
        grid[y][x] = paper.includes(`${x},${y}`) ? '#' : '.';
    }
}


function printGrid() {
    let numDots = 0;
    for(let y = 0; y <= hY; y++) {
        if(grid[y]) {
            let pl = '';
            for(let x = 0; x <= hX; x++) {
                if(grid[y][x]) {
                    pl += grid[y][x];
                    if(grid[y][x]=='#') {
                        numDots++
                    }
                }
            }
            console.log(pl);
        }
    }   
    console.log(`NumDots: ${numDots}`);
}

console.log(grid);
printGrid();


// fold along y=#
function foldUp(pos) {
    console.log(`Folding up on y=${pos}`);
    for(let y = pos; y<grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++) {
            // console.log(x, y, (grid.length/2)-(y-pos), grid[y][x]);
            if(grid[y][x]=='#') {
                grid[(Math.floor(grid.length/2))-(y-pos)][x]='#';
            }
        }
    }
    for(let i = 0; i<=pos; i++) {
        grid.pop();
    }
    printGrid();
}

// fold along x=#
function foldLeft(pos) {
    console.log(`Folding left on x=${pos}`);
    for(let y = 0; y<grid.length; y++) {
        for(let x = pos; x < grid[y].length; x++) {
            if(grid[y][x]=='#') {
                grid[y][Math.floor(grid[y].length/2)-(x-pos)]='#';
            }
        }
    }
    for(let j = 0; j<grid.length; j++) {
        for(let i = 0; i<=pos; i++) {
            grid[j].pop();
        }
    }
    printGrid();
}

// just one
let foldLine = folds[0].split('=')[1];
if(folds[0].includes('x=')) {
    foldLeft(foldLine);
}
else {
    foldUp(foldLine);
}    

/*folds.forEach(fold => {
    let foldLine = fold.split('=')[1];
    if(fold.includes('x=')) {
        foldLeft(foldLine);
    }
    else {
        foldUp(foldLine);
    }    
});*/

// foldUp(7);
// foldLeft(5);
