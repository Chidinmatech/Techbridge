// let Firstname;
// setTimeout(() => {
//     Firstname = "Jennifer"
// }, 5000);

// setInterval(() => {
//     console.log(Firstname);
// },1000);


// let p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Jennifer")
//     }, 10000);
// })
// // p.then(value => name = value).catch(err => console.log(err)
// // )
// testFunction = async () => {
//     name = await p
//     console.log(name);
// }
// testFunction()
page = document.getElementsByClassName("body")

newName = new Promise ((resolve,reject) =>{
    setTimeout(() => {
        resolve ("Jennifer")
    }, 5000);
})
const greeting = async () =>{
    page[0].textcontent = "......Loading"
    page[0].style = "text-align:centre"
    name = await newName
    page[0].textcontent = "Welcome"+name
}

greeting()