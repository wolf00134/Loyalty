const morgan = require('morgan');
require('dotenv').config();
const express = require('express');
const db = require('./db');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());

const port = process.env.PORT;

app.get('/api/v1/customers', async (req, res) => {
  try {
    const results = await db.query("select * from customers");
    console.log(results.rows);
    res.status(200).json({
      status: 'success',
      data: {
        customers: results.rows
      },
    });
  } catch (err) {
    console.log(err);
  }
});

// Testing api
app.post('/api/v1/users', (req, res) => {
  console.log(req.body)
})

app.listen(port, () => {
  console.log(`Connected to port ${port}`);
});