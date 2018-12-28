import {IBemifierConfig} from "./bemifier-config.model";
import {BEML, HTML, StringHelpers} from "./string-helpers/string-helpers";
import {BemlCompiler} from "./compiler/beml-compiler";

export class Bemifier {
    public config: IBemifierConfig;

    constructor(config: IBemifierConfig) {
        this.config = config;
    }

    public compileSource(bemlSource: BEML): HTML {
        const lexemeSeparators = ["\n", "."];
        const lines = StringHelpers.splitBySeparators(bemlSource, lexemeSeparators);
        const htmlLines = lines.map(bemlLine => this.compileLine(bemlLine));
        return htmlLines.join("");
    }

    private compileLine(bemlLine: BEML): HTML {
        return BemlCompiler.compile(bemlLine);
    }
}
