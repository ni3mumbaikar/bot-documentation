const path = require('path')

const config = {
        entry : path.resolve(__dirname,'./src/index.js'),
        mode: "development",
    output :{
        path: path.resolve(__dirname,'./dist'),
        filename: 'app.bundle.js'
    },
    devtool : 'source-map'
}

module.exports =  config;