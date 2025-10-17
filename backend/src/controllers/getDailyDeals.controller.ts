import type { Request, Response } from 'express';
import { getDailyDealsService } from '../services/getDailyDeals.js';

export const getDailyDealsController = async (req: Request, res: Response) => {
    try {
        const { barId, day } = req.params;
        if (typeof barId !== 'string' || typeof day !== 'string') {
            return res.status(400).json({ message: 'Bar ID and day parameters are required.' });
        }
        const deals = await getDailyDealsService(barId, day);
        res.json(deals);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};

