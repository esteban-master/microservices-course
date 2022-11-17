import express from 'express';

const app = express();
app.use(express.json());

app.get('/api/users/currentuser', (req, res) => {
  res.send('HOLA')
})

app.listen(3000, () => {
  console.log("AUTH: Listen PORT 3000!!!!!!!!!!")
})