import express from 'express';
import { getGradeHistories } from '../controllers/gradeHistories';

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const gradeHistories = await getGradeHistories();
    res.status(200).json(gradeHistories);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching grade histories.' });
  }
});

export default router;
