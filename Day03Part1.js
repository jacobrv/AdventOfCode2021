let vals = document.querySelector('pre').innerText.split('\n');

let bits = [0,0,0,0,0,0,0,0,0,0,0,0];

for(let i=0; i< vals.length-1; i++) {
    let temp = vals[i].split('');
    for(let j = 0; j<temp.length; j++) {
        if(temp[j]=='0') {
            bits[j]--;
        }
        else {
            bits[j]++;
        }
    }
}

let output = '';
let output2 = '';
for(let k=0;k<bits.length; k++) {
    if(bits[k] <0) {
        output = output + '0';
        output2 = output2 + '1';
    }
    else {
        output = output + '1';
        output2 = output2 + '0';
    }
}

console.log(parseInt(output,2)*parseInt(output2,2))
