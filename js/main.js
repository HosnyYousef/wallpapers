
// document.querySelector('button').addEventListener('click', getDrink)

// function getDrink(){
//     let drink = (document.querySelector('input').value)

// const { clear } = require('console');
// const https = require('https')


// import express from 'express';
// {path:'./config/.env'}
require("dotenv").config();
// let myAPIkey = process.env.APIkey
console.log(process.env.APIkey);
// var myAPIkey = process.env.APIkey


// // console.log(myAPIkey)
// // console.log(process.env)

// // const randomDrinks = [
// //   1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
// //   11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
// //   21, 22, 23, 24, 25, 26, 27, 28, 29, 30,
// //   31, 32, 33, 34, 35, 37, 38, 39, 40,
// //   42, 43, 44
// // ];


// // // cycling through the wallpapers:
// // const random = (Math.floor(Math.random() * randomDrinks.length))
// // let drinkList = (randomDrinks[random]);
// // console.log(drinkList)


// fetch('https://api.unsplash.com/search/photos?query=wallpapers&client_id='+myAPIkey)
//   .then(res => res.json()) // parse response as JSON
//   .then(data => {
//         console.log(data.results)
//       // document.querySelector('h2').innerText = data.items[0].name
//       document.querySelector('img').src = data.results[0].urls.full
//       // document.querySelector('h3').innerText = data.items[0].description
//   })
//   .catch(err => {
//           console.log(`error ${err}`)
//   });


// //hide
// //9lQBKPrQjQe082N8nFYs2JVhtdx7-zFfOWlXyPWq2j8



// // cycling through the characters:

// // setInterval (function getDrink(){
// //     const random = (Math.floor(Math.random() * randomDrinks.length))
// //     let drinkList = (randomDrinks[random]);
// //     console.log(drinkList)
    
// //   fetch(`https://dragonball-api.com/api/characters/${drinkList}`)
// //   .then(res => res.json()) // parse response as JSON
// //   .then(data => {
// //         console.log(data)
// //       document.querySelector('h2').innerText = data.name
// //       document.querySelector('#dbzImg').src = data.image
// //       document.querySelector('h3').innerText = data.description
// //   })
// //   .catch(err => {
// //           console.log(`error ${err}`)
// //   });
// // }, 10000) // changes every 10 seconds
//   // https://web.dragonball-api.com/documentation




// // const randomDrinks = [
// //   1,
// //   2,
// //   3,
// //   4,
// //   5,
// //   6,
// //   7,
// //   8,
// //   9,
// //   10
// // ]

// // const random = (Math.floor(Math.random() * randomDrinks.length))
// // let drinkList = (randomDrinks[random]);
// // console.log(drinkList)

// // fetch ("https://dragonball-api.com/api/characters"+ drinkList)
// //     .then (res => res.json()) // parse response as JSON
// //     .then (data => {
// //       console.log(data)
// //       document.querySelector('h2').innerText = data.items.name
// //       document.querySelector('img').src = data.items.image
// //       document.querySelector('h3').innerText = data.items.description
// //     })
// //     .catch(err => {
// //       console.log(`error ${err}`)
// //     })

// // // Get Elements
// // setInterval (function getDrink(){
// //   const random = (Math.floor(Math.random() * randomDrinks.length))
// //   let drinkList = (randomDrinks[random]);
// //   console.log(drinkList)

// //   let apiImages = ("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=" + drinkList)
  
// //   fetch(apiImages)
// //   .then(res => res.json()) // parse response as JSON
// //   .then(data => {
// //     console.log(data.drinks)
// //     document.querySelector('h2').innerText = data.drinks[0].strDrink
// //     document.querySelector('img').src = data.drinks[0].strDrinkThumb
// //     document.querySelector('h3').innerText = data.drinks[0].strInstructions
// //   })
// //   .catch(err => {
// //       console.log(`error ${err}`)
// //   });
// // }, 2000) // change every 10 seconds
