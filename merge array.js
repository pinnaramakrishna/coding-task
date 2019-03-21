var a =[1,2,3,5,8];
var b =[4,6,7,9];
function mergedArrays(a,b){
    for(var x = 0; x<b.length; x++){
        a.push(b[x]);
    }
    for(var i= 0; i<a.length; i++){
        for(var j = i+1; j<a.length; j++){
            if(a[i]>a[j]){
                temp =a[i];
                a[i] = a[j];
                a[j] = temp;
            }
        }
    }
    return a;
}
console.log(mergedArrays(a,b));
