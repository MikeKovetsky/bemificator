
// const BASIC_CONFIG = { "source": "/spec/beml-examples/block.beml" };
import { Bemifier } from "../src/bemifier";

import * as fs from "fs";
import * as path from "path";

const BASIC_CONFIG = {};
const bemifier = new Bemifier(BASIC_CONFIG);

describe("block parsing", function (): void {
    it(" 'Tabs' block", function (): void {
        const file = loadFile("/beml-examples/block-with-class.beml");
        expect(bemifier.transpileSource(file)).toBe('<div class="tabs"></div>');
    });
    it(" 'Tabs' and 'Header' block", function (): void {
        const file = loadFile("/beml-examples/2-blocks-with-class.beml");
        expect(bemifier.transpileSource(file)).toBe('<div class="tabs"></div><div class="header"></div>');
    });
});

function loadFile(relPath: string): string {
    return fs.readFileSync(path.join(__dirname, relPath), { encoding: "utf8" });
}