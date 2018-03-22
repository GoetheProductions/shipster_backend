import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: Object, required: false },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  localizations: {
    currency: { type: String, default: 'DKK' },
    measurementUnit: { type: String, default: 'km' },
  },
  userCount: { type: Number },
  defaultPaymentMethod: { type: String },
  devices: { type: Array, ref: 'device' },
  addresses: { type: Array, ref: 'addresses' },
  meta: { type: Object, ref: 'meta' },
  statistics: {
    runner: { type: Object, ref: 'runner' },
    client: { type: Object, ref: 'client' },
  },
  transportation: { type: Array, ref: 'transportation' },
});

export default mongoose.model('user', UserSchema);
