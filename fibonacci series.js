var fibonacci_Sequence = function(n) {
    if (n === 0)

        return [0];
    if (n === 1)
        return [0, 1];
    var x = fibonacci_Sequence(n-1);

    x . push(x[x.length - 1] + x[x.length - 2]);
    return x
}
console.log(fibonacci_Sequence(9));