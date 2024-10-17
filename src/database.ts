import { MongoClient, Db, Collection } from 'mongodb'; // MongoDB client and types for database handling
import dotenv from 'dotenv'; // For loading environment variables
import User from './models/user'; // Import user model
import { GradeHistory } from './models/gradeHistories'; // Import grade history model

dotenv.config(); // Load environment variables

const connectionString: string = process.env.DB_CONN_STRING || ''; // Connection string to MongoDB
const dbName: string = process.env.DB_NAME || 'web2_2024'; // Database name
const client = new MongoClient(connectionString); // Create a MongoClient instance

let db: Db; // Database instance
export let usersCollection: Collection<User>; // Users collection instance
export let gradeHistoriesCollection: Collection<GradeHistory>; // Grade histories collection instance

export const connectToDatabase = async (): Promise<void> => {
  try {
    // Connect to the MongoDB client
    await client.connect();

    // Select the database
    db = client.db(dbName);

    // Log database name to verify it's correct
    console.log('Connected to Database:', dbName);

    // Initialize collections
    usersCollection = db.collection<User>('users');
    gradeHistoriesCollection = db.collection<GradeHistory>('grades'); // Make sure this name matches your collection in MongoDB

    console.log('Connected to MongoDB collections successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};
