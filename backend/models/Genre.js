import mongoose from 'mongoose';



const genreSchema = new mongoose.Schema({

    genre_id: {
        type: mongoose.Schema.ObjectId,
        ref: "genre",
        required: true
    },
    genre: {
        type: String,
        required: true 
    }

});



const Genre = mongoose.model('Genre', genreSchema);

export default Genre;