import express, { Application } from 'express';
import cors from 'cors';
import barRoutes from './routes/barRoutes';

const app: Application = express();

app.use(cors());
app.use(express.json());

// Use routes
app.use('/api/bars', barRoutes);

export default app;