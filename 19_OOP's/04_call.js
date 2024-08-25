function setUsername(username){
    // Complex DB Call
    this.username = username
    console.log(`Called`);
    
}


// function createUser(username, email, password){
//     setUsername(username)
//     this.email = email
//     this.password = password
// }


function createUser(username, email, password){
    setUsername.call(this, username)
    this.email = email
    this.password = password
}

/**
 * ?Output:-
 *  
  createUser {
  username: 'user',
  email: 'user@gmail.com',
  password: '123'
}
 * 
 */

const user = new createUser("user", "user@gmail.com", "123")
console.log(user)

/**
 * !Output: { email: 'user@gmail.com', password: '123' }
 * Username set nhi ho rha hai
 * setUsername() : call ho rha hai but after executing call stack se remove hoga  then username bhi remove ho jayega 
 * 
 * !setUsername.call(username)
 * Again same condition will occure
 * 
 * ! setUsername.call(this, username)
 * Hum apna this bhej denge 
 * Jisse ki function flush hoga but value nhi jayega 
 */

// Call: Current Execution context kisi aur function ko pass kr deta hai