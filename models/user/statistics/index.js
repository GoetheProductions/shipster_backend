import mongoose, { Schema } from 'mongoose';
import RunnerSchema from './runner';
import ClientSchema from './client';

const UserStatisticsSchema = new Schema({
  runner: RunnerSchema,
  client: ClientSchema,
});

export default mongoose.model('userStatistics', UserStatisticsSchema);
