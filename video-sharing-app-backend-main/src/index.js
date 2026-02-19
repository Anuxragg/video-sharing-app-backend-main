import dotenv from 'dotenv';
import connectDB from "./db/index.js";
import { app } from './app.js';

dotenv.config();

// Connect to DB before handling requests
await connectDB();

export default app;