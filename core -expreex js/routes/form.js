const express = require("express");
const path = require("path");


const router = express.Router();

 const filepath = (path.join(process.cwd() , "view" , "form.html"))


router.get("/", (req, res ) =>{
     res.sendFile(filepath);
})
 router.post("/submit",(req, res )=>{
    res.send(`<h1> ${req.body.name.toUpperCase()  } ${req.body.lastname.toUpperCase()  }</h1>`)
 })

module.exports = router;