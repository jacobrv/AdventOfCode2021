let vals = document.querySelector('pre').innerText.split('\n');
let lines = [];
vals.forEach(val=>{
    if(val){
        let line = {
            digits: val.split(' | ')[0].split(' '),
            display: val.split(' | ')[1].split(' ')
        };
        lines.push(line);
    }
});

let count = 0;
lines.forEach(line => {
    let digits = line.digits;
    let one = digits.filter(dig => {return dig.length == 2})[0];
    let two = '-';
    let three = '-';
    let four = digits.filter(dig => {return dig.length == 4})[0];
    let five = '-';
    let six = '-';
    let seven = digits.filter(dig => {return dig.length == 3})[0];
    let eight = digits.filter(dig => {return dig.length == 7})[0];
    let nine = '-';
    let zero = '-';

    // unique segments = 1 4 7 8
    // six segments = 0 6 9
    // five segments = 2 3 5 

    let sixSeg = digits.filter(dig => {return dig.length == 6});
    nine = sixSeg.filter(dig => {
        return (dig.indexOf(four.charAt(0))>=0 && dig.indexOf(four.charAt(1))>=0 && dig.indexOf(four.charAt(2))>=0 && dig.indexOf(four.charAt(3))>=0)
    })[0];
    // six seg has 0 and 6
    sixSeg = sixSeg.filter(dig => {return dig != nine});
    // zero contains all of 1's segments, six doesn't
    zero = sixSeg.filter(dig => {
        return (dig.indexOf(one.charAt(0))>=0 && dig.indexOf(one.charAt(1))>=0)
    })[0];
    six = sixSeg.filter(dig => {return dig != zero})[0];


    // five seg has 2, 3, and 5
    let fiveSeg = digits.filter(dig => {return dig.length == 5});
    three = fiveSeg.filter(dig => {
        return (dig.indexOf(one.charAt(0))>=0 && dig.indexOf(one.charAt(1))>=0)
    })[0];
    // five seg has 2 and 5
    fiveSeg = fiveSeg.filter(dig => {return dig != three});
    // six has all of 5's segments plus one, two doesn't
    five = fiveSeg.filter(dig => {
        return (six.indexOf(dig.charAt(0))>=0 && six.indexOf(dig.charAt(1))>=0 && six.indexOf(dig.charAt(2))>=0 && six.indexOf(dig.charAt(3))>=0 && six.indexOf(dig.charAt(4))>=0)
    })[0];
    two = fiveSeg.filter(dig => {return dig != five})[0];

    one = one.split('').sort().join('');
    two = two.split('').sort().join('');
    three = three.split('').sort().join('');
    four = four.split('').sort().join('');
    five = five.split('').sort().join('');
    six = six.split('').sort().join('');
    seven = seven.split('').sort().join('');
    eight = eight.split('').sort().join('');
    nine = nine.split('').sort().join('');
    zero = zero.split('').sort().join('');

    let valCheck = [zero, one, two, three, four, five, six, seven, eight, nine];

    console.log(one, two, three, four, five, six, seven, eight, nine, zero);

    let display = line.display;
    let dispOut = '';
    display.forEach(disp => {
        disp = disp.split('').sort().join('');
        dispOut+=''+valCheck.indexOf(disp);
    });

    count+=parseInt(dispOut);
    
    console.log(dispOut);
});

console.log(count);
