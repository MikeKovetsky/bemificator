// const BASIC_CONFIG = { "source": "/spec/beml-examples/block.beml" };
import {Bemifier} from "../src/bemifier";
import {loadFile} from "./spec-helpers";

const BASIC_CONFIG = {};
const bemifier = new Bemifier(BASIC_CONFIG);

describe("block parsing", function (): void {
    it(" 'Tabs' block with block class", function (): void {
        const file = loadFile("/beml-examples/block/block-with-class.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs"></div>');
    });
    it(" 'Tabs' and 'Header' with block classes", function (): void {
        const file = loadFile("/beml-examples/block/2-blocks-with-class.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs"></div><div class="header"></div>');
    });
    it(" 'Tabs' block with 'additionalClass' class", function (): void {
        const file = loadFile("/beml-examples/block/block-with-2-classes.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs additionalClass"></div>');
    });
    xit("Should throw error if Beml source is invalid", () => {
        const file = loadFile("/beml-examples/invalid/beml-with-space.beml");
        const errorCheckWrapper = () => {
            bemifier.compileSource(file);
        };
        expect(errorCheckWrapper).toThrowError("Source BEML is invalid");
    });
});