import type { Request, Response } from 'express';
import { getBarsByNeighborhoodService } from '../services/getBarsByNeighborhood.js';

export const getBarsByNeighborhoodController = async (req: Request, res: Response) => {
    try {
        const { neighborhood } = req.params;
        if (typeof neighborhood !== 'string') {
            return res.status(400).json({ message: 'Neighborhood parameter is required.' });
        }
        const bars = await getBarsByNeighborhoodService(neighborhood);
        res.json(bars);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};