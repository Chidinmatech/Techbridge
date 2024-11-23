const travellers = [
{
    "name": "Jennifer",
    "image": "https://usa.bootcampcdn.com/wp-content/uploads/sites/108/2021/03/CDG_blog_post_image_01.jpg",
    "occupation": "Developer",
},
{
    "name": "Joyce",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBNhIyAhR1-4qZTOAR9MuXcPKpK-NBZSsRTg&s",
    "occupation": "Designer",
},
{
    "name": "Juliet",
    "image": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNaiUFWw4xzaxth7l5_hJ0AM6c1CUjsBbGIg&s",
    "occupation": "Nurse",
},
{
    "name": "Kamsiyochukwu",
    "image": "https://www.jaelonline.com/wp-content/uploads/2020/09/attorney.png",
    "occupation": "Lawyer",
},
{
    "name": "Joseph",
    "image": "https://media.gettyimages.com/id/154906356/photo/teenage-soccer-player-isolated.jpg?s=612x612&w=gi&k=20&c=W3BEFBdR_ISHDMCREcP8XHvqSlnNur7ieJ7qfPwgojs=",
    "occupation": "Footballer",
},
{
    "name": "Julian",
    "image": "https://t3.ftcdn.net/jpg/06/73/82/98/360_F_673829860_xn1UwNoxSdDvguJg7Cc7YeRmFOGnL8a2.jpg",
    "occupation": "Basketballer",
},
{
    "name": "Adimchinobi",
    "image": "https://media.istockphoto.com/id/1412849328/photo/portrait-of-a-young-nurse-doctor.jpg?s=612x612&w=0&k=20&c=7xyroZ4ZjhIxdzo69ouaa7wUnqt-cTg15hTxoG2nBKs=",
    "occupation": "Doctor",
},
]
let body = document.getElementById("body")

travellers.forEach(travellers =>{
    let card = document.createElement("div");
    card.className = travellers.card
    body.appendChild(card)

    let image = document.createElement("img");
    image.src = travellers.image
    card.appendChild(image)

    let name = document.createElement("h2");
    name.textContent = travellers.name
    card.appendChild(name)

    let occupation = document.createElement("p");
    occupation.textContent = travellers.occupation
    card.appendChild(occupation)
})