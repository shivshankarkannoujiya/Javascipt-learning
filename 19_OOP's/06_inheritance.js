
class User{

    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
        
    }
}


class Teacher extends User{

    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by: ${this.username}`)
        
    }
}


const tea = new Teacher("tea", "tea@teacher.com", "123")
tea.addCourse()
tea.logMe()
console.log(tea instanceof Teacher);


const masalChai = new User("masalaChai")
masalChai.logMe()
console.log(masalChai instanceof User);
console.log(tea instanceof User);


// console.log(tea === masalChai) // false
