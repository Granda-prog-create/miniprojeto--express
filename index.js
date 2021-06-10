const express = require("express"); 
const app = express(); 

app.use(express.json()); 

let games = [

    {title: "Zé Joguinho", studio: "Rare", price: 80},
    {title: "WOW", studio: "Blizzard", price: 120},
    {title: "Valorant", studio: "Riot", price: 100},
    {title: "COD", studio: "Activision", price: 70}, 
    {title: "GTA", studio: "Rockstar", price: 150}, 
]


app.get("/", (req,res) =>{
    res.json(games); 

}); 

app.post("/novogame", (req, res)=>{
let title = req.body.title;
let studio = req.body.studio;
let price = req.body.price; 

console.log(title);
console.log(studio);
console.log(price); 

let newGame = {title, studio, price };

games.push(newGame); 


res.json("OK"); 


});

app.listen(3040,() =>{ 
console.log("Servidor funcionando!"); 

})
