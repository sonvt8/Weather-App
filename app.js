const request = require('request')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

forecast(106.63333, 10.81667, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })

geocode('Maputo Mozambique', (err, data) => {
    console.log('Error:', err)
    console.log('Data:', data)
})

