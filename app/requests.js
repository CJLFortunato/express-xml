import { postRequest } from "./http-requests.js";
import { jsonToXml } from "./jsonToXml.js"
import { xmlToJson } from "./xmlToJson.js";
const md5 = require("md5");

function isNotErrorStatus(res) {
  console.log(res);
  if (typeof res != "number") {
    console.log("res not number : is xml");
    // ToDo : add conversion xml to json here
    const result = xmlToJson(res);
    console.log(result);
    return res;
  } else {
    console.log("res is number : is error status");
    return res;
  }
}

export async function postWSI4PointRelaisRecherche(body){
    const urlSection = "WSI4_PointRelais_Recherche"
    // ToDo : add conversion json to xml here
    const xmlBody = await jsonToXml(body)
    const result = await postRequest(xmlBody, urlSection)
    return isNotErrorStatus(result)
}

export async function jsonToXml(body) {
  let body = req.body;

  let securityKey = md5(
    body.enseigne + body.pays + body.cp + body.privateKey
  ).toUpperCase();

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
                        </soap:Envelope>`;
  return xmlBody;
}
