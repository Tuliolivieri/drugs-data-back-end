import express from 'express';
var cors = require('cors');

import { router as routes } from './app/routes';

import './database';

const app = express();
const port = 3000;

app.use(cors({ origin: 'http://127.0.0.1:5173'}));
app.use(express.json());
app.use(routes);

app.listen(port, () => {
  return console.log(`App running at http://localhost:${port}`);
});