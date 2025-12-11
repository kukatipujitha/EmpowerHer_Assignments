function signup(userName) {
    let usernames = ["john", "maria", "alex", "sam"];
    if (usernames.includes(userName)) {
        return "User Already Registered, Please Login";
    }
    usernames.push(userName);
    return "Signup Successful, Please Login";
}
console.log(signup("maria"));   
console.log(signup("newUser")); 
