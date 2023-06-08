import Joi from 'joi';

import {
  schemaPointRelais
} from './schema.js';

export const validatePayload = (req, res, next) => {
  const {
    body
  } = req;

  try {
    Joi.assert(body, schemaPointRelais);
    next();
  } catch (e) {
    res.status(422).send({
      error: e.details[0].message
    });
  }
}