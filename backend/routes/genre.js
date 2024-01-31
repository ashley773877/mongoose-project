import { Router } from "express";
import Genre from '../models/Genre.js'


const genreRouter = new Router();

genreRouter.post('/', async (req, res) => {
  try {
      const newGenre = await Genre.create(req.body);
      res.status(201).json(newGenre);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});




  export default genreRouter;