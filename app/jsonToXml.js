const express = require('express');
const md5 = require('md5');

const app = express();
app.use(express.json())

app.post('/api/v1/magasins', (req, res) => {

    let securityKey = md5(req.body.enseigne 
                            + req.boby.pays 
                            + req.body.cp
                            + req.body.taille
                            + req.body.poids
                            + req.body.action
                            + req.body.privateKey).toUpperCase();

    const config = {
        headers: {
          'Content-Type': 'application/xml'
        }
      };

      const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
                        <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                        <soap:Body>
                            <WSI4_PointRelais_Recherche xmlns="http://www.mondialrelay.fr/webservice/">
                            <Enseigne>${req.body.enseigne}</Enseigne>
                            <Pays>${req.body.pays}</Pays>
                            <CP>${req.body.cp}</CP>
                            <Taille>${req.body.taille}</Taille>
                            <Poids>${req.body.poids}</Poids>
                            <Action>${req.body.action}</Action>
                            <Security>${securityKey}</Security>
                            </WSI4_PointRelais_Recherche>
                        </soap:Body>
                        </soap:Envelope>`

    console.log(xmlBody);
    res.status(201).send(req.body);
});

app.listen(4000, () => console.log('Listenning on port 4000...'));