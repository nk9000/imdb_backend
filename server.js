const express = require("express");
const app = express();
const dotenv = require("dotenv")
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');
const { getAllMovies, movieController, getMoviebyid } = require("./controllers/movieController");

dotenv.config()
app.use(cors());
app.use(bodyParser.json())
const PORT = process.env.PORT || 5000
// mongo url is here so you can test on local , otherwise it would be in .env
const MONGO_URL = "mongodb+srv://nk1121339:Nilesh123@cluster0.ihjwq0j.mongodb.net/"
const dbConnect = async()=>{
    try {
        await mongoose.connect(MONGO_URL)
        console.log("Mongodb is connected")
    } catch (error) {
        console.log('Some error in Connecting to server , Error in server.js file')
    }
}
dbConnect()
app.get('/' , getAllMovies)
app.post('/upload' , movieController)
app.get('/:id' , getMoviebyid)
app.listen(PORT , ()=>{
    console.log(`Server is Running on Port ${PORT}`);
})