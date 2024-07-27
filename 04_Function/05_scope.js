function one(){
    const username = `Abhishek`;

    function two(){
        const website = `youtube`;
        console.log(username);
    }

    // console.log(website);
     //!ReferenceError: website is not defined

     // Calling function 
    // two();
}

// Calling function 
// one();



if (true) {
    const username = 'Abhishek';
    if (true) {
        const website = ' Youtube';
        // console.log(username + website);
    }
    // console.log(website);
    //! ReferenceError: website is not defined
}

// console.log(username);
//! ReferenceError: username is not defined



// ++++++++++++++++++++++++++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++


// console.log(addOne(5))

function addOne(num){
    return num + 1;
}

// console.log(addOne(5));





// console.log(addTwo(5));
//! ReferenceError: Cannot access 'addTwo' before initialization

const addTwo = function(num){
    return num + 2;
}

// console.log(addTwo(5));