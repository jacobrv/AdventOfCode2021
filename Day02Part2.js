let vals = document.querySelector('pre').innerText.split('\n');

let horiz = 0;
let depth = 0;
let aim = 0;

for(let i=0; i<vals.length; i++) {
    let temp = vals[i].split(' ');
    switch(temp[0]) {
        case 'forward':
            horiz += parseInt(temp[1]);
            depth += parseInt(temp[1])*aim;
            break;

        case 'up':
            aim -= parseInt(temp[1]);
            break;

        case 'down':
            aim += parseInt(temp[1]);
            break;
    }
}

console.log(`Horiz: ${horiz}, Depth: ${depth}, Product: ${horiz*depth}`);
