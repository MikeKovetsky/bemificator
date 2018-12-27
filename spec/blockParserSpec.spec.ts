
// const BASIC_CONFIG = { "source": "/spec/beml-examples/block.beml" };
import { Bemifier } from "../src/bemifier";

const BASIC_CONFIG = {};
const bemifier = new Bemifier(BASIC_CONFIG);

describe("block parsing", function () {
    it(" 'Tabs' block", function () {
        const file = loadFile('/beml-examples/block-with-class.beml');
        expect(bemifier.transpileSource(file)).toBe('<div class="tabs"></div>');
    });
    it(" 'Tabs' and 'Header' block", function () {
        const file = loadFile('/beml-examples/2-blocks-with-class.beml');
        expect(bemifier.transpileSource(file)).toBe('<div class="tabs"></div><div class="header"></div>');
    });
});

function loadFile(relPath) {
    const fs = require('fs');
    var path = require('path');
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: 'utf8' });
}