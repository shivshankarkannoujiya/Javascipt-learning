// for in 

const myObject = {
    js : "Javascript",
    cpp : "C++",
    py : "python",
    rb : "ruby",
}

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);
}


const programming = ["Js","Python","Java","Ruby","Cpp"]
for (const key in programming) {
    // console.log(key);
    // console.log(programming[key]);
}


//! Map

const map = new Map();
map.set('IN',"India");
map.set('USA',"United State of America");
map.set('Fr',"France");

//! </ Not Iterable using for-in loop >
// for (const key in map) {
//     console.log(key);
// }
