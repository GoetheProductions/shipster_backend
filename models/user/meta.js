import mongoose, { Schema } from 'mongoose';

const MetaSchema = new Schema({
  lastLoginTime: { type: Date, default: Date.now },
  hasValidEmail: { type: Boolean, default: false },
  isExpelled: { type: Boolean, default: false },
});

export default mongoose.model('meta', MetaSchema);
