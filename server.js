import express from 'express';
import morgan from 'morgan';
import 'dotenv/config';
import * as db from '../my-app/db';

const app = express();

app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT;

app.get('/api/v1/users', (req, res) => {
  res.status(200).json({
    status: 'Success',
    data: {
      users: ['Wolf Cypher', 'Kyle Walker'],
    },
  });
});

// Testing api
app.post('/api/v1/users', (req, res) => {
  console.log(req.body)
})

app.purge('api/v1/users/:id', (req, res) => {
  console.log(req.params.id);
})

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});