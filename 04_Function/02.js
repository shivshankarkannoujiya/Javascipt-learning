function loginUserMessage(username){

    if (!username) {
        console.log(`Please Enter an username`);
        return;
    }

    return `${username} just logged in`
}

// console.log(loginUserMessage('Abhi'));
// console.log(loginUserMessage());


//! Providing default argument
function loginUserMessage(username = `Rock`){

    if (!username) {
        console.log(`Please Enter an username`);
        return;
    }

    return `${username} just logged in`
} 

console.log(loginUserMessage());
console.log(loginUserMessage(`Abhi`));