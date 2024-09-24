import { Request, Response } from 'express';
import Bar from '../models/BarSchema';

export const getBars = async (req: Request, res: Response): Promise<void> => {
    try {
        const bars = await Bar.find();
        res.status(200).json(bars);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bar deal data' });
    }
};