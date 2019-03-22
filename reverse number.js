function reverse(num){
    let r = 0;
    while (num) {
        r = r*10;
        r = r+num %10;
        num = Math.floor(num/10);
    }
    return r;
}
console.log(reverse(876543));
