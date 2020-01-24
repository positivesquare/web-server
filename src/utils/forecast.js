const request = require('request')
const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/c42ce548f3a190de37b6ace2fe897a4e/' + latitude + ',' + longitude + '?units=uk2'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.daily.data[0].summary + ' It is currently <b>' + body.currently.temperature + ' degress</b> out with a low of <b>' + body.daily.data[0].temperatureLow + ' degrees</b> and a high of <b>' + body.daily.data[0].temperatureHigh + ' degrees.</b> There is a ' + body.currently.precipProbability + '% chance of rain.')
        }
    })
}

module.exports = forecast