const geocode = require('../util/geocode')
const forecast = require('../util/forecast')

const address = process.argv[2]

if( !address ) {
    console.log('Please provide an address.')
} else {
    geocode(address,  (error, response) => {
        if (error){
            console.log( error )
        } else {
            forecast( response, (error, response) => {
                if (error) {
                    console.log( error )
                } else {
                    console.log(response)
                }
            })
        }
    })
}
