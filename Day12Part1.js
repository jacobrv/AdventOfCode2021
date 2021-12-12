// small test
let vals1 = `start-A
start-b
A-c
A-b
b-d
A-end
b-end`;

// med test
let vals2 = `dc-end
HN-start
start-kj
dc-start
dc-HN
LN-dc
HN-end
kj-sa
kj-HN
kj-dc`;

// large test
let vals3 = `fs-end
he-DX
fs-he
start-DX
pj-DX
end-zg
zg-sl
zg-pj
pj-he
RW-he
fs-DX
pj-RW
zg-RW
start-pj
he-WI
zg-he
pj-fs
start-RW`;

// real data
let vals4 = `xx-end
EG-xx
iy-FP
iy-qc
AB-end
yi-KG
KG-xx
start-LS
qe-FP
qc-AB
yi-start
AB-iy
FP-start
iy-LS
yi-LS
xx-AB
end-KG
iy-KG
qc-KG
FP-xx
LS-qc
FP-yi`;

let lines = vals4.split('\n');
let paths = [];
let numFoundPaths = 0;
lines.forEach(line => {
    paths.push(line.split('-'));
});

console.log(paths);

function findPathsFromPoint(point) {
    let t = paths.filter(path=>{
        return path.indexOf(point)>=0;
    });
    let out = [];
    t.forEach(tt=> {
        if(tt[0] == point) {
            out.push(tt[1]);
        }
        else {
            out.push(tt[0]);
        }
    })
    return out;
}


// console.log(findPathsFromPoint('start'));


function doStep(currentPosition, pathSoFar) {
    
    if(currentPosition.toLowerCase() == currentPosition && pathSoFar.includes(currentPosition)) {
        // can't double back on small caves, abort this path
        return;
    }
    
    pathSoFar.push(currentPosition);

    if(currentPosition == 'end') {
        // found the end, print this path
        console.log(pathSoFar);
        numFoundPaths++;
        return;
    }
    
    let options = findPathsFromPoint(currentPosition);
    options.forEach(option => {
        doStep(option, [...pathSoFar]);
    });
}

doStep('start', []);

console.log(numFoundPaths);
