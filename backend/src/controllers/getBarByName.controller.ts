import type { Request, Response } from 'express';
import { getBarByNameService } from '../services/getBarByName.js';

export const getBarByNameController = async (req: Request, res: Response) => {
    try {
        const { name } = req.params;
        if (typeof name !== 'string') {
            return res.status(400).json({ message: 'Name parameter is required.' });
        }
        const bar = await getBarByNameService(name);
        if (!bar) {
            return res.status(404).json({ message: 'Bar not found.' });
        }
        res.json(bar);
    } catch (error: any) {
        res.status(500).json({ message: error.message });
    }
};