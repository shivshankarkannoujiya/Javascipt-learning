
//TODO: Promise Creation 
const promiseOne = new Promise(function(resolve,reject){

    // Do an Async Task 
    // DB calls , cryptography, network

    setTimeout(function(){
        console.log('Async Task is Completed...');
        resolve();
    },1000)

})


//TODO: Consuming Promise
// resolve directly connected with the {.then}
// .then : Inside this sabhi value return hoti hai 
promiseOne.then(function(){
    console.log('Proomise Consumed');
})



// TODO: We don't need to store promise in Variable
new Promise(function(resolve,reject){

    setTimeout(function(){
        console.log("Async Task - 2");
        resolve();
    },1000)

}).then(function(){
    console.log("Async Task - 2 resolved ");
})



//! Third Promise
// TODO: Passisng data into resolve()

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Abhi", email:"abhi@gmail.com"})
    },1000)
})


//! As we know resolve() => direct connection with => .then()
// resolve(parameter) : parameter  : during consumption : yaha pr mil jata hai
promiseThree.then(function(user){
    console.log(user);
})



// TODO: resolve() & reject() Error handling & chaining
const promiseFour = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = true;
        if (!error) {
            resolve({username : 'Abhi', password : "123abc"});
        }else{
            reject(`ERROR : Something went wrong`);
        }

    },1000)
})

promiseFour
.then((user) => {
    console.log(user);
    return user.username
})
.then((username)=>{ // Handling upar se jo data aa rha hai 
    console.log(username);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log(`The Promise either resoled or rejected...`))



// TODO: Consume the Promise using {async await} 
const promiseFive = new Promise(function(resolve,reject){

    setTimeout(function(){

        let error = true;
        if (!error) {
            resolve({username : 'Javascript', password : "123"});
        }else{
            reject(`ERROR : JS went wrong`);
        }

    },1000)
})


//! Ye gracefully Error handle nhi Krete hai 
//! Hnadle ke liye : wrap into {try catch block } 
async function consumePromiseFive(){

    try {
        const response =  await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

// consumePromiseFive()



// ++++++++++++++++++++++++++ Fetching data from ApI ++++++++++++++++++++++

// TODO: Fetching data from ApI
async function getAllUsers(){

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(`Error : ${error}`);
    }

}

// getAllUsers();


// TODO:  Fetching data from ApI using .then() .catch()
fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json();
})
.then((data)=>{ // Handling data comming from : response.json() 
    console.log(data);
})
.catch((error)=>console.log(error))