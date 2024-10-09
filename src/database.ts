import { MongoClient, Db, Collection } from 'mongodb';
import dotenv from 'dotenv';
import User from './models/user';
import { GradeHistory } from './models/gradeHistories';

dotenv.config();

const connectionString: string = process.env.DB_CONN_STRING || '';
const dbName: string = process.env.DB_NAME || 'web2_2024';
const client = new MongoClient(connectionString);

let db: Db;
export let usersCollection: Collection<User>;
export let gradeHistoriesCollection: Collection<GradeHistory>;

export const connectToDatabase = async (): Promise<void> => {
  try {
    await client.connect();
    db = client.db(dbName);
    usersCollection = db.collection<User>('users');
    gradeHistoriesCollection = db.collection<GradeHistory>('grades'); // Linking to the grades collection in MongoDB
    console.log('Connected to the MongoDB database successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
};

