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

let illegals = [];


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
                console.log('ERROR: CORRUPTED LINE');
                console.log(line);
                illegals.push(ipoints[closers.indexOf(next)]);
                return;
            }
        }
    }
    if(stack.length > 0) {
        console.log('ERROR: INCOMPLETE LINE');
        console.log(line);
    }
    else {
        console.log('FINE LINE');
        console.log(line);
    }
    
}








console.log(lines);


lines.forEach(line => {
    testLine(line);
});


let score = 0;
illegals.forEach(il => {
    score+=il;
});

console.log(score);
