const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c42ce548f3a190de37b6ace2fe897a4e/' + latitude + ',' + longitude + '?units=uk2'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            const precipProbability = body.currently.precipProbability
            const summary = body.daily.data[0].summary
            const currentlyTemp = body.currently.temperature
            const temperatureLow = body.daily.data[0].temperatureLow
            const temperatureHigh = body.daily.data[0].temperatureHigh
            callback(undefined, summary + ' It is currently ' + currentlyTemp + ' degress out with a low of ' + temperatureLow + ' degrees and a high of ' + temperatureHigh + ' degrees. There is a ' + precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast