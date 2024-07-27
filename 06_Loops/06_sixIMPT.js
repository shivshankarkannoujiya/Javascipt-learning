// const coding = ["js","cpp","java","ruby","python"];

// const values = coding.forEach((item) => {
//     console.log(item);
//     return item;
// })

//console.log(values); //! undefined



//! filter


const myNums = [1,2,3,4,5,6,7,8,9,10];
const newNums = myNums.filter( (num) => (num>4) )
// console.log(newNums);



//! using forEach 
const newNumsTwo = [];
myNums.forEach((num) => {
    if (num > 4) {
        newNumsTwo.push(num);
    }
})

// console.log(newNumsTwo);






const books = [

    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];


// TODO: fetch the books having genre === History
// const userBooks = books.filter((bk) => bk.genre === 'History');
// console.log(userBooks);

// TODO: fetch the books which publish >= 2000
// const userBooks = books.filter((bk)=>{return bk.publish >=2000})
// console.log(userBooks);

// TODO: fetch the books which publish >= 1995 and having genre === History
// const userBooks = books.filter((bk) => {
//     return bk.publish >=1995 && bk.genre === 'History'
// })
// console.log(userBooks);