import { Request, Response } from 'express';
import { Error } from 'mongoose';
import { getAllBars } from '../services';
import { BarModel } from '../models/BarSchema'


export const getAllBarsController = async (req: Request, res: Response) => {
    // try {
    //     const allBars = await getAllBars();
    //     console.log(allBars)
    //     res.status(200).json(allBars);
    // } catch (Error) {
    //     res.status(500).json({ message: 'Error fetching bar deal data' });
    // }
    try {
        const allBars = await BarModel.find({}); // Fetch all documents
        //console.log('Fetched Bars:', allBars);   // Log the result
        res.json(allBars);
    } catch (err) {
        console.error('Error:', err);
        res.status(500).json({ message: 'Error fetching bar data' });
    }
};