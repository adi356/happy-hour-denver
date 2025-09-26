import Bar from "../models/Bar.js"

export const getBarByNameService = async (name: string) => {
    return await Bar.findOne({ name });
};