const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const jwtPassword = "123456";

const app = express();
app.use(express.json())

mongoose.connect("mongodb://127.0.0.1:27017/test")

const User = mongoose.model('Users', { name: String, email: String, password: String })




app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name

    const existingUser = await User.findOne({ email: username })

    if (existingUser) {
        return res.status(400).send("Username already exists")
    }

    const user = new User({
        name: name,
        email: username,
        password: password
    })

    user.save()

    var token = jwt.sign({ username: username }, jwtPassword);

    return res.json({
        token
    })

})

app.listen(8080, () => {
    console.log("server is running at 8080")
})