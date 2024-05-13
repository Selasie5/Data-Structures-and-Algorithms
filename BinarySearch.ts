function binarySearch(haystack:number[],needle:number):boolean 
{
    const lo = 0;
    const hi = haystack.length;
    
    do{
        const midPoint = Math.floor(lo + (hi-lo)/2);
        const value = haystack[midPoint];
        if(value == needle)
            {
             return true
            }
            else if(value > needle)
                {
                    hi == midPoint;                }
                else{
                    lo == midPoint +1;

                }
    }
    while (lo < hi) ;
    return false;
    }
