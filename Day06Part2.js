// let state = [3,4,3,1,2];
let state = [4,2,4,1,5,1,2,2,4,1,1,2,2,2,4,4,1,2,1,1,4,1,2,1,2,2,2,2,5,2,2,3,1,4,4,4,1,2,3,4,4,5,4,3,5,1,2,5,1,1,5,5,1,4,4,5,1,3,1,4,5,5,5,4,1,2,3,4,2,1,2,1,2,2,1,5,5,1,1,1,1,5,2,2,2,4,2,4,2,4,2,1,2,1,2,4,2,4,1,3,5,5,2,4,4,2,2,2,2,3,3,2,1,1,1,1,4,3,2,5,4,3,5,3,1,5,5,2,4,1,1,2,1,3,5,1,5,3,1,3,1,4,5,1,1,3,2,1,1,1,5,2,1,2,4,2,3,3,2,3,5,1,5,1,2,1,5,2,4,1,2,4,4,1,5,1,1,5,2,2,5,5,3,1,2,2,1,1,4,1,5,4,5,5,2,2,1,1,2,5,4,3,2,2,5,4,2,5,4,4,2,3,1,1,1,5,5,4,5,3,2,5,3,4,5,1,4,1,1,3,4,4,1,1,5,1,4,1,2,1,4,1,1,3,1,5,2,5,1,5,2,5,2,5,4,1,1,4,4,2,3,1,5,2,5,1,5,2,1,1,1,2,1,1,1,4,4,5,4,4,1,4,2,2,2,5,3,2,4,4,5,5,1,1,1,1,3,1,2,1];
let day = 0;

let hashmap = [0,0,0,0,0,0,0,0,0]
for(let i=0; i<state.length; i++) {
    hashmap[state[i]]++;
}

console.log(hashmap);

function runLoop() {
    if(day==256) {
        let sum = 0;
        for(let i = 0; i<hashmap.length; i++) {
            sum += hashmap[i];
        }
        console.log(sum);
        return;
    }

    let numZeros = hashmap[0];
    let numOnes = hashmap[1];
    let numTwos = hashmap[2];
    let numThrees = hashmap[3];
    let numFours = hashmap[4];
    let numFives = hashmap[5];
    let numSixes = hashmap[6];
    let numSevens = hashmap[7];
    let numEights = hashmap[8];

    hashmap[8] = numZeros;
    hashmap[7] = numEights;
    hashmap[6] = numSevens + numZeros;
    hashmap[5] = numSixes;
    hashmap[4] = numFives;
    hashmap[3] = numFours;
    hashmap[2] = numThrees;
    hashmap[1] = numTwos;
    hashmap[0] = numOnes;

    day++;
    setTimeout(runLoop,0);
}
runLoop();
