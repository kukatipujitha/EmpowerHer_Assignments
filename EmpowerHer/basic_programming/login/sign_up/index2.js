function login(userName, password) {
    let users = [
        { userName: "john", password: "Emp@123" },
        { userName: "maria", password: "Emp@123" },
        { userName: "alex", password: "Emp@123" }
    ];

    const user = users.find(u => u.userName === userName);

    if (!user) {
        return "User Not Found, Please Signup";
    }

    if (user.password === password) {
        return "Login Successful...";
    }

    return "Wrong Password...";
}
