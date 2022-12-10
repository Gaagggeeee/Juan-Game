const express = require('express');
const app = express();
const port = 8000;
const { Client, Environment, ApiError } = require ("square");


app.listen(port, () => {
    console.log('Server is live on ' + port);
});

const client = new Client({
    accessToken: "EAAAEAzeABaIXk8gWUNwe7sA0aLaFG7z_daPnMpI2MSufyUKgEEHu5HqaRVbEEvj",
    environment: Environment.Sandbox
});

const { locationsApi } = client;

app.get("/location", function(req, res, next) {

        let locationData = new Promise((resolve, reject) => {
            let listLocationsResponse = locationsApi.listLocations();
            resolve(listLocationsResponse)
        });
        locationData.then(data => {
            res.send(data)
        })
        
});


  