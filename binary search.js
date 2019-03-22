function binarySearch(arr,b) {
    var i = 0, j = arr.length-1, m;
    while( i < j) {
        m = Math.floor((i + j )/2);
        if( b <= arr[m]) j = m;
        else i = m + 1;
    }
    if( b === arr[i]) return i;
    else return -1;
}
var arr = [1,2,3,4,5,6,7,8,9];
console.log(binarySearch(arr,1));
console.log(binarySearch(arr,5));