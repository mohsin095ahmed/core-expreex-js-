const express = require("express");
const form = require("./routes/form");
const bodyparser = require("body-parser");
const path = require("path");
const app = express(); 
app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static(path.join(process.cwd(), "public")))
app.use((req, res , next)=>{
    console.log("hhh");

    next()
});
app.use("/form" ,form );



app.listen(3000);