const express = require("express")
const app = express()
const port = 3000


//criaçao da rota raiz
app.get('/', (reg, res) => {
    console.log("Rota Raiz encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Rota Raiz encontrada</h2>" +
            "<br><h2> Bem vindo ao servidor Express</h2>")
})

//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})



//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})

//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})

//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})

//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})

//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})

//Criaçao rota cidade de nascimento
app.get('/planeta', (reg, res) => {
    console.log("Rota planeta encontrada!")
    res.send("<br><h1>Saudações! </h1>" + 
            "<br><h2> Planeta terra pedindo socorro!</h2>" +
            "<br><h2> aaaaaaahhhhhhhhhhhh...</h2>")
})

// iniciar o servidor web

try{
    app.listen(port, ()=> {
      console.log(`Servidor rodando em http://localhost:${port}`)  
    })
}
catch (error) {
    console.log("ocorreu um ERRO ao inicializar o servidor web")
}