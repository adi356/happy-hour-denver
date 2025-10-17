import type { Request, Response } from 'express';
import { getBarImageService } from '../services/getBarImage.js';

export const getBarImageController = async (req: Request, res: Response) => {
    try {
        const { barId } = req.params;
        if (typeof barId !== 'string') {
            return res.status(400).json({ message: 'Bar ID parameter is required.' });
        }
        const imageUrl = await getBarImageService(barId);
        res.json({ imageUrl });
    } catch (error: any) {
        res.status(404).json({ message: error.message });
    }
}