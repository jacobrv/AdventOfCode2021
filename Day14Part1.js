/*let vals = `NNCB

CH -> B
HH -> N
CB -> H
NH -> C
HB -> C
HC -> B
HN -> C
NN -> C
BH -> H
NC -> B
NB -> B
BN -> B
BB -> N
BC -> B
CC -> N
CN -> C`;*/

let vals = document.querySelector('pre').innerText;


let template = vals.split('\n\n')[0];
let rawInsertions = vals.split('\n\n')[1];
let insertions = [];
rawInsertions.split('\n').forEach(insertion=>{
    let pair = insertion.split(' -> ')[0];
    let element = insertion.split(' -> ')[1];
    insertions.push({pair, element});
});

console.log(template);
console.log(insertions);

function findInsertionElement(a, b) {
    let tInt = insertions.filter(insertion => a+b == insertion.pair);
    if(tInt && tInt.length>0) {
        return tInt[0].element;
    }
    else {
        return '';
    }
    
}

for(let x=0; x<10; x++) {
    let templateOutput = '';
    let templateCopy = template.toString();
    for(let i=0; i<templateCopy.length-1; i++) {
        templateOutput+=templateCopy.charAt(i);
        templateOutput+=findInsertionElement(templateCopy.charAt(i),templateCopy.charAt(i+1));
    }
    templateOutput+=templateCopy.charAt(templateCopy.length-1);
    template = templateOutput.toString();
    
    console.log(templateOutput);
}


function calculateScore()
{
    let hashes = [];
    for(let i = 0; i<template.length; i++) {
        if(!hashes[template.charAt(i)]) {
            hashes[template.charAt(i)]=1;
        }
        else {
            hashes[template.charAt(i)]++;
        }
    }
    console.log(hashes);
}

calculateScore();
