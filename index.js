import config from 'dotenv/config';
import express from 'express';
import cors from 'cors';
import router from './routes/index.js';
import ErrorHandler from './middleware/ErrorHandler.js';
import mongoose from 'mongoose';

const PORT = process.env.PORT || 2901;
const PASSWORD = process.env.PASSWORD;

const app = express();
const url = `mongodb+srv://charnysheuski:${PASSWORD}@cluster0.dj3iezg.mongodb.net/?retryWrites=true&w=majority`;

app.use(cors({ origin: ['http://31.129.102.208:3001/'], credentials: true }));
app.use(express.json());
app.use(express.static('static'));
app.use('/api', router);

//Обработка ошибок
app.use(ErrorHandler);

const start = async () => {
  try {
    mongoose.connect(url);

    app.listen(PORT, () => console.log('Сервер запущен', PORT));
  } catch (e) {
    console.log(e);
  }
};

start();
