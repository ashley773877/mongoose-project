import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema({
    title: {  
        type: String, 
       required: true
    },
    releaseDate: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },

});

movieSchema.index({title: 1}) // this is for creating an index 
//which is a folder that will only show you the titles
movieSchema.index({release: 1})
movieSchema.index({genre: 1})

//const Movie = mongoose.model('Movie', movieSchema);

export default mongoose.model('movie', movieSchema);