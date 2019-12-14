const express = require("express");

const app = express();

const PORT = 8080;


app.use(express.urlencoded({extended:true}));
app.use(express.json());


const reservationData = [{

    customerName: "John Smith",
    customerEmail: "johnsmith@gmail.com",
    customerUserName: "johnsmith",
    phoneNumber: "000-000-0000",
}];

const waitingListData = [{

    customerName: "John Smith",
    customerEmail: "johnsmith@gmail.com",
    customerUserName: "johnsmith",
    phoneNumber: "000-000-0000",
}];

app.get("/reservation", function(req, res){
    return res.json(reservationData);
});

app.get("/waitlist", function(req, res){
    return res.json(waitingListData);
});




app.listen(PORT, function(){
    console.log("App listening on PORT: " + PORT)
});


