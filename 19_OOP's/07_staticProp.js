class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME: ${this.username}`)
    }

    //TODO: Jaise hi User create ho usko unique _id mil jaye like (mongoDB)
    // id banane ka access sabhi instance ko nhi dena chahte use : (static)
    // Koi class(child) extend krega then wo bhi nhi Access kr payega
    static createId(){
        return `123`
    }

}

// const userOne = new User("userOne")
// console.log(userOne.createId())


class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone.com")
iphone.logMe()
iphone.createId()
