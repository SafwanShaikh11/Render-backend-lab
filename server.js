const express = require("express")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("."))


app.get("/python", async (req,res) => {
    const response = await fetch("https://python-backend-handshake.onrender.com/");
    const data = await response.json();

    res.json(data);
})

  const PORT = process.env.PORT || 3000
    app.listen(PORT, '0.0.0.0', () => {
        console.log('Server running on ${PORT}');
});


app.get("/", (req,res) =>{
    res.json({
        message:"Welcome to API testing"
    });
});

app.get("/name", (req,res) => {
    res.json({
        message:"Myself" 
    })
})

app.get("/app",(req,res) => {
    res.json({
        app:"application",
        language:"JS",
        stats:"running"
    });
});


app.listen(PORT, () => {
    console.log("Hello World from PORT 3000 and JS Server ")

})