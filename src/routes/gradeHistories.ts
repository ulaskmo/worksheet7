import express from 'express';
import { getGradeHistories } from '../controllers/gradeHistories';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const filter = req.query.filter as string;
    const sortBy = req.query.sort as string;

    const gradeHistories = await getGradeHistories(filter, sortBy);
    res.status(200).json(gradeHistories);
  } catch (error) {
    console.error('Error fetching grade histories:', error);
    res.status(500).json({ error: 'An error occurred while fetching grade histories.' });
  }
});

export default router;
