import {
    postWSI4PointRelaisRecherche,
} from "./requests.js";

export const recherchePointsRelais = async (req, res) => {
    res.send(await postWSI4PointRelaisRecherche(req.body));
}