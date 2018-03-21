import mongoose, { Schema } from 'mongoose';
import MetaSchema from './meta';
import AddressesSchema from './addresses';

const UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  image: { type: Object, required: false },
  email: { type: String, required: true },
  age: { type: Number, required: true },
  userCount: { type: Number },
  currency: { type: String, default: 'DKK' },
  // defaultPaymentMethod: { type: String },
  // devices: [DevicesSchema],
  addresses: { type: Array, ref: 'addresses' },
  meta: { type: Schema.Types.ObjectId, ref: 'meta' },
  // statistics: StatisticsSchema,
  // range: RangeSchema,
});

export default mongoose.model('user', UserSchema);
