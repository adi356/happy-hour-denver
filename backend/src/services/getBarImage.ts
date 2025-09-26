import Bar from "../models/Bar.js";

export const getBarImageService = async (barId: string) => {
    const bar = await Bar.findById(barId);
    if (!bar) throw new Error("Bar not found");
    return bar.image;
};