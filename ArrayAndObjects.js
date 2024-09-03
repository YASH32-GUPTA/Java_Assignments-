let numbers = [ 5 , 3 , 8 , 1 , 2] ; 

function addNumber( arr , val )
{
    arr.push(val) ;
}

function removeNumber( arr , val )
{
    let modified = [] ,  idx ; 
    
    idx = arr.indexOf(val) ; 

    for( let i  = 0 ; i<arr.length ; i++ )
    {
        if( i != idx ){
            modified.push(arr[i]) ;
        }
    }     

    return modified ; 
}

function sortArr( arr )
{
    return arr.sort() ; 
}

function sumOfNumber(arr)
{
    return arr.reduce(( acc , val ) => acc + val ) ;
}

function avgNumber( arr )
{
    return (arr.reduce(( acc , val ) => acc + val ) / arr.length ) ;
}


//  Testing : 
addNumber(numbers ,  4 ) ; 
console.log("After Add Number" , numbers) ;
numbers = removeNumber(numbers ,  3 ) ; 
console.log("After remove" , numbers) ;
console.log("After sort" , sortArr(numbers)) ;
console.log("The sum of the number" , sumOfNumber(numbers)) ;
console.log("The avg of the number",avgNumber(numbers)) ;





