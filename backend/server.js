const express = require("express");
const cors = require("cors");
const app = express();


app.use(cors());
app.use(express.json())

//middleware to route activities 
const pageRouter = require("./routes/pages");
app.use("/send", pageRouter);

const port = process.env.PORT || 5000;

app.listen(port, ()=>console.log("Listening on Port "+port))