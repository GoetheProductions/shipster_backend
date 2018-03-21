import mongoose, { Schema } from 'mongoose';

const RunnerSchema = new Schema({
  orders: {
    taken: {
      total: { type: Number, default: 0 },
      avg: {
        year: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        day: { type: Number, default: 0 },
        timeOfDay: { type: Date },
      },
    },
    pickedUp: {
      total: { type: Number, default: 0 },
      avg: {
        year: { type: Number, default: 0 },
        month: { type: Number, default: 0 },
        week: { type: Number, default: 0 },
        day: { type: Number, default: 0 },
        timeOfDay: { type: Date },
      },
    },
    delivered: {
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
    ratings: [{
      rating: { type: Number },
      fromUser: { type: Object },
    }],
  },

  earnings: {
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

export default mongoose.model('runner', RunnerSchema);

