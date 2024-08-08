// TODO: Finding a User by Address City
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
// console.log(user);



// TODO: Finding a Product by Nested Category
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
// console.log(productInElectronics);


// TODO:  Finding an Order by Nested Customer ID
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
// console.log(orderByCustomerId);


// TODO: Finding a Student by Nested Course Code
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

// console.log(studentIncs101);



// ++++++++++++++++++++++++++++++++++++++++++ Some More Complex ++++++++++++++++++++++++++++++++

// TODO: Finding a Product by Tag
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
// console.log(productWithTag);




// TODO:  Finding a Student Enrolled in a Specific Course
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
// console.log(studentWithMath)


// TODO: Finding an Employee with a Specific Skill
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
// console.log(employeeWithSkill)

// TODO: 

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
  console.log(movieInGenres);
  
