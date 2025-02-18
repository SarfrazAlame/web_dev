const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = "123456";

const app = express();
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

const User = mongoose.model('Users', { name: String, email: String, password: String })

const user = new User({
    name: 'Sarfraz Alam',
    email: "sarfraz@gmail.com",
    password: "123456"
})

user.save()

const ALL_USERS = [
    {
        username: "sarfraz@gmail.com",
        password: "123",
        name: "Sarfraz"
    },
    {
        username: "harkirat@gmail.com",
        password: "123",
        name: "Harkirat singh"
    },
    {
        username: "Muskan@gmail.com",
        password: "123",
        name: "Muskan"
    },
]

function userExists(username, password) {
    let userExist = false;
    for (let i = 0; i < ALL_USERS.length; i++) {
        if (ALL_USERS[i].username == username && ALL_USERS[i].password == password) {
            userExist = true
        }
    }

    return userExist;
}

app.post("/signin", (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    if (!userExists(username, password)) {
        return res.status(403).json({
            message: "User doesn't exists"
        })
    }

    var token = jwt.sign({ username: username }, jwtPassword);

    return res.json({
        token
    })

})

app.get("/users", (req, res) => {
    const token = req.headers.authorization;

    try {
        const decode = jwt.verify(token, jwtPassword)
        const username = decode.username;
        return res.json({
            users: ALL_USERS.filter((value) => {
                if (value.username == username)
                    return false;
                else {
                    return true;
                }
            })
        })
    } catch (error) {
        return res.status(403).json({
            message: "Invalid token"
        })
    }
})

app.listen(8080, () => {
    console.log("server is running at 8080")
})