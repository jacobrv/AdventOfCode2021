let vals = document.querySelector('pre').innerText;

/*let vals = `2199943210
3987894921
9856789892
8767896789
9899965678`;*/

let rows = vals.split('\n');
let grid = [];
let pointsChecked = []
rows.forEach(el => {
    let temp = el.split('');
    temp.forEach(t=>t=parseInt(t));
    grid.push(temp);
});

for(let i = 0; i<grid.length; i++) {
    let temp = [];
    for(let j = 0; j<grid[i].length; j++) {
        temp.push(false);
    }
    pointsChecked.push(temp);
}

console.log(grid);

function testPoint(x,y) {

    // console.log(`Testing: ${x}, ${y}`)

    if(x<0 || x >= grid.length){
        return 0;
    }

    if(y<0 || y >= grid[x].length){
        return 0;
    }

    if(pointsChecked[x][y]) {
        return 0;
    }

    if(grid[x][y] == 9) {
        pointsChecked[x][y] = true;
        return 0;
    }

    pointsChecked[x][y] = true;
    return 1 + testPoint(x-1,y) + testPoint(x+1,y) + testPoint(x,y-1) + testPoint(x,y+1);

}

let basins = [];

for(let i=0; i<grid.length; i++) {
    for(let j=0; j<grid[i].length; j++) {
        if(!pointsChecked[i][j]) {
            let basinSize = testPoint(i,j);
            basins.push(parseInt(basinSize));
        }
    }
}

basins = basins.sort( (a,b) => {return parseInt(a) - parseInt(b)});
console.log(basins);

let risk = basins.pop() * basins.pop() * basins.pop();

console.log(risk);
