# Arr.find()

- Used to Search an Array for an Specific Element 
- Returns : Value of first element in the Array that satisfy provided testing function 
- if no element satisfy the testing function return : `undefined`

## Syntax
```javascript
    arr.find(callback(element, index, array),thisArgs)
```

#### Callback

- A function to execute on each value in the array
- Element: Current Element being processed in the array
- Index (opyional): Index of the current element being processed in the array
- Array (opyional): Arr jiske liye `find()` call hua hai
-thisArgs (opyional): An Object to use as 'this' inside the callback function

## How it Works
- `find()` call the callback function once for each element of the Array, in ascending order
- it returns the first element for which the callback returns a truthy calue 
- if no such element is found, it returns `undefined`


# Example

#### Let's start with a simple example where `we want to find the first even number in an array.`
```javascript
const arr = [1,3,5,8,7,6];
const evenNumber = arr.find(element => element % 2 == 0)
console.log(`First Even Number is : ${evenNumber}`);
```

## Example with Objects
#### `find()` is especially useful when working with arrays of objects. Let's say we have an array of objects representing people and `we want to find a person by their name.`

```javascript

const peoples = [

    {
        name:"Alice",
        age: 30,
    },

    {
        name:"Bob",
        age: 20,
    },
    
    {
        name:"Tinku",
        age: 10,
    },
]

const person = peoples.find(p => p.name === 'Bob')
console.log(person);

```

## TODO: Handle Undefined
#### If `find()` doesn't find any element that satisfies the condition, `it returns undefined`. It's important to `handle this case to avoid errors in your code`

```javascript

const number = [1,2,4,6,9,3];
const getNumGreaterThanTen = number.find(num => num > 10)
if (getNumGreaterThanTen === undefined) {
    console.log(`No Element Found !`);
}else{
    console.log(`Ans is : ${getNumGreaterThanTen}`);
    
}

```

# Using `thisArg`
- The `thisArg` parameter can be used to specify the value of this inside the callback function. 
- This is useful if you need to access properties or methods of an object inside the callback.

```javascript
const array = [1,2,3,4];

const Obj = {

    threshold : 3,
    isGreaterThanThreshold : function(element){
        return element > this.threshold
    }
}

const found = array.find(function(element){
    return this.isGreaterThanThreshold(element)
},Obj)

console.log(found);

```

## TODO: Finding a User by Address City
```javascript
const Users = [

    {
        name : "Bob",
        age : 28,
        address : {
            city: "New York",
            street:"123 Main st",
        }
    },

    {
        name: "Charlie",
        age: 20,
        address:{
            city: 'Chicago',
            street: '789 Oak St'
        }
    },

    {
        name:"Tinku",
        age:30,
        address:{
            city: 'Los Angeles',
            street: '456 Elm St'
        }
    }
]


const user = Users.find((usr) => {
    if (usr.address.city === undefined) {
        console.log('User Not Found!');
    } else {
        return usr.address.city === 'Los Angeles';
    }
});

console.log(user);

```

## TODO: Finding a Product by Nested Category
```javascript

const Product = [

    {
        id: 1,
        name: 'Laptop',
        category: {
            main: 'Electronics',
            sub: 'Computers'
        }
    },

    {
        id: 2,
        name: 'Phone',
        category: {
            main: 'Electronics',
            sub: 'Mobile Phones'
        }
    },

    {
        id: 2,
        name: 'Shirt',
        category: {
            main: 'Apparel',
            sub: 'Men'
        }
    },

]


const productInElectronics = Product.find(product => product.category.main === 'Electronics')
console.log(productInElectronics);

```


## TODO:  Finding an Order by Nested Customer ID
- Consider an array of orders, each containing a nested customer object. You want to find an order by the customer ID.

