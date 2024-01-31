import mongoose from 'mongoose';

const directorSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
},

});

const Director = mongoose.model('Director', directorSchema);

export default Director;