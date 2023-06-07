import express from 'express';
import Joi from 'joi';

import {
  schema
} from './utils/schema.js';

const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  const {
    body
  } = req;

  try {
    Joi.assert(body, schema);
    res.send(body);
  } catch (e) {

    res.status(422).send({
      error: e.details[0].message
    });
  }
});

app.listen(5000, () => console.log('Listening on port 5000...'));