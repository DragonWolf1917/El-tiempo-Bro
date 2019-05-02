const axios = require('axios');

const getLugarLatLong = async(dir) => {
    let direccionURI = encodeURI(dir);

    const instancia = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${direccionURI}`,
        headers: {
            'X-RapidAPI-Host': 'devru-latitude-longitude-find-v1.p.rapidapi.com',
            'X-RapidAPI-Key': 'e32769acc6msh7eeb6acdad9d1c7p12873ajsn9f1f366cd638'
        }
    });

    let resp = await instancia.get();

    const resultado = resp.data.Results;

    if (resultado.length === 0) {
        throw new Error(`la direccion ${dir} no existe`);
    } else {
        return {
            localidad: resultado[0].name,
            lat: resultado[0].lat,
            lon: resultado[0].lon
        }
    }
}

module.exports = {
    getLugarLatLong
}