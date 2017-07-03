
const Bemifier = require('../src/bemifier');
const BASIC_CONFIG = { "source": "./beml-examples/tag.beml" }
const bemifier = new Bemifier.Bemifier(BASIC_CONFIG);

describe("block parsing", function () {
    it(" 'Tabs' block", function () {
        expect(bemifier.run()).toBe('<div class="tabs"></div>');
    });
    it(" 'Tabs' and 'Header' block", function () {
        expect(bemifier.run()).toBe('<div class="tabs"></div><div class="header"></div>');
    });
});