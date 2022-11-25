import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middlewares/errorHandler';
import currentUserRouter from './routes/current-user';
import signupRouter from './routes/signup';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signupRouter);

app.use(errorHandler)

const startServer = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (error) {
    console.log(error)
  }

  app.listen(3000, () => {
    console.log("AUTH: Listen PORT 3000!!!!!!!!!!")
  })
}

startServer()
