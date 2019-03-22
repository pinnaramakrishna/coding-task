function binToDec(bin) {
    let dec = 0;
    for (let i = 0; i < bin.length; i++) {
        if (bin[bin.length - (i + 1)] === '1') {
            dec += 2 ** i;
        }
    }
    return dec;
}
console.log(binToDec('11100'));