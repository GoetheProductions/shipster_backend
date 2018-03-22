import mongoose, { Schema } from 'mongoose';

const TimesSchema = new Schema({
  orderCreated: { type: Date },
  orderPickedUp: { type: Date },
  itemsPickedUp: { type: Date },
  itemsDelivered: { type: Date },
  deliveryAccepted: { type: Date },
});

export default mongoose.model('times', TimesSchema);
