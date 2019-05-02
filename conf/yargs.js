const direction = {
    demmand: true,
    alias: "d"
}
const unit = {
    demmand: false,
    default: "f",
    alias: "u"
}


const argv = require('yargs').options({
    direction,
    unit
}).argv;

module.exports = { argv };