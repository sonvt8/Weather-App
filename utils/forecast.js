const request = require('request')

const forecast = (long, lat, callback) => {
    url =  'http://api.weatherstack.com/current?access_key=94f784aa91cfa88207f18b4c9ce0462f&query=' + lat + ',' + long

    request({url: url, json: true}, (err, res) => {
        if(err){
            callback('Unable to connect to weather service!', undefined)
        }else if(res.body.error){
            callback('Unable to find location', undefined)
        }else{
            callback(undefined, {
                'weather_descriptions' : res.body.current.weather_descriptions[0],
                'temperature' : res.body.current.temperature,
                'feelslike' : res.body.current.feelslike 
            })
        }
    })
}

module.exports = forecast