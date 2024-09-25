import { BarModel } from "../models"

// get all bars and happy hour info for each held in MongoDB
export const getAllBars = async () => {
    // const allBars = await BarModel.find({})
    // return allBars
    try {
        const allBars = await BarModel.find({}).lean();
        return allBars;
    } catch (error) {
        console.error('Error fetching bars: ', error);
        throw error;
    }
}