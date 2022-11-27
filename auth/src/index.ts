import mongoose from 'mongoose';
import { app } from './app';

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
