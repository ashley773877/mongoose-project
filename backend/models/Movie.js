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


//const Movie = mongoose.model('Movie', movieSchema);

export default mongoose.model('movie', movieSchema);