import fetch from 'node-fetch';
//const fetch = require("fetch");

// ------------- error ----------------------

function errorHandling(err){
    console.log("ERROR")
    console.log(err)
    console.log("ERROR")
    return err.status
}

// ------------- default values -------------------

const baseUrl = "http://api.mondialrelay.com/Web_Services.asmx" + "?"
function addToBaseUrl(urlSection){ return baseUrl + "?op=" + urlSection}

const header = {
    "Content-Type"  :"text/xml",
    "MessageType"   :"CALL"
}

// --------------- mondial relay request --------------------

export async function postRequest(body, urlSection){
    
    const url = addToBaseUrl(urlSection);
    const params = {
        method: 'POST',
        headers: header,
        body: body
    }
    console.log(url)
    console.log(params)

    let requestData
    return await fetch(url,params)
    .then(async data => {                        // reception des données
        console.log("working ########################")
        requestData = await data.text()
    })
   .then(res => {                                // upon completion
        console.log("working & complete ############")
        return requestData
    })                       
   .catch(err => {return errorHandling(err)})    // upon failure
}