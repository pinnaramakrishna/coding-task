var a =  [1,2,4,6,2,6,1];
var n = a.length;
var result = '';
 function nonrepeat() {
     for(var i =0; i<n; i++) {
         var j;
         for(j = 0; j< n; j++)
         if(i!=j & a[i]==a[j])
         {
          break;
         }
         if(j == n)
         return a[i];
     }
     return result;
 }
 console.log(nonrepeat());
