let vals = document.querySelector('pre').innerText.split('\n');
let lines = [];
vals.forEach(val=>{
    if(val){
        let line = val.split(' | ')[1].split(' ');
        lines = lines.concat(line);
    }
});

let count = 0;
lines.forEach(line => {
    if(line.length == 2 || line.length == 3 || line.length == 4 || line.length == 7) {
        count++;
    }
});

console.log(count);
