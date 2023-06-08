//const convert = require("xml-js");
import convert from "xml-js"
// const fs = require("fs");

let dataArr = [];
let dataObj = {};

export const xmlToJson = (data) => {
  const result = convert.xml2js(data, { compact: true, nativeType: false, spaces: 4 });
  //console.log(result);
  const results = result['soap:Envelope']['soap:Body'].WSI4_PointRelais_RechercheResponse.WSI4_PointRelais_RechercheResult.PointsRelais.PointRelais_Details

  console.log("xml to json # + log of item 0 of array ######################")

  console.log(results[0])
  //console.log("---------------------------------------")
  //console.log(results[1])
  //console.log("---------------------------------------")
  //console.log(results[2])

  results.forEach(item => {
/*{
  STAT: {},
  Num: { _text: '098116' },
  LgAdr1: { _text: 'CARREFOUR CITY                 ' },
  LgAdr2: {},
  LgAdr3: { _text: '56 RUE ST OUEN                 ' },
  LgAdr4: {},
  CP: { _text: '14000' },
  Ville: { _text: 'CAEN                      ' },
  Pays: { _text: 'FR' },
  Localisation1: { _text: 'QUARTIER ST OUEN              ' },
  Localisation2: {},
  Latitude: { _text: '49,1756200' },
  Longitude: { _text: '-00,3776704' },
  TypeActivite: { _text: '000' },
  Information: {},
  Horaires_Lundi: { string: [ [Object], [Object], [Object], [Object] ] },
  Horaires_Mardi: { string: [ [Object], [Object], [Object], [Object] ] },
  Horaires_Mercredi: { string: [ [Object], [Object], [Object], [Object] ] },
  Horaires_Jeudi: { string: [ [Object], [Object], [Object], [Object] ] },
  Horaires_Vendredi: { string: [ [Object], [Object], [Object], [Object] ] },
  Horaires_Samedi: { string: [ [Object], [Object], [Object], [Object] ] },
  Horaires_Dimanche: { string: [ [Object], [Object], [Object], [Object] ] },
  Informations_Dispo: {},
  URL_Photo: {
    _text: 'https://ww2.mondialrelay.com/public/permanent/photo_relais.aspx?ens=CC______41&num=098116&pays=FR&crc=5B92BDA3E534D04898B6AC1149AC40CC'
  },
  URL_Plan: {
    _text: 'https://ww2.mondialrelay.com/public/permanent/plan_relais.aspx?ens=BDTEST1311&num=098116&pays=FR&crc=449E44EA191510539E5BB09A6DEC812E'
  },
  Distance: { _text: '95' }
}*/
  })

  return JSON.stringify(results);
};
