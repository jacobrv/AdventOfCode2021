let vals = document.querySelector('pre').innerText.split('\n');
let bitPosition = 0;
let out1 = 0;
let out2 = 0;

for(let i=0; i< vals.length-2; i++) {
    vals[i] = vals[i].split('');
}

while(bitPosition<12 && vals.length > 1) {
    let bitCount = 0;
    
    for(let j = 0; j<vals.length; j++) {
        if(vals[j][bitPosition]=='0') {
            bitCount--;
        }
        else {
            bitCount++;
        }
    }
    
    let bitCheck = bitCount >= 0 ? '1' : '0';
    
    vals = vals.filter((val)=> {
        return val[bitPosition]==bitCheck;
    });
    bitPosition++;

    console.log(vals);

    if(vals.length == 1) {
        out1= parseInt(vals[0].join(''),2);
     }
}

bitPosition = 0;
vals = document.querySelector('pre').innerText.split('\n');

for(let i=0; i< vals.length-2; i++) {
    vals[i] = vals[i].split('');
}

while(bitPosition<12 && vals.length > 1) {
    let bitCount = 0;
    
    for(let j = 0; j<vals.length; j++) {
        if(vals[j][bitPosition]=='0') {
            bitCount--;
        }
        else {
            bitCount++;
        }
    }
    
    let bitCheck = bitCount >= 0 ? '0' : '1';
    
    vals = vals.filter((val)=> {
        return val[bitPosition]==bitCheck;
    });
    bitPosition++;

    console.log(vals);

    if(vals.length == 1) {
        out2= parseInt(vals[0].join(''),2);
     }
}

console.log(out1 * out2);
