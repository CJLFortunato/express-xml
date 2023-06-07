import express from 'express';
import Joi from 'joi';

import {
  schemaPointRelais
} from './utils/schema.js';

const app = express();
app.use(express.json());

app.post('/json_pointrelais_recherche', (req, res) => {
  const {
    body
  } = req;

  try {
    Joi.assert(body, schemaPointRelais);
    res.send(body);
  } catch (e) {

    res.status(422).send({
      error: e.details[0].message
    });
  }
});

app.listen(5000, () => console.log('Listening on port 5000...'));