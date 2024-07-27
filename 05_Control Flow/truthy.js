// const userEmail = "h@abhi.ai";
// const userEmail = "";  // false
// const userEmail = " "; // true
// const userEmail = []; // true

// if (userEmail) {
//     console.log("Got User Email");
// }else{
//     console.log("Don't have user Email");
// }

//! Falsy Value
// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//! truthy Value
// "0"," ","false",[],{},function(){}


// TODO: Check whether the array is empty 

const myArr = [];
if (myArr.length === 0) {
    // console.log("Array is Empty");
}


// TODO: Check whether the object is empty 

const emptyObj = {};
if (Object.keys(emptyObj).length === 0) {
    // console.log("Object is Empty");
}