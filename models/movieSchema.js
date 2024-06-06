const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      },
      imageUrl: {
        type: String,
        required: true
      },
      bigDescription: {
        type: String,
        required: true
      },
      releaseDate:{
        type:String , 
        required:true
      },
      rating:{
        type:Number
      }
})

module.exports = mongoose.model('Movies' , movieSchema)