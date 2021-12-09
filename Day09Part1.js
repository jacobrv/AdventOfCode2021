let vals = document.querySelector('pre').innerText;

/*let vals = `2199943210
3987894921
9856789892
8767896789
9899965678`;*/

let rows = vals.split('\n');
let grid = [];
rows.forEach(el => {
    let temp = el.split('');
    temp.forEach(t=>t=parseInt(t));
    grid.push(temp);
});

console.log(grid);

let risk = 0;

function testPoint(x,y) {
    let lowest = true;
    //up
    if(y-1>=0) {
        if(grid[x][y] >= grid[x][y-1]) {
            lowest = false;
            console.log(x, y, grid[x][y])
        }
    }

    //down
    if(y+1<grid[x].length) {
        if(grid[x][y] >= grid[x][y+1]) {
            lowest = false;
        }
    }

    //left
    if(x-1>=0) {
        if(grid[x][y] >= grid[x-1][y]) {
            lowest = false;
        }
    }

    //right
    if(x+1<grid.length) {
        if(grid[x][y] >= grid[x+1][y]) {
            lowest = false;
        }
    }

    if(lowest) {
        risk+= (parseInt(grid[x][y]) + 1);
    }
}

for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[i].length; j++) {
        testPoint(i,j);
    }
}

console.log(risk);
