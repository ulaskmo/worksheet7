import express from 'express'; // Import express to create the server
import dotenv from 'dotenv'; // For loading environment variables
import { connectToDatabase } from './database'; // Import database connection function
import userRoutes from './routes/users'; // Import user routes
import gradeHistoriesRouter from './routes/gradeHistories'; // Import grade histories routes

dotenv.config(); // Load environment variables
const app = express(); // Initialize express app
const PORT = process.env.PORT || 3000; // Get the port from environment variables or default to 3000

app.use(express.json()); // Middleware to parse JSON
app.use('/api/v1/users', userRoutes); // User routes
app.use('/api/v1/gradeHistories', gradeHistoriesRouter);

// Log server start details
console.log('Starting server...');

connectToDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}).catch((error) => {
  console.error('Failed to start server due to database connection error:', error);
});
