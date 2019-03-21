var a = [1,2,4,7,2,4];
var b =[] ;

for(var i = 0; i<a.length; i++){
    if(b.indexOf(a[i]) === -1){
        b.push(a[i]);
    }
}
console.log(b);