import { ITrip } from '@/interfaces/trip';
import mongoose, { Model, model } from 'mongoose';

const tripsSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, default: '' },
    shortResume: { type: String, required: true, default: 'Short resume' },
    resume: { type: String, required: true, default: 'Summary' },
    slug: { type: String, required: true, unique: true },
    image: [{ type: String }],
  },
  {
    timestamps: true, // crea el createdAt y cuando se actualice de manera automatica
  }
);

export const TripModel: Model<ITrip> = mongoose.models?.Trip || model('Trip', tripsSchema);
