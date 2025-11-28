function displayMessage(name){
    console.log(`hello, ${name}!`);
}
function getUserInput(callback){
    setTimeout(()=>{
        const username="Alice";
        callback(username);

    },1000);
}
getUserInput(displayMessage);