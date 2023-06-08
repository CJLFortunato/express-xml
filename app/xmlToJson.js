const convert = require("xml-js");
// const fs = require("fs");

let dataArr = [];
let dataObj = {};

export const xmlToJson = (data) => {
  const result = convert.xml2js(data, { compact: false, spaces: 4 });
  console.log(result);
  //il y a un travail de déstructuration à faire encore
  return result;
};
