function linearSearch(haystack:number[], needle:number):boolean {
    for(let i=0; i< haystack.length; ++i)
        {
            if(haystack[i]== needle)
                {
                    return true
                }
        }
    return false
}
/*This program will have a time complexity of O(N)*/