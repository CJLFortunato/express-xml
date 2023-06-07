import express from 'express';
import Joi from 'joi';

const app = express();
app.use(express.json());

const schema = Joi.object({
  Enseigne: Joi.string(),
  Pays: Joi.string(),
  NumPointRelais: Joi.string(),
  Ville: Joi.string(),
  CP: Joi.string(),
  Latitude: Joi.string(),
  Longitude: Joi.string(),
  Taille: Joi.string(),
  Poids: Joi.string(),
  Action: Joi.string(),
  DelaiEnvoi: Joi.string(),
  RayonRecherche: Joi.string(),
  TypeActivite: Joi.string(),
  NACE: Joi.string(),
  NombreResultats: Joi.number().integer(),
  Security: Joi.string(),
}). with('Pays', 'CP')

app.post('/', (req, res) => {
  const {
    body
  } = req;

  res.send(body);

});

app.listen(5000, () => console.log('Listening on port 5000...'));