import mongoose from 'mongoose';


const movieSchema = new mongoose.Schema({
    title: {  
        type: String, 
       required: true
    },
    release: {
        type: Date,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    director: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Director',
        required: true
        
    },
    genres: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Genre'

    },

});

movieSchema.index({title: 1}) // this is for creating an index 
//which is a folder that will only show you the titles
movieSchema.index({release: 1})
movieSchema.index({genre: 1})

//const Movie = mongoose.model('Movie', movieSchema);

export default mongoose.model('movie', movieSchema);