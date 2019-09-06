// TOP NOTE : This version of app-cli.js uses yargs npm package to better assist the CLI experience of the application.

const yargs = require('./node_modules/yargs')

const geocode = require('../util/geocode')
const forecast = require('../util/forecast')

yargs.command({
    command: 'forecast',
    describe: 'Getting the forecast',
    builder: {
        query: {
            describe: 'Search term/ Address for forecast',
            demandOption: true,
            type: 'string'
        }
    },
    handler: (argv) => {
        geocode( argv.query, (error, response) => {
            if (error){
                console.log( error )
            } else {
                forecast(response.latitude, response.longitude, (error, response) => {
                    if (error) {
                        console.log( error )
                    } else {
                        console.log(response)
                    }
                })
            }
        })
    }
})
yargs.parse()