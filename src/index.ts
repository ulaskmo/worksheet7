import express from 'express';
import dotenv from 'dotenv';
import { connectToDatabase } from './database';
import userRoutes from './routes/users';
import gradeHistoriesRouter from './routes/gradeHistories';

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/v1/users', userRoutes);
app.use('/api/v1/gradeHistories', gradeHistoriesRouter);

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server due to database connection error:', error);
});

