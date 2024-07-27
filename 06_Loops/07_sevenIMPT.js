const myNumbers = [1,2,3,4,5,6,7,8,9,10];

// TODO: Add 10 in each elements of myNumbers 

// const newNums = myNumbers.map((num) => num + 10);
// console.log(newNums);


//! Method Chaining 

const newNumbers = myNumbers
                    .map((num) => num * 10)
                    .map((num) => num + 1)
                    .filter((num) => num >=41)

// console.log(newNumbers);