import {Router} from 'express';
import Movie from '../models/Movie.js'

//const moviesRouter = express.Router();
const router = new Router();


//GET all movies 
router.get('/', async (req, res) => {
    try {
      const movies = await Movie.find().populate('director').populate('genres');
      res.json(movies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  // POST a new movie
router.post('/', async (req, res) => {
  try {
    const newMovie = await Movie.create(req.body);
    res.status(201).json(newMovie);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  // GET a specific movie by ID
router.get('/:id', async (req, res) => {
    try {
      const movie = await Movie.findById(req.params.id).populate('director').populate('genres');
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// PUT update a movie by ID
router.put('/:id', async (req, res) => {
    try {
      const movie = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true });
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json(movie);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

// DELETE a movie by ID
router.delete('/:id', async (req, res) => {
    try {
      const movie = await Movie.findByIdAndDelete(req.params.id);
      if (!movie) {
        return res.status(404).json({ message: 'Movie not found' });
      }
      res.json({ message: 'Movie deleted successfully' });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  });

  //export default moviesRouter;
  export default router;