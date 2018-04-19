import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import router from './router';
import protection from './middleware/protection';
import { URI } from './constants';

mongoose.connect(URI);

const app = express();

app.use(morgan('combined'));
app.use(bodyParser());
app.use(protection);
app.use(router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
