import express from 'express';
import { errorHandler } from '../middlewares/errorHandler';
import currentUserRouter from './routes/current-user';
import signupRouter from './routes/signup';

const app = express();
app.use(express.json());

app.use(currentUserRouter);
app.use(signupRouter);

app.use(errorHandler)

app.listen(3000, () => {
  console.log("AUTH: Listen PORT 3000!!!!!!!!!!")
})