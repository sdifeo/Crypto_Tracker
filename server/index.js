const express = require("express")
const fetch = require("node-fetch")
const path = require("path")
const fs = require("fs")
const PORT = 4000
const app = express()
require("dotenv").config()

const file_path = "./crypto_info.json"

app.use(express.static('../build'))

const coinInfo = []

app.get("/getAllCoins", async (req, res) => {
    const options = {
        medthod: "GET",
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            "Content-Type":"application/json"
        },
    }

    await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/map`, options)
    .then (responseData => responseData.json())
    .then (coinInfo => res.json(coinInfo["data"]))
    
    
})

app.get("/getCoinsFromFile", async (req, res) =>{

    var listOfCoins = []

    fs.readFile("./crypto_info.json", "utf-8", (err, data) => {
        if (err) throw err
        let array = JSON.parse(data)

        for (var i = 0; i< array.length; i++)
        {
            var object = array[i]
            listOfCoins.push(object)
        }
        
        res.json(listOfCoins)
        
    })
})

app.get("/", async (req, res) => {
    await fetch("https://api.coingecko.com/api/v3/coins/list")
    .then(responseData => responseData.json())
    .then(data => res.json(data))

    
})

app.post("/getCoinInfo", async (req, res) => {
    res.send(coinInfo)
})

app.get(`/getCoin/:selectedCoin`, async (req, res) => {

    const options = {
        medthod: "GET",
        headers: {
            'X-CMC_PRO_API_KEY': process.env.API_KEY,
            "Content-Type":"application/json",
            "Access-Control-Allow-Origin": "*"
        },
    }

    await fetch(`https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?id=` +req.params.selectedCoin, options)
    .then (responseData => responseData.json())
    .then (data => res.json(data))
    
})

app.listen(PORT, () =>{
    console.log(`server is live on port: ${PORT}`)
    
})
