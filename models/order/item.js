import mongoose, { Schema } from 'mongoose';

const ItemSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String },
  amount: { type: Number, default: 1 },
  store: { type: String },
});

export default mongoose.model('item', ItemSchema);
