import fetch from 'node-fetch';
//const fetch = require("fetch");

// ------------- error ----------------------

function errorHandling(status){
    console.log("ERROR : " + status)
    if (status = 500){
        console.error("Internal Server Error")// when body is wrong or ... a completer
    }
    return status
}

// ------------- default values -------------------

const baseUrl = "http://api.mondialrelay.com/Web_Services.asmx"
function addToBaseUrl(urlSection){ return baseUrl + "?op=" + urlSection}

const header = {
    "Content-Type"  :"text/xml",
    "MessageType"   :"CALL"
}

// --------------- mondial relay request --------------------

export function postRequest(body, urlSection){
    
    const url = addToBaseUrl(urlSection);
    const params = {
        method: 'POST',
        headers: header,
        body: body
    }
    console.log(url)
    console.log(params)

    let requestData
    return fetch(url,params)
    .then(data => {                           // reception des données
        console.log("working ##################")
        //console.log(data)
        const status = data.status
        if (status === 200){
            data.text().then(res=>{
                console.log("res")
                console.log(res)
                requestData = res
                return res
            }).catch(err=>{
                requestData = err
                return err
            })
        } else { // upon failure
            requestData = errorHandling(status)
        }
    })
    /*
   .then(res => {                                   // upon completion
        console.log("END of POST ############")
        console.log(requestData)
        //return requestData
    })*/     
   .catch(err => console.error("POST catch error")) // upon failure
}