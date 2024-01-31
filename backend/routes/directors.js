import { Router } from "express";
import Genre from '../models/Director.js'


const DirectorRouter = new Router();

DirectorRouter.post('/', async (req, res) => {
  try {
      const newDirector = await Director.create(req.body);
      res.status(201).json(newDirector);
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
});




  export default DirectorRouter;