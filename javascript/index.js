

// const d = new Promise(function(resolve){
//     resolve("Sarfraz")
// })

// function callback(data){
//     console.log(data)
// }

// d.then(callback)





// const fs = require('fs')

// function SarfrazReadFile() {
//     console.log("inside sarfrazreadfile")
//     return new Promise(function (resolve) {
//         console.log("inside promise")
//         fs.readFile('a.txt', 'utf-8', function (err, data) {
//             console.log("before resolve")
//             resolve(data)
//         })
//     })
// }

// function onDone(data) {
//     console.log(data)
// }

// const a = SarfrazReadFile();
// a.then(onDone)



// ///////////////async await

function sarfrazreadfile(){
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve("Hey Sarfraz you gonna get 1 cr job soon")
        },1000)
    })
}

async function main() {
    console.log("df")
    let value = await sarfrazreadfile()
    console.log(value)
}

main()