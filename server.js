const express = require("express")
const cors = require("cors")

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("."))


app.get("/python", async (req,res) => {
    const response = await fetch("http://localhost:5000/");
    const data = await response.json();

    res.json(data);
})

  const PORT = process.env.PORT || 3000
    app.listen(PORT, '0.0.0.0', () => {
        console.log('Server running on ${PORT}');
});

app.listen(PORT, () => {
    console.log("Hello World from PORT 3000 and JS Server ")

})