
function readFile() : Array<number> {
    let fs = require('fs');
    let array = fs.readFileSync('input').toString().split("\n").map(x=>+x);
    return array;
}

function main() {
    let nums = readFile();
    console.log(`First puzzle: ${nums}`);
}

main();