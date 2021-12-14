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

let pairs = [];


let template = vals.split('\n\n')[0];
let rawInsertions = vals.split('\n\n')[1];
let insertions = [];
rawInsertions.split('\n').forEach(insertion=>{
    let pair = insertion.split(' -> ')[0];
    let element = insertion.split(' -> ')[1];
    insertions.push({pair, element});
});

//console.log(template);
//console.log(insertions);

function findInsertionElement(pair) {
    let tInt = insertions.filter(insertion => pair == insertion.pair);
    if(tInt && tInt.length>0) {
        return tInt[0].element;
    }
    else {
        return '';
    }
    
}


for(i=0; i<template.length-1; i++) {
    console.log(template.charAt(i)+template.charAt(i+1));
    if(!pairs[template.charAt(i)+template.charAt(i+1)]) {
        pairs[template.charAt(i)+template.charAt(i+1)]=1;
    }
    else {
        pairs[template.charAt(i)+template.charAt(i+1)]++;
    }
    // console.log(pairs);
}

console.log(pairs);

for(let x=0; x<40; x++) {
    // console.log(pairs);
    let tempPairs = [];
    Object.keys(pairs).forEach((pair)=>{
        tempPairs[pair]=parseInt(pairs[pair]);
    });
    console.log(tempPairs);
    Object.keys(tempPairs).forEach((pair)=> {
        // console.log(pair, count);
        let ie = findInsertionElement(pair);
        if(ie=='') {
            return;
        }
        let newLeftPair = pair.charAt(0) + ie;
        let newRightPair = ie + pair.charAt(1);
        let count = parseInt(tempPairs[pair]);
        pairs[pair]-=count;
        if(!pairs[newLeftPair]) {
            pairs[newLeftPair]=count;
        }
        else {
            pairs[newLeftPair]+=count;
        }
        if(!pairs[newRightPair]) {
            pairs[newRightPair]=count;
        }
        else {
            pairs[newRightPair]+=count;
        }
    });
    // console.log(pairs);
}


function calculateScore()
{
    let hashes = [];
    Object.keys(pairs).forEach((pair)=> {
        let count = pairs[pair];
        console.log(pair, count);
        if(!hashes[pair.charAt(0)]) {
            hashes[pair.charAt(0)]=count;
        }
        else {
            hashes[pair.charAt(0)]+=count;
        }
        if(!hashes[pair.charAt(1)]) {
            hashes[pair.charAt(1)]=count;
        }
        else {
            hashes[pair.charAt(1)]+=count;
        }
    });

    Object.keys(hashes).forEach(hash=>{
        console.log(hash + ': ' + Math.ceil(hashes[hash]/2));
    });


    console.log(hashes);
}

calculateScore();
