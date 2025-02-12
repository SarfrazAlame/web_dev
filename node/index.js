const express = require("express")
const zod = require("zod")

const app = express();

const schema = zod.array(zod.number())

app.use(express.json())


app.get("/heath-checkup", function (req, res, next) {
    console.log("hi there from req1")
    next()
}, function (req, res) {
    console.log("hi there from req2")
})



app.post("/health-checkup", function (req, res) {
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);
    // const kidneyLength = response.length;

    if (!response.success) {
        return res.status(411).json({
            msg: 'input is invalid'
        })
    } else {
        res.send({ response })
    }

})

// // global catch
// app.use(function(err,req,res,next){
//     res.json({
//         msg:"Sorry something is up with our server"
//     })
// })

app.listen(3000, () => {
    console.log('listening')
})