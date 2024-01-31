import mongoose from 'mongoose';

const directorSchema = new mongoose.Schema({

  director_id: {
      type: mongoose.Schema.ObjectId,
      ref: "director",
      required: true
  },
  name: {
      type: String,
      required: true 
  }

});

const Director = mongoose.model('Director', directorSchema);

export default Director;