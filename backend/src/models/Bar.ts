import mongoose, { Schema, Document } from 'mongoose';

export interface IBar extends Document {
    name: string;
    image: string;
    neighborhood: string;
    lunch_specials: string[];
    happy_hour_deals: string[];
    daily_deals: Record<string, string[]>; // e.g., { "Monday": ["Deal1", "Deal2"], ... }
    late_night: string[];
    happy_hour_time: string;
}

const BarSchema: Schema = new Schema<IBar>({
    name: { type: String, required: true },
    image: { type: String, required: false },
    neighborhood: { type: String, required: true },
    lunch_specials: { type: [String], default: []},
    happy_hour_deals: { type: [String], default: [] },
    daily_deals: { type: Map, of: [String], default: {} },
    late_night: { type: [String], default: [] },
    happy_hour_time: { type: String, default:"" },
}, 
{ timestamps: true }
);

export default mongoose.model<IBar>("Bar", BarSchema);