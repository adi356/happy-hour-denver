import Bar from "../models/Bar.js";

export const getDailyDealsService = async (barId: string, day: string) => {
    const bar = await Bar.findById(barId);
    if (!bar) throw new Error("Bar not found");

    // daily_deals is stored as { dayOfWeek: [deals] }
    return bar.daily_deals?.[day] || [];
}