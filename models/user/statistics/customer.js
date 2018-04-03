import mongoose, { Schema } from 'mongoose';

const CustomerSchema = new Schema({
  start: { type: Date },
  orders: {
    created: {
      total: { type: Number, default: 0 },
      avg: {
        year: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        day: { type: Number, default: 0 },
        timeOfDay: { type: Date },
      },
    },
    accepted: {
      total: { type: Number, default: 0 },
      avg: {
        year: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        day: { type: Number, default: 0 },
        timeOfDay: { type: Date },
      },
    },
    declined: {
      total: { type: Number, default: 0 },
      avg: {
        year: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        day: { type: Number, default: 0 },
        timeOfDay: { type: Date },
      },
    },
    cancelled: {
      total: { type: Number, default: 0 },
      avg: {
        year: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        day: { type: Number, default: 0 },
        timeOfDay: { type: Date },
      },
    },
  },
  ratings: {
    total: { type: Number },
    avg: { type: Number },
    ratings: [{
      rating: { type: Number },
      toUser: { type: Object },
    }],
  },

  spending: {
    startedFrom: { type: Date },
    total: { type: Number, default: 0 },
    avg: {
      year: { type: Number, default: 0 },
      month: { type: Number, default: 0 },
      week: { type: Number, default: 0 },
      day: { type: Number, default: 0 },
      timeOfDay: { type: Date },
    },
  },
});

export default mongoose.model('customer', CustomerSchema);
