let vals = document.querySelector('pre').innerText.split('\n');
let numGreater=0;
for(let i = 3; i < vals.length; i++){
    let win1 = parseInt(vals[i]) + parseInt(vals[i-1]) + parseInt(vals[i-2]);
    let win2 = parseInt(vals[i-1]) + parseInt(vals[i-2]) + parseInt(vals[i-3]);
    if(win1 > win2){
        numGreater++;
    }
}
console.log(numGreater);
