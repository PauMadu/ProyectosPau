const express = require("express")
const router = express.Router()
const db = require('./firebase.js');

router.get("/",(req,res)=>{
    let pedidos=[]
    db.collection('Pedidos').get().then(datos =>{
        datos.forEach( doc =>{
            let pedido={}
            pedido["id"]=doc.id
            pedido["fecha"]=doc.data().fecha
            pedido["pedido"]=doc.data().pedido
            pedidos.push(pedido)
        })
        res.send({status:"OK",pedido:pedidos})
    }).catch(err =>{
        res.send({status:"error"});
    })
})

router.post("/",(req,res)=>{
    console.log(req.body)
    db.collection('Pedidos').doc().set({fecha:req.body.fecha,pedido:req.body.pedido}).then(resul=>{
        res.send({status:"OK"})
    }).catch(err =>{
        res.send({status:"error"})
    });

})//para comprobarlo en la terminal: curl -X POST -d '{"fecha":"2023-02-01","articulo":[{"ean13":"0987"},{"nombre":"barrita energetica"},{"precio":"20"},{"unidades":"2"}]}' localhost:8082/pedidos -H "Content-Type: application/json"


module.exports=router

