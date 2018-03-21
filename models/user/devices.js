import mongoose, { Schema } from 'mongoose';

const DevicesSchema = new Schema({
  os: {
    name: { type: String },
    version: { type: String },
  },
  type: { type: String },
  model: { type: String },
});

export default mongoose.model('device', DevicesSchema);
