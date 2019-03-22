function rangebetween(x,y)
{
    if(x>y) {
        const a=new Array(x - y + 1);
        for(let i = 0; i<a.length; i++, a--){
            result[i] = x;
        }
        return a;
    }
else
{
    const b = new Array(y-x+1);
    for(let j = 0; j<b.length; j++, x++)
    {
        b[j] = x;
    }
    return b;
}
}
console.log(rangebetween(1,5));