const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=94f784aa91cfa88207f18b4c9ce0462f&query=10.8072,106.6856'

request ({ url: url, json: true }, (err, res) => {
    const data = res.body.current
    console.log('It is currently ' + data.temperature + ' degrees out. There is a ' + data.precip + '% chance of rain. Weather description is: ' + 
    data.weather_descriptions[0])
})

// Reponse Content:

// {
//     "request": {
//       "type": "LatLon",
//       "query": "Lat 10.81 and Lon 106.69",
//       "language": "en",
//       "unit": "m"
//     },
//     "location": {
//       "name": "Duc Hoa",
//       "country": "Vietnam",
//       "region": "",
//       "lat": "10.767",
//       "lon": "106.500",
//       "timezone_id": "Asia/Ho_Chi_Minh",
//       "localtime": "2020-09-07 11:36",
//       "localtime_epoch": 1599478560,
//       "utc_offset": "7.0"
//     },
//     "current": {
//       "observation_time": "04:36 AM",
//       "temperature": 32,
//       "weather_code": 116,
//       "weather_icons": [
//         "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png"
//       ],
//       "weather_descriptions": [
//         "Partly cloudy"
//       ],
//       "wind_speed": 7,
//       "wind_degree": 260,
//       "wind_dir": "W",
//       "pressure": 1009,
//       "precip": 0.1,
//       "humidity": 71,
//       "cloudcover": 50,
//       "feelslike": 36,
//       "uv_index": 8,
//       "visibility": 10,
//       "is_day": "yes"
//     }
//   }