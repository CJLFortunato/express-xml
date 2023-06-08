import md5 from "md5" //const md5 = require('md5');

export async function jsonToXml(body) {

    let securityKey = md5(body.enseigne 
                            + body.pays 
                            + body.cp
                            + body.privateKey).toUpperCase();

    const xmlBody = `<?xml version="1.0" encoding="utf-8"?>
                    <soap:Envelope xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:xsd="http://www.w3.org/2001/XMLSchema" xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
                    <soap:Body>
                        <WSI4_PointRelais_Recherche xmlns="http://www.mondialrelay.fr/webservice/">
                        <Enseigne>${body.enseigne}</Enseigne>
                        <Pays>${body.pays}</Pays>
                        <CP>${body.cp}</CP>
                        <Security>${securityKey}</Security>
                        </WSI4_PointRelais_Recherche>
                    </soap:Body>
                    </soap:Envelope>`
    return xmlBody;
}
