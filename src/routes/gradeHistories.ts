import express, { Request, Response } from 'express';
import { getGradeHistories } from '../controllers/gradeHistories'; // Import controller

const router = express.Router();

// Get all grade histories
router.get('/', async (req: Request, res: Response) => {
  try {
    const gradeHistories = await getGradeHistories();
    if (!gradeHistories || gradeHistories.length === 0) {
      return res.status(404).json({ message: 'No grade histories found' });
    }
    res.status(200).json(gradeHistories);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    console.error(`Error retrieving grade histories: ${errorMessage}`);
    res.status(500).send('An error occurred while fetching grade histories.');
  }
});

export default router;
