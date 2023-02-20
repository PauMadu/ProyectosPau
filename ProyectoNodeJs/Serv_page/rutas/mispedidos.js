const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/",(req,res)=>{
    const url = "http://localhost:8082/pedidos"
    axios.get(url).then(response =>{
        console.log(response.data)
        res.render("misPedidos",{titulo:"MisPedidos",pedido:response.data.pedido})

    }).catch(err =>{
        res.send(err)
    })
})


module.exports=router