var a=[-3,8,7,6,5,-4,3,2,1];
var b=[];
var min=a[0];
var pos;
var max=a[0];
for (i=0; i<a.length; i++)
{
        if (max<a[i]) max=a[i];
}

for (var i=0;i<a.length;i++)
{
        for (var j=0;j<a.length;j++)
        {
                if (a[j]!="x")
                {
                        if (min>a[j]) 
                        {
                                min=a[j];
                                pos=j;
                        }
                }
        }
        b[i]=min;
        a[pos]="x";
        min=max;
}
console.log(b);