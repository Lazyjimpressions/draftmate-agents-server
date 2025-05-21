import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { runAgent } from './runAgent.js';

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post('/run-agent', runAgent);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Agent backend running on port ${port}`);
});