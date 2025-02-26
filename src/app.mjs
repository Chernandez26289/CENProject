import express from "express"; 

const app = express(); 

const PORT = process.env.PORT || 3000;

app.use(express.static('.'));


app.get("/", (request,response) =>{ 
    response.sendFile("../home.html");
});  


app.listen(PORT, () => { 
    //allow post processing 
    console.log(`Running on Port ${PORT}`);
} ) 