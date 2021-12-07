let vals = document.querySelector('pre').innerText.split(',');
let parsedVals = [];
let highest = 0;
let lowest = 9999;
vals.forEach(val=>{
    let temp = parseInt(val);
    parsedVals.push(temp);
    if(temp > highest) {
        highest = temp;
    }
    if(temp < lowest) {
        lowest = temp;
    }
})

let lowestFuelCost = 999999999;
let lowIdx = -1;

for(let i = 0; i<=highest; i++) {
    let fuelCost = 0;
    for(let j = 0; j<parsedVals.length; j++) {
        fuelCost += Math.abs(parsedVals[j]-i);
    }
    if(fuelCost < lowestFuelCost) {
        lowestFuelCost = fuelCost;
        lowIdx = i;
    }
}

console.log(lowestFuelCost);
console.log(lowIdx);
