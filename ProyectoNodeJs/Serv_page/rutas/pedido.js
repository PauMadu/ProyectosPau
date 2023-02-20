const express = require("express")
const router = express.Router()
const axios = require("axios")

function fechaActual(){
    let fecha=new Date()
    numDias=fecha.getDate()
    meses=fecha.getMonth()
    anyos=fecha.getFullYear()
    if (numDias < 10)
        numDias="0"+numDias
    return (anyos+"-"+meses+"-"+numDias)
}

router.get("/",(req,res)=>{
    const url = "http://localhost:8082/articulos"
    axios.get(url).then(response =>{
        console.log(response.data)
        res.render("pedido",{titulo:"Pedido",articulos:response.data.articulos})

    }).catch(err =>{
        res.send(err)
    })
})

router.post("/",(req,res)=>{
    //Pasar los inputs del body para q Axios los meta en la BD.
    const fecha = fechaActual()
    const pedido = []
    for(let i=0; i<req.body.articulos.length;i++){
        if(req.body.articulos[i].cantidad>0){
            pedido.push(req.body.articulos[i])
        }
    }
    //el unico axios.post que he hecho, primero se pone lo url y luego los parametros que le pasamos a la api.
    axios.post("http://localhost:8082/pedidos", {fecha,pedido}).then(response => {
        res.redirect("mispedidos")
    }).catch(err => {
        res.send(err)
    })

})

module.exports=router