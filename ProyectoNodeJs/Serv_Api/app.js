const express = require("express")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())//poner antes de cargar las rutas
app.use('/articulos',require('./rutas/articulos.js'));
app.use('/pedidos',require('./rutas/pedidos.js'));


app.listen(8082,()=>{
    console.log("Arrancado")
})