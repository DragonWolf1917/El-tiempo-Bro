const axios = require('axios');

const getTemperatura = async(lat, lon, unit = "") => {
    switch (unit) {
        case "f":
            unit = "";
            break;
        case "c":
            unit = "units=metric";
            break;
        default:
            unit = "";
            break;
    }

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=69024891c7045d69ea383cdbae4a396b&${unit}`);
    //console.log(resp);
    return resp.data.main.temp
}

module.exports = { getTemperatura }