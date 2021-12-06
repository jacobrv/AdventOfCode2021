let vals = document.querySelector('pre').innerText.split('\n');
let parsedVals = [];
let grid = [];
vals.forEach(val=> {
 let temp = val.split(' -> ');
 if(val) {
    parsedVals.push({
        x1 : temp[0].split(',')[0],
        x2 : temp[1].split(',')[0],
        y1 : temp[0].split(',')[1],
        y2 : temp[1].split(',')[1]
    })
 }
});

parsedVals.forEach(pv => {
    if(pv.x1 != pv.x2 && pv.y1 != pv.y2) {
        return;
    }
    for(let i = Math.min(pv.x1, pv.x2); i<=Math.max(pv.x1, pv.x2); i++) {
        for(let j = Math.min(pv.y1, pv.y2); j<=Math.max(pv.y1, pv.y2); j++) {
            if(!grid[i]) {
                grid[i] = [];
            }
            if(!grid[i][j]) {
                grid[i][j] = 0;
            }
            grid[i][j]++;
        }
    }
});

let numSpaces = 0;

grid.forEach(gd=>{
    gd.forEach(gdd=> {
        if(gdd>1) {
            numSpaces++;
        }
    })
})

console.log(numSpaces);
