const request = require('request')

// Weather Stack API

const url = 'http://api.weatherstack.com/current?access_key=94f784aa91cfa88207f18b4c9ce0462f&query=10.8072,106.6856'

request ({ url: url, json: true }, (err, res) => {
    if(err){
        console.log('Unable to connect to weather service!')
    }else if(res.body.error){
        console.log('Unable to find location')
    }else{
        const data = res.body.current
        console.log('It is currently ' + data.temperature + ' degrees out. There is a ' + data.precip + '% chance of rain. Weather description is: ' + 
        data.weather_descriptions[0])
    }
})

// Map Box API

const geocodeUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/45%20Nguyen%20Van%20Dau%20700000%20Ho%20Chi%20Minh%20MA.json?proximity=-106.6856,10.8072&access_token=pk.eyJ1Ijoic29udnQ4IiwiYSI6ImNrZXMyd3Z0ODBwdzczMW9tbzFqZHpnMmMifQ.L5qApjuG6JooOn84bDAT4A'

request ({url: geocodeUrl, json: true}, (err, res) => {
    if(err){
        console.log('Unable to connect to weather service!')
    }else if(res.body.message === 'Not Found'){
        console.log('Unable to find location')
    }else{
        const data = res.body.features

        data.forEach(obj => {
            geo = obj.center
            long = geo[0]
            lat = geo[1]
            console.log(obj.place_name + ' long:' + long + ' lat:' + lat)
        });
    }
})