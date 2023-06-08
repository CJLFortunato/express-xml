import express from 'express';

import {
  router
} from './app/router.js';

const app = express();
app.use(express.json());
app.use('/json_pointrelais_recherche', router)

app.listen(5000, () => console.log('Listening on port 5000...'));