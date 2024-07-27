//! reduce 

const myNums = [1,2,3];

// const myTotal = myNums.reduce( (acc,currVal) =>{
//     console.log(`acc: ${acc} and currVal: ${currVal}`);
//     return acc + currVal;
// },0)

//! OR 
// const myTotal = myNums.reduce((acc, currVal)=>(acc + currVal),0);
// console.log(myTotal);



//! Real world Example :-

const shoppingCart = [

    {
        course : 'Full Stack Development',
        price : 2999,
    },

    {
        course : 'Ethical Hacking',
        price : 10000,
    },

    {
        course : 'Data Science',
        price : 12999,
    }
]

const priceToPay = shoppingCart.reduce((acc ,item) => (acc + item.price),0);
console.log(`PriceTOPay : Rs ${priceToPay}`);
