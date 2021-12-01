

function solve1(numbers : Array<number>) : number {
    let count = 0;
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > numbers[i-1]) {
            count++;
        }
    }

    return count;
}

function solve2(numbers : Array<number>) : number {
    let count = 0;
    let priorSum
    for (let i = 0; i < numbers.length-2; i++) {
        let sum = numbers[i] + numbers[i+1] + numbers[i+2]
        if (sum > priorSum) {
            count++
        }
        priorSum = sum
    }

    return count;
}

function readFile() : Array<number> {
    let fs = require('fs');
    let array = fs.readFileSync('input').toString().split("\n").map(x=>+x);
    return array;
}

function main() {
    let nums = readFile();
    console.log(`First: ${solve1(nums)}`);
    console.log(`Second: ${solve2(nums)}`);
}

main();