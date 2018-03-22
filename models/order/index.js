import mongoose, { Schema } from 'mongoose';

const OrderSchema = new Schema({
  creationDate: { type: Date, default: Date.now },
  items: { type: Array, ref: 'item' },
  times: { type: Object, ref: 'times' },
  deleveryPrice: { type: Number },
});

export default mongoose.model('order', OrderSchema);
