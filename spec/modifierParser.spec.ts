import {Bemifier} from "../src/bemifier";
import {loadFile} from "./spec-helpers";

const BASIC_CONFIG = {};
const bemifier = new Bemifier(BASIC_CONFIG);

describe("modifier parsing", () => {
    it("'Tabs' block, 'tab' element, 'active' modifier", () => {
        const file = loadFile("/beml-examples/modifier/single-modifier.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs"><div class="tabs__tab--active"></div></div>');
    });
});