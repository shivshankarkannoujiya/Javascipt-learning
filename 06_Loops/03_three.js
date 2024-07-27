// for of 

//! for of on Array
const arr = [1,2,3,4,5];
for (const num of arr) {
    // console.log(num);
}


//! for of on String
const greetings = "Hello world!";
for(const greet of greetings){
    // console.log(`Each char is : ${greet}`);
}


//! Map 
const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");
map.set('IN',"India");

// console.log(map);

//! for of on Map
for (const key of map) {
    // console.log(key);
}

//! for of on Map
for (const [key,value]of map) {
    // console.log(key, ":-", value);
}



//! Object

const myObject = {

    'game1' : "NFS",
    'game2' : "BGMI",
}

for (const [key,value] of myObject) {
    // console.log(key, ":-", value);
}
//! TypeError: myObject is not iterable 




