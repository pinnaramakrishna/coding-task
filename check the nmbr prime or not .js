function testprime(n)
{

    if (n===1)
    {
        return false;
    }
    
     else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x === 0)
            {
                return false;
            }
        }
        return true;
    }
}

console.log(testprime(7));
console.log(testprime(8));