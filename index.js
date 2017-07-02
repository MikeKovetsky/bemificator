const CONFIG_PATH = process.env.config;
const BemifierModule = require('./src/bemifier');
try {
    const CONFIG = require(CONFIG_PATH);
    const bemifier = new BemifierModule.Bemifier(CONFIG);
    console.log(bemifier);
} catch (e) {
    console.error('ERROR GETTING THE CONFIG FILE');
    console.error(e);
}
