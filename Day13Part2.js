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
        grid[y][x] = paper.includes(`${x},${y}`) ? '#' : ' ';
    }
}


function printGrid() {
    let numDots = 0;
    let pl = '';
    for(let y = 0; y <= hY; y++) {
        if(grid[y]) {
            for(let x = 0; x <= hX; x++) {
                if(grid[y][x]) {
                    pl += grid[y][x];
                    if(grid[y][x]=='#') {
                        numDots++
                    }
                }
            }
            pl+='\n'
        }
    }
    console.log(pl);
    console.log(`NumDots: ${numDots}`);
}

console.log(grid);
printGrid();


// fold along y=#
function foldUp(pos) {
    pos = parseInt(pos);
    console.log(`Folding up on y=${pos}`);
    console.log(grid.length, pos, Math.floor(grid.length/2));
    for(let y = pos; y<grid.length; y++) {
        for(let x = 0; x < grid[y].length; x++) {
            //console.log(x, y, (Math.floor(grid.length/2))-(y-pos), grid[y][x]);
            if(grid[y][x]=='#') {
                grid[(Math.floor(grid.length/2))-(y-pos)][x]='#';
            }
        }
    }
    if(pos%2==0){
        for(let i = 0; i<=pos-1; i++) {
            grid.pop();
        }
    }
    else {
        for(let i = 0; i<=pos; i++) {
            grid.pop();
        }
    }
    
    console.log(grid.length);
    printGrid();
}

// fold along x=#
function foldLeft(pos) {
    pos = parseInt(pos);
    console.log(`Folding left on x=${pos}`);
    console.log(grid[0].length, pos, Math.floor(grid[0].length/2));
    for(let y = 0; y<grid.length; y++) {
        for(let x = pos; x < grid[y].length; x++) {
            if(grid[y][x]=='#') {
                grid[y][Math.floor(grid[y].length/2)-(x-pos)]='#';
            }
        }
    }
    if(pos%2==0) {
        for(let j = 0; j<grid.length; j++) {
            for(let i = 0; i<=pos-1; i++) {
                grid[j].pop();
            }
        }
    }
    else {
        for(let j = 0; j<grid.length; j++) {
            for(let i = 0; i<=pos; i++) {
                grid[j].pop();
            }
        }
    }
    
    console.log(grid[0].length);
    printGrid();
}

folds.forEach(fold => {
    let foldLine = fold.split('=')[1];
    if(fold.includes('x=')) {
        foldLeft(foldLine);
    }
    else if(fold.includes('y=')){
        foldUp(foldLine);
    }    
});

/*
foldUp(7);
foldLeft(5);
foldUp(3);
foldLeft(2);*/
