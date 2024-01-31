import './localEnv.js';
import { conn } from './db/conn.js';conn();
import express from 'express';
import morgan from 'morgan'
import cors from 'cors';
import moviesRoutes from './routes/movies.js'

import mongoose from 'mongoose'

const app = express ();
const PORT = process.env.PORT || 5000;



app.use(morgan ('dev'));
app.use(express.json());
app.use(cors());

app.use('/api/movies', moviesRoutes); //  CHECK THAT IT SHOULD BE S OR NOT


app.get('/', (req, res) => {
    res.send('welcome to API');
})






app.listen(PORT, () =>{
    console.log(`server running on port: ${PORT}`);
})