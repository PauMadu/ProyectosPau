const express = require("express")
const router = express.Router()
const db = require('./firebase.js');

router.get("/id",(req,res)=>{
    db.collection('Articulos').doc(req.query.id).get().then(resul=>{
        res.send({status:"OK"})
    }).catch(err =>{
        res.send({status:"error"})
    });
});

router.get("/",(req,res)=>{
    let articulos=[]
    db.collection('Articulos').get().then(datos =>{
        datos.forEach( doc =>{
            let articulo={}
            articulo["id"]=doc.id
            articulo["ean13"]=doc.data().ean13
            articulo["nombre"]=doc.data().nombre
            articulo["precio"]=doc.data().precio
            articulos.push(articulo)
        })
        res.send({status:"OK",articulos})
    }).catch(err =>{
        res.send({status:"error"});
    })
})

router.post("/",(req,res)=>{
    console.log(req.body)
    db.collection('Articulos').doc().set({id:req.body.id,ean13:req.body.ean13,nombre:req.body.nombre,precio:req.body.precio}).then(resul=>{
        res.send({status:"OK"})
    }).catch(err =>{
        res.send({status:"error"})
    });
})

router.put("/",(req,res)=>{
    if(req.body.id != ""){
        db.collection('Articulos').doc(req.body.id).set({id:req.body.id,ean13:req.body.ean13,nombre:req.body.nombre,precio:req.body.precio,}).then(resul=>{            res.send({status:"OK"})
        }).catch(err =>{
            res.send({status:"error"})
        });
    }
})

module.exports=router