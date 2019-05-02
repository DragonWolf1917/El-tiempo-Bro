const { argv } = require('./conf/yargs');
const { getLugarLatLong } = require('./lugar/lugar');
const { getTemperatura } = require('./clima/clima');

getLugarLatLong(argv.direction)
    .then(cord => {
        console.log(`=========Clima App==========`);
        console.log(`Lugar:       ${cord.localidad}`);
        console.log(`Latitud:     ${cord.lat}`);
        console.log(`Longitud:    ${cord.lon}`);
        return getTemperatura(cord.lat, cord.lon, argv.unit)
    })
    .then(resp => {
        console.log(`Temperatura: ${resp}`)
        console.log(`=========Clima App==========`)
        return resp;
    })
    .catch(e => console.log("Error de coneción"));