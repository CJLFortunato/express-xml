import {postRequest} from "./http-requests.js";
import {jsonToXml} from "./jsonToXml.js"

function isNotErrorStatus(res){
    console.log(res)
    if (typeof res != "number"){
        console.log("res not number : is xml")
        // ToDo : add conversion xml to json here
        return res
    } else {
        console.log("res is number : is error status")
        return res
    }
}

export async function postWSI4PointRelaisRecherche(body){
    const urlSection = "WSI4_PointRelais_Recherche"
    // ToDo : add conversion json to xml here
    const result = await postRequest(jsonToXml(body), urlSection)
    return isNotErrorStatus(result)
}