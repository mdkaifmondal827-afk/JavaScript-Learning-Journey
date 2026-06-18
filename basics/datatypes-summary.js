//  Primitive 

//  7 types : String , Number , Boolean , null , undefined , symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false 
const outsideTemp = null
let userEmail;

 const id = Symbol('123')
 const anotherId = Symbol('123')

 console.log(id === anotherId);

 const bigNumber = 34567892020020454n
 


//  Reference ( Non primitve)

// Array ,objects , Functions 


const heros = ["shaktiman ", "naagaraj","doga"];
let myObj = {
    name : "kaif",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
    
}

console.log(typeof heros);




// stack (primitive) , Heap (non - primitive)

let myYoutubename = "Kaifmondaldotcom"

let anothername = myYoutubename
anothername = "kaifcode"

console.log(myYoutubename);

console.log(anothername);

