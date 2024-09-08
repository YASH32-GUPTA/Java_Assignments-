let inventory = []; 
let object ;


class Item{

    constructor(id,name,qty,price)
    {
        return { id : id , name : name , qty : qty , price : price} ;
    }
    
}

function addItem(inventory , obj) {
    inventory.push(obj) ;    
}

function updateItem(inventory , id , newDetails) {
    inventory.map((data)=>{
        if(data.id == id )
        {
            data.name = newDetails.name ; 
            data.qty = newDetails.qty ; 
            data.price = newDetails.price ; 
        }
    })
}

function deleteItem(inventory , id ) {
    return inventory.filter((data)=> data.id != id) ;
}


function deleteItem(inventory , id ) {
    return inventory.filter((data)=> data.id != id) ;
}

function getItem( inventory , id )
{
    let ans ;
    inventory.map((data)=>{ if(data.id == id) ans = data  ; })  
    return ans ; 
}


function printInventory( inventory )
{
    inventory.map((data)=> console.log(data)) ;
}







// initial 
object =new Item(1,'Apple',10,0.5) ; 
addItem(inventory , object ) ;

object = new Item(2,'Banana',20,0.2) ; 
addItem(inventory , object ) ;

// Adding new item 
object = new Item(3,'Orange',15,0.7) ;
addItem(inventory , object ) ;


// Updating : 
object = new Item(2,'Banana',30,0.2) ;
updateItem(inventory,2,object) ;
console.log(inventory) ;


// Deleting : 
inventory = deleteItem(inventory,2) ;
console.log(inventory) ;


// getItem 
// console.log(getItem(inventory,1)) ;

// print : 
printInventory(inventory) ;
