// Copyright 2017, Google, Inc.
// Licensed under the Apache License, Version 2.0 (the 'License');
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//    http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an 'AS IS' BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

'use strict';
const http = require('http');
const host = 'https://api.ciscospark.com/v1/rooms';

  // Call the weather API
  callWeatherApi().then((output) => {
    // Return the results of the weather API to Dialogflow
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization' , 'Bearer MTllZTIwYjAtMGY2ZS00OTJhLWFkMGYtODI2NTIxYjc1NjA4YjE1NmU3NzEtYmUx');
    res.send(JSON.stringify({ 'speech': output, 'displayText': output }));
  }).catch((error) => {
    // If there is an error let the user know
    res.setHeader('Content-Type', 'application/json');
    res.setHeader('Authorization' , 'Bearer MTllZTIwYjAtMGY2ZS00OTJhLWFkMGYtODI2NTIxYjc1NjA4YjE1NmU3NzEtYmUx');
    res.send(JSON.stringify({ 'speech': error, 'displayText': error }));
  });
};
function callWeatherApi (city, date) {
  return new Promise((resolve, reject) => {
    // Create the path for the HTTP request to get the weather

    console.log('API Request: ' + host);
    // Make the HTTP request to get the weather
    http.get({host: host}, (res) => {
      let body = ''; // var to store the response chunks
      res.on('data', (d) => { body += d; }); // store each response chunk
      res.on('end', () => {
        // After all the data has been received parse the JSON for desired data
        let response = JSON.parse(body);
        /*let forecast = response['data']['weather'][0];
        let location = response['data']['request'][0];
        let conditions = response['data']['current_condition'][0];
        let currentConditions = conditions['weatherDesc'][0]['value'];*/
        // Create response
        //let output = `Current conditions in the `
        // Resolve the promise with the output text
        console.log(response);
        resolve(response);
      });
      res.on('error', (error) => {
        reject(error);
      });
    });
  });
}
