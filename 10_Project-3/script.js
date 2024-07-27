const clock = document.querySelector('#clock');

// const date = new Date();
// console.log(date.toLocaleTimeString());

//! for continuously displaying 
setInterval(function(){
    const date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)