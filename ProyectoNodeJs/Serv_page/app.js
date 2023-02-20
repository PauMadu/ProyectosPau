const express = require("express")
const app = express()
const hbs = require("hbs")
const bodyParser = require("body-parser")

app.set("view engine", "hbs") //importante para renderizar las plantillas
app.set("views",__dirname+"/views") // siempre en la carpeta views
hbs.registerPartials(__dirname+"/views/partials",function (err){}) //Si tenemos parciales los dirijimos ahi siempre

app.use(bodyParser.urlencoded({extended: true}))//poner antes de cargar las rutas
app.use(express.static('public'));
app.use('/articulos',require('./rutas/articulos.js'));
app.use('/fichaArticulo',require('./rutas/fichaArticulo.js'));
app.use('/mispedidos',require('./rutas/mispedidos.js'));
app.use('/pedido',require('./rutas/pedido.js'));


app.listen(8081,()=>{
    console.log("Arrancado")
})