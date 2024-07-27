const user = {

    username : 'Abishek',
    price : 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to website`);
        console.log(this);
    },

}


// user.welcomeMessage()
// user.username = 'Ram';
// user.welcomeMessage();


// console.log(this);




// function something(){
//     console.log(this);
//     let username = "Abhishek";
//     console.log(this.username);
// }

// something()
// undefined

 

const chai = () => {
    // console.log(this);
    let username = 'Abhishek';
    console.log(this.username);
}

// chai()


// const addTwo = (num1, num2) => {
//     return num1 + num2;
// }

// console.log(addTwo(4,5));


// const addTwo = (num1,num2) => num1 + num2;
// console.log(addTwo(5,6));


// const addTwo = (num1,num2) => (num1 + num2);
// console.log(addTwo(5,6));


// const returnObject = () => {username:"Abhishek"}
// console.log(returnObject());


// const returnObject = () => ({username:"Abhishek"})
// console.log(returnObject());
