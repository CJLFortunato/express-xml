import {postRequest} from "./http-requests.js";

export async function postWSI4PointRelaisRecherche(body){
    const urlSection = "WSI4_PointRelais_Recherche"
    const request = await postRequest(body, urlSection)
    return request
}