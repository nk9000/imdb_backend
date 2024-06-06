const movieSchema = require("../models/movieSchema")

const movieController = async(req,res)=>{
    try {
        const { title, description, imageUrl, bigDescription, releaseDate , rating } = req.body;
    
        // Create a new movie
        const newMovie = new movieSchema({
          title,
          description,
          imageUrl,
          bigDescription,releaseDate ,
           rating
        });
    
        // Save the movie to the database
        const savedMovie = await newMovie.save();
    
        res.status(201).json(savedMovie);
      } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'Error uploading movie' });
      }
}

const getAllMovies = async (req, res) => {
  console.log("Hitted")
    try {
      const movies = await movieSchema.find();
      return res.send(movies);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Error fetching movies" });
    }
  };
  
const getMoviebyid = async(req,res)=>{
    try{
        const id = req.params.id
        const movie = await movieSchema.findById(id);
        if(!movie) return res.status(500).json({ message: "Error fetching movie" });
        return res.send(movie)
    }
    catch(error){
        console.error(error);
        return res.status(500).json({ message: "Error fetching movies" });
    }
} 
module.exports = {movieController , getAllMovies , getMoviebyid}