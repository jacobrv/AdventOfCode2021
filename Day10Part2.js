let vals = document.querySelector('pre').innerText;

/*let vals = `[({(<(())[]>[[{[]{<()<>>
[(()[<>])]({[<{<<[]>>(
{([(<{}[<>[]}>{[]{[(<()>
(((({<>}<{<{<>}{[]{[]{}
[[<[([]))<([[{}[[()]]]
[{[{({}]{}}([{[{{{}}([]
{<[[]]>}<{[{[{[]{()[[[]
[<(<(<(<{}))><([]([]()
<{([([[(<>()){}]>(<<{{
<{([{{}}[<[[[<>{}]]]>[]]`;*/


let lines = vals.split('\n');

let openers = ['<','(','{','['];
let closers = ['>',')','}',']'];
let ipoints = [25137, 3, 1197, 57];
let upoints = [4, 1, 3, 2];

let illegals = [];

let uScores = [];

function testLine(line) {
    let aLine = line.split('');
    let stack = [];

    while(aLine.length > 0) {
        let next = aLine.shift();
        
        if(openers.includes(next)) {
            stack.push(next);
        }

        if(closers.includes(next)) {
            let last = stack.pop();
            if(closers.indexOf(next) != openers.indexOf(last)) {
                // console.log('ERROR: CORRUPTED LINE');
                // console.log(line);
                illegals.push(ipoints[closers.indexOf(next)]);
                return;
            }
        }
    }
    if(stack.length > 0) {
        // console.log('ERROR: INCOMPLETE LINE');
        // console.log(line);
        // console.log(stack);

        let finish = [];
        while(stack.length>0) {
            let t = stack.pop();
            finish.push(closers[openers.indexOf(t)]);
        }
        // console.log(finish);

        let lScore = 0;
        finish.forEach(f=> {
            lScore = lScore * 5;
            lScore = lScore + upoints[closers.indexOf(f)];
        });
        uScores.push(lScore);
    }
    else {
        // console.log('FINE LINE');
        // console.log(line);
    }
    
}

lines.forEach(line => {
    testLine(line);
});


uScores = uScores.sort((a,b) => {
    return parseInt(a)-parseInt(b);
});


let score = 0;
illegals.forEach(il => {
    score+=il;
});

console.log(score);
console.log(uScores[Math.floor(uScores.length/2)]);
