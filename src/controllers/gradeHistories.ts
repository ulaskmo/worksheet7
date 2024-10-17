import { gradeHistoriesCollection } from '../database';
import { GradeHistory } from '../models/gradeHistories';

export const getGradeHistories = async (filter?: any, sortBy?: any, page?: number, pageSize?: number) => {
  try {
    const query = filter ? JSON.parse(filter) : {};
    const sortOrder = sortBy ? JSON.parse(sortBy) : { class_id: 1 };

    console.log("Filter:", query);
    console.log("Sort Order:", sortOrder);
    console.log("Page:", page);
    console.log("PageSize:", pageSize);

    let gradeHistories;

    if (pageSize === 0) {
      gradeHistories = await gradeHistoriesCollection
        .find(query)
        .sort(sortOrder)
        .toArray();
    } else {
      const pageNum = page || 1;
      const size = pageSize || 10;
      const skip = (pageNum - 1) * size;

      console.log(`Skipping ${skip} records, Limiting to ${size}`);
      
      gradeHistories = await gradeHistoriesCollection
        .find(query)
        .sort(sortOrder)
        .skip(skip)
        .limit(size)
        .toArray();
    }

    return gradeHistories;
  } catch (error) {
    console.error('Error in getGradeHistories:', error);
    throw new Error('Failed to fetch grade histories.');
  }
};
