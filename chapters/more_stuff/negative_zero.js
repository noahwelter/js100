function negativeZero(zero) {
    return 1 / zero === -Infinity
}

console.log(negativeZero(-0));
console.log(negativeZero(0));
console.log(negativeZero(-1));