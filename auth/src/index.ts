import express from 'express';
import 'express-async-errors';
import { errorHandler } from './middlewares/errorHandler';
import currentUserRouter from './routes/current-user';
import signupRouter from './routes/signup';
import signinRouter from './routes/signin';
import signoutRouter from './routes/signout';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session'

const app = express();
app.set('trust proxy', true);
app.use(express.json());
app.use(cookieSession({
  secure: true,
  signed: false
}))

app.use(currentUserRouter);
app.use(signupRouter);
app.use(signinRouter);
app.use(signoutRouter);

app.use(errorHandler)

const startServer = async () => {
  if (!process.env.JWT_KEY) {
    throw new Error('JWT_KEY env not defined')
  }

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
