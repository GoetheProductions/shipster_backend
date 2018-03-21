import express from 'express';
import morgan from 'morgan';
import router from './router';

const app = express();

app.use(morgan('combined'));
app.use('/api/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://${address}:${port}`);
});
