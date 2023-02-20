const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/",(req,res)=>{ //Si tiene id que renderice la pagina con los datos rellanados(pero editables), sino los datos vacios.
    let articulo={}
    if(req.query.id){
        articulo = req.session.vector.find(item=>{
            return item.id==req.query.id
        })
    }
    else{

    }
    res.render("fichaArticulo",{articulo})
})
router.post("/",(req,res)=>{ //Aqui un axios Post y axios Put dependiendo si es el boton guardar o añadir.
    ean13 = req.body.ean13;
    nombre = req.body.nombre;
    precio = req.body.precio;

    axios.post("http://localhost:8082/articulos", {ean13,nombre,precio}).then(response => {
        res.redirect("articulos")
    }).catch(err => {
        res.send(err)
    })
    axios.put("http://localhost:8082/articulos", {ean13,nombre,precio}).then(response => {
        res.redirect("articulos")
    }).catch(err => {
        res.send(err)
    })
    res.redirect("lista")
})


module.exports=router