<<<<<<< HEAD
const express = require("express");

const app = express();

const PORT = 8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());



app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});
=======
//hello
>>>>>>> 3fc0266c2a30801857c5b834133b2a1d3b9c72b1
