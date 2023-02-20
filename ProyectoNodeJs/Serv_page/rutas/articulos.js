const express = require("express")
const router = express.Router()
const axios = require("axios")

router.get("/",(req,res)=>{
    const url = "http://localhost:8082/articulos"

    axios.get(url).then(response =>{
        console.log(response.data)
        res.render("articulos",{titulo:"Articulos",articulos:response.data.articulos})
    }).catch(err =>{
        res.send(err)
    })
})

module.exports=router
