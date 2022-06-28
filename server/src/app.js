require("dotenv").config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const fs = require('fs');
var path = require('path');
const bodyParser = require('body-parser');
const app = express();

const routes = require('./routes')


//Middleware
/* app.use(express.json()); */
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

const accessLogStream = fs.createWriteStream(path.join(__dirname, 'access.log'), { flags: 'a' })
app.use(morgan('combined', { stream: accessLogStream }))

app.get('/', (req, res) => res.json({ 'alion-api': '1.0.0' }));

app.use('/api', routes)


//Error handler
app.use(function (error, req, res, next) {
  const err = new Error('There is nothing here.');
  err.status = 404;
  next(err);
  return res.status(500).send('Ups tenemos un problema en el servidor, intentalo más tarde!');
});

app.use((err, req, res, next) => {
  if (err.name === 'SequelizeValidationError') {
    const errObj = { message: 'Validation error', errors: [] };
    err.errors.map((er) => {
      errObj.errors.push({ [er.path]: er.message });
    });
    return res.status(403).send(errObj);
  }
  if (err.name === 'SequelizeUniqueConstraintError') {
    return res.status(409).send({ message: 'Register already exists' });
  }
  return res.status(500).send('Ups tenemos un problema en el servidor, intentalo más tarde!');
});

module.exports = app;
