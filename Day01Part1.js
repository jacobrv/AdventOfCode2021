let vals = document.querySelector('pre').innerText.split('\n');
let numGreater=0;
for(let i = 1; i < vals.length; i++){
    if(parseInt(vals[i]) > parseInt(vals[i-1])){
        numGreater++;
    }
}
console.log(numGreater);
