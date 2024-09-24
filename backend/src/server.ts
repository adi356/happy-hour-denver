import app from './app'
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config()

const PORT = process.env.PORT || 5000;

mongoose.connect(process.env.MONGO_URI as string).then(() => {
    console.log(`Server running on port ${PORT}`);
}).catch((error) => {
    console.error('Error connecting to MongoDB', error);
})