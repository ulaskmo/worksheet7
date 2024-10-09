import { gradeHistoriesCollection } from '../database';
import { GradeHistory } from '../models/gradeHistories';

export const getGradeHistories = async (): Promise<GradeHistory[]> => {
  try {
    const gradeHistories = await gradeHistoriesCollection.find().toArray();
    return gradeHistories;
  } catch (error) {
    console.error('Error fetching grade histories:', error);
    throw error;
  }
};
