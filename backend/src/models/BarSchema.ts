// import mongoose, { Schema, Document } from 'mongoose'

// interface IDailyDeals {
//     [key: string]: string[];
// }

// export interface IBar extends Document {
//     name: string;
//     image: string;
//     neighborhood: string;
//     happy_hour_time: string;
//     lunch_specials: string[];
//     happy_hour_deals: string[];
//     daily_deals: IDailyDeals;
//     late_night: string[];
// }

// const BarSchema: Schema = new Schema({
//     name: { type: String, required: true },
//     image: { type: URL, required: false },
//     neighborhood: { type: String, required: true},
//     happy_hour_time: { type: String, required: false },
//     lunch_specials: { type: [String], required: false },
//     happy_hour_deals: { type: [String], required: true},
//     daily_deals: {
//         type: Map,
//         of: [String],
//         required: false
//     },
//     late_night: { type: String, required: false }
// })

// export default mongoose.model<IBar>('Bar', BarSchema)

import { Schema, model } from 'mongoose'

interface IDailyDeals {
    [key: string]: string[];
}
export interface BarInterface {
    name: string;
    image: string;
    neighborhood: string;
    happy_hour_time: string;
    lunch_specials: string[];
    happy_hour_deals: string[];
    daily_deals: object;
    late_night: string[];
}

const BarSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: false },
    neighborhood: { type: String, required: true},
    happy_hour_time: { type: String, required: false },
    lunch_specials: { type: [String], required: false },
    happy_hour_deals: { type: [String], required: true},
    daily_deals: {
        type: Map,
        of: [String],
        required: false
    },
    late_night: { type: String, required: false }
}, { collection: 'bars' });

export const BarModel = model('Bar', BarSchema)