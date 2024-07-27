 //! Singleton
// const tinderUser = new Object();

//! Non - Singleton
const tinderUser = {};
tinderUser.id = "123abc";
tinderUser.name = "Abhay",
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser  = {
    email : "some@gmail.com",
    fullname : {
        userFullname : {
            firstname : "Abhishek",
            lastname : "Kannoujiya",
        }
    }
}

// console.log(regularUser.fullname?.userFullname.firstname);


const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}
// const obj3 = Object.assign(obj1,obj2);
// console.log(obj3 == obj1);

// const obj4 = Object.assign({},obj1,obj2,obj3);
// console.log(obj4);


const user = [

    {
        id:1,
        email:"a@gmail.com",
    },

    {
        id:2,
        email:"b@gmail.com",
    },

    {
        id:3,
        email:"c@gmail.com",
    },
]

// console.log(user[0].email);



// const tinderUser = {};
// tinderUser.id = "123abc";
// tinderUser.name = "Abhay",
// tinderUser.isLoggedIn = false;
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


//! de-structuring

const course = {
    coursename : "Ethical Hacking",
    price : 999,
    courseInstructor : "Abhishek",
}

// console.log(course.courseInstructor);

// const {courseInstructor} = course;
// console.log(courseInstructor);

// const {courseInstructor : instructor} = course;
// console.log(instructor);



