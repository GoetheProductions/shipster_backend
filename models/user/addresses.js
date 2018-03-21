import mongoose, { Schema } from 'mongoose';

const AddressesSchema = new Schema({
  street: { type: String, required: true },
  number: { type: String, required: true },
  floor: { type: String, required: false },
  postCode: {
    type: String, required: true, trim: true, maxlength: 4,
  },
  country: { type: String, default: 'Danmark' },
  lat: { type: Number },
  lon: { type: Number },
});

export default mongoose.model('addresses', AddressesSchema);
