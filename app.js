const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')


location = process.argv[2]
console.log(process.argv)

if(!location){
    return console.log('Please provide the location in your command')
}else{
    geocode(location, (err, {long, lat, location} = {}) => { // if object parameter not exist, it will get default value (get empty in this case)
        if(err){
            return console.log(err)
        }
    
        forecast(long, lat, (error, {temperature, feelslike, weather_descriptions} = {}) => { 
            if(error){
                return console.log(error)
            }
            console.log('Country:' + location + ' the temperature outside is ' + temperature + ' Celcius but it feels like ' + feelslike + ' Celcius. Weather description is ' + weather_descriptions)
        })
    })
}
