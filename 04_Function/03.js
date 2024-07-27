function calculateCartPrice(val1, val2 , ...num1){
    return num1;
}

// Calling function 
// console.log(calculateCartPrice(200,400,700,1000));


//! Function and Object

const user = {
    username : "Sam",
    age : 30,
}

function handleObject(anyObject){
    console.log(`Username is ${anyObject.username} and age is ${anyObject.age}`);
}

// Calling function 
// handleObject(user);
handleObject({
    username:'Rock',
    age : 60,
})




//! Function and Array 

const myNewArray = [200,300,100,600];

function returnSecondValue(getArray){
    return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200,300,100,600]));


