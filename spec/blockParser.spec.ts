
// const BASIC_CONFIG = { "source": "/spec/beml-examples/block.beml" };
import { Bemifier } from "../src/bemifier";

import * as fs from "fs";
import * as path from "path";

const BASIC_CONFIG = {};
const bemifier = new Bemifier(BASIC_CONFIG);

describe("block parsing", function (): void {
    it(" 'Tabs' block with block class", function (): void {
        const file = loadFile("/beml-examples/block-with-class.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs"></div>');
    });
    it(" 'Tabs' and 'Header' with block classes", function (): void {
        const file = loadFile("/beml-examples/2-blocks-with-class.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs"></div><div class="header"></div>');
    });
    it(" 'Tabs' block with 'additionalClass' class", function (): void {
        const file = loadFile("/beml-examples/block-with-2-classes.beml");
        expect(bemifier.compileSource(file)).toBe('<div class="tabs additionalClass"></div>');
    });
});

function loadFile(relPath: string): string {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: "utf8" });
}