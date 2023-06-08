import { postRequest } from "./http-requests.js";
import { jsonToXml } from "./jsonToXml.js"
import { xmlToJson } from "./xmlToJson.js";

function isNotErrorStatus(res) {
  if (typeof res != "number") {
    console.log("res not number : is xml");
    return xmlToJson(res);
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