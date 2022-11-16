const fs = require(`fs`)
const https = require('node:https');
const axios = require('axios')


console.log(`hello world`)
const currentLocation = {
    position: {
        lat: -22.909057,
        lng: -43.202514
    } 
}

const race = {
    geolocation: {
        passenger:{
            origin:{
                position:{
                    lat: -22.910294,
                    lng: -43.201345,
                }
            }
        }
    }
}

let urlOpenRoute = `https://openroute.34.111.12.18.nip.io/ors/v2/directions/driving-car?start=${currentLocation.position.lng},${currentLocation.position.lat}&end=${race.geolocation.passenger.origin.position.lng},${race.geolocation.passenger.origin.position.lat}`;
let url2 = 'https://openroute.34.111.12.18.nip.io/ors/v2/directions/driving-car?start=-43.202514,-22.909057&end=-43.201345,-22.910294'
async function testOpenRouteAPI() {
    console.log(encodeURI(urlOpenRoute))
   // let cert_file = fs.readFileSync("./cert/certificado.cer")
   // let ca_file = fs.readFileSync("./cert/certificado.cer")

    const agent = new https.Agent({
        requestCert: false,
        rejectUnauthorized: true,
       // cert: cert_file,
        //ca: ca_file
    });
    
        let response = await axios.get({
          url: `${urlOpenRoute}`,
          httpsAgent : agent,
          headers: {
            'content-Type': `application/json`,
            'charset':'utf-8',
            'Accept': 'application/json, application/geo+json, application/gpx+xml, img/png',
            'charset':'utf-8'
          }
        });
    
        console.log(response);


}    

testOpenRouteAPI()





const axios = require('axios')


let url3 = 'https://pokeapi.co/api/v2/pokemon/ditto'

const currentLocation = {
    position: {
        lat: -22.909057,
        lng: -43.202514
    }
}

const race = {
    geolocation: {
        passenger:{
            origin:{
                position:{
                    lat: -22.910294,
                    lng: -43.201345,
                }
            }
        }
    }
}

let urlOpenRoute = `https://openroute.34.111.12.18.nip.io/ors/v2/directions/driving-car?start=${currentLocation.position.lng},${currentLocation.position.lat}&end=${race.geolocation.passenger.origin.position.lng},${race.geolocation.passenger.origin.position.lat}`;


axios.get(urlOpenRoute).then((response) => {
    console.log(response)
})