```javascript

const Orders = [

    {
        orderId: 1001,
        customer: {
            customerId: 301,
            name: 'John'
        },
        total: 250,
    },

    {
        orderId: 1002,
        customer: {
            customerId: 302,
            name: 'Doe'
        },
        total: 300
    },

    {
        orderId: 1003,
        customer: {
            customerId: 303,
            name: 'Bob'
        },
        total: 500,
    }

]

const orderByCustomerId = Orders.find(order => order.customer.customerId === 303)
console.log(orderByCustomerId);

```

## TODO: Finding a Student by Nested Course Code
- Imagine you have an array of students, each with a nested courses array, and you want to find a student enrolled in a specific course code.


```javascript
const Students = [
    
    {
        name: 'Alice',
        age: 20,
        courses: [
            {
                code: 'CS101',
                title: 'Computer Science 101'
            },

            {
                code: 'MATH101',
                title: 'Calculas 1'
            }
        ]
    },

    {
        name: 'Bob',
        age:22,
        courses: [

            {
                code: 'ENG101',
                title: 'English Literature'
            },

            {
                code: 'CS101',
                title: 'Computer Science 101'
            }
        ]
    },

    {
        name: 'JOhn',
        age:30,
        courses: [

            {
                code: 'BIO101',
                title: 'Biology 101'
            },
            {
                code: 'CHEM101',
                title: 'Chemistry 101'
            }
        ]
    }
]

const studentIncs101 = Students.find(student => student.courses.some(course => course.code === 'CS101'))

console.log(studentIncs101);
```

## TODO: Finding a Product by Tag
- Consider an object containing an array of products, each with an array of tags. We want to find a product that has a specific tag.

```javascript
const store = {

    Product: [
        {
            id: 1,
            name: 'Laptop',
            tags: ['Electronics','Computer','Portable']
        },


        {
            id: 2,
            name: 'shirt',
            tags: ['apparel', 'clothing', 'men']
        },

        {
            id: 3,
            name: 'Phone',
            tags: ['electronics', 'mobile', 'portable']
        }
    ]

}

const productWithTag = store.Product.find(product => product.tags.includes('mobile'))
console.log(productWithTag);
```

## TODO: Finding a Student Enrolled in a Specific Course
- Imagine an object containing an array of students, each with an array of enrolled courses. We want to find a student who is enrolled in a specific course
```javascript
const School = {

    Students: [
        {
            name: 'Alice',
            courses: ['Math','Science','History']
        },

        {
            name: 'Bob',
            courses: ['English', 'Math', 'Art']
        },

        {
            name: 'Charlie',
            courses: ['Science', 'Math', 'Physical Education']
        }
    ]
}

const studentWithMath = School.Students.find(student => student.courses.includes('Math'))
console.log(studentWithMath)

```

## TODO: Finding an Employee with a Specific Skill
- Consider an object containing an array of employees, each with an array of skills. We want to find an employee who has a specific skill.

```javascript
const Company = {

    Employees: [

        {
            name: 'John',
            skills: ['JavaScript', 'React', 'Node.js']
        },

        {
            name: 'Jane',
            skills: ['Python', 'Django', 'Machine Learning']
        },
        {
            name: 'Smith',
            skills: ['Java', 'Spring', 'Hibernate']
        }
    ]
}

const employeeWithSkill = Company.Employees.find(employee => employee.skills.includes('Python'))
console.log(employeeWithSkill)

```

## TODO: Finding a Movie by Genre
- Consider an object containing an array of movies, each with an array of genres. We want to find a movie that belongs to a specific genre.

```javascript
const cinema = {
    movies: [
        {
            title: 'Inception',
            genres: ['Action', 'Sci-Fi', 'Thriller']
        },
        {
            title: 'Titanic',
            genres: ['Drama', 'Romance']
        },
        {
            title: 'The Matrix',
            genres: ['Action', 'Sci-Fi']
        }
    ]
  }

  const movieInGenres = cinema.movies.find(movie => movie.genres.includes('Drama')).title
  console.log(movieInGenres)
```