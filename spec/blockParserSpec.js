
const Bemifier = require('../src/bemifier');
// const BASIC_CONFIG = { "source": "/spec/beml-examples/block.beml" };
const BASIC_CONFIG = {};
const bemifier = new Bemifier.Bemifier(BASIC_CONFIG);

describe("block parsing", function () {
    it(" 'Tabs' block", function () {
        const file = loadFile('/beml-examples/block.beml');
        expect(bemifier.transpileSource(file)).toBe('<div class="tabs"></div>');
    });
    it(" 'Tabs' and 'Header' block", function () {
        expect(bemifier.transpileSource()).toBe('<div class="tabs"></div><div class="header"></div>');
    });
});

function loadFile(relPath) {
    const fs = require('fs');
    var path = require('path');
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf8' });
}