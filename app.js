const request = require('request')
const yargs = require('yargs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


location = process.argv[2]
console.log(process.argv)

if(!location){
    return console.log('Please provide the location in your command')
}else{
    geocode(location, (err, data) => {
        if(err){
            return console.log(err)
        }
    
        forecast(data.long, data.lat, (error, output) => {
            if(error){
                return console.log(error)
            }
            console.log('Country:' + data.location + ' the temperature outside is ' + output.temperature + ' Celcius but it feels like ' + output.feelslike + ' Celcius. Weather description is ' + output.weather_descriptions)
        })
    })
}
