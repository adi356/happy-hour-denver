import Bar from "../models/Bar.js"

export const getBarsByNeighborhoodService = async (neighborhood: string) => {
    return await Bar.find({ neighborhood });
};