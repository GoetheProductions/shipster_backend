import mongoose, { Schema } from 'mongoose';

const TransportationSchema = new Schema({
  name: { String },
});

export default mongoose.model('transportation', TransportationSchema);
