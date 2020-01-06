/* eslint-disable import/no-extraneous-dependencies */
const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 5000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('server/public'));

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
});

const inputHistory = [
  {
    dateInput: '',
    snowInput: '',
  },
];

// GET Routes
app.get('/getSnowHistory', (req, res) => {
  res.send(inputHistory);
});

// POST Routes
app.post('/sendSnow', (req, res) => {
  inputHistory.push({
    dateInput: req.body.dateInput,
    snowInput: req.body.snowInput,
  });
  res.sendStatus(201);
});
