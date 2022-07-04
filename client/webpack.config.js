//configuración para que no rompa react native en la web con el ruteo
//Ejecuto en terminal:
// npm install @expo/webpack-congif -D
const path = require('path')
const createExpoWebpackConfigAsync = require('@expo/webpack-config')

//exportamos la configuración de webpack. Tiene que ser asincrono
//le pasamos el environment y argumentos para inicializar la configuracion
module.exports = async function (env, argv) {   
    const config = await createExpoWebpackConfigAsync(env , argv)
    
    //en webpack
    config.module.rules.push({
        test: /\.js$/,   //en archivos .js
        loader: 'babel-loader', //transformarlos con babel
        include: [  //y que incluya los que estan en path.join
            path.join(__dirname, 'node_modules/react-router-native')
        ]
    })
    return config
}