import path from "path";
import { fileURLToPath } from "url";
import express from "express";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static("public")); 

const PORT = process.env.PORT || 3000;


app.set("view engine", "ejs"); // Set EJS as the templating engine
app.set("views", __dirname + "/views"); // Store templates in "views" folder

app.use((request,response,next) =>{ 

    console.log(request.query.username); 
    next();
})


app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "home.html")); // Correct way to send file 
  
}); 
app.get("/home", (request, response) => {
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "home.html")); // Correct way to send file 
  
});
app.get("/loginregistration", (request, response) =>{ 
    const {username, password} = request.query; 
   if(username === null || password === null){ 
    console.log("please enter username password");
   } 
   else{ 
        console.log(request.query);
   }
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "loginregistration.html"));
}); 
app.get("/about", (request, response) =>{ 
  
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "about.html"));
}); 
app.get("/listings", (request, response) =>{ 
  
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "listings.html"));
}); 
app.get("/products", (request, response) =>{ 
  
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "products.html"));
});
app.get("/loginregistrationreg", (request, response) =>{ 
  
    response.sendFile(path.join(__dirname.slice(0,-4), "public", "loginregistration reg.html"));
});

app.listen(PORT, () => { 
    //allow post processing 
    console.log(`Running on Port ${PORT}`);
} ) 