import {
    postWSI4PointRelaisRecherche,
} from "./requests.js";

export const recherchePointsRelais = async (req, res) => {
    console.log("controller")
    console.log(req.body)
    res.send(await postWSI4PointRelaisRecherche(req.body));
}