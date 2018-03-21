import mongoose, { Schema } from 'mongoose';

const RangeSchema = new Schema({
  transportationOptions: [{
    name: { String },
  }],
  radius: { type: String },
});

export default mongoose.model('range', RangeSchema);
