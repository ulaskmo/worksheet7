import { gradeHistoriesCollection } from '../database'; // Import the database connection to access the collection
import { GradeHistory } from '../models/gradeHistories';
// Function to fetch grade histories from the collection
export const getGradeHistories = async () => {
  try {
    // Fetch grade histories from the 'grades' collection
    const gradeHistories = await gradeHistoriesCollection.find().toArray();

    // Log the result to check if the query is returning any data
    console.log('Grade Histories from Database:', gradeHistories);

    return gradeHistories;
  } catch (error) {
    console.error('Error in getGradeHistories:', error);
    throw new Error('Failed to fetch grade histories.');
  }
};
