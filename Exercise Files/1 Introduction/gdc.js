const gdc = (a, b) => {
    while (b != 0) {
        let remainder = a % b;
        if (remainder == 0) {
            return b;
        }
        else {
            a = b;
            b = remainder;
        }
    }
}

console.log(gdc(60, 96));
console.log(gdc(20, 8));