import {IBemifierConfig} from "./bemifier-config.model";
import {BEML, HTML, StringHelpers} from "./string-helpers/string-helpers";
import {BemlCompiler} from "./compiler/beml-compiler";

export class Bemifier {
    public config: IBemifierConfig;

    constructor(config: IBemifierConfig) {
        this.config = config;
    }

    public compileSource(bemlSource: BEML): HTML {
        // todo: move separators list to separate config of BEM instances
        // todo: bemInstancesSeparator list must be configurable vie Bemifier config
        const bemInstancesSeparator = ["\n"];
        // todo: move parsing to BemParser class
        const lines = StringHelpers.splitBySeparators(bemlSource, bemInstancesSeparator);
        const htmlLines = lines.map(bemlLine => this.compileLine(bemlLine));
        // todo: move html preparation logic to some HtmlPreparation class
        return htmlLines.join("");
    }

    private compileLine(bemlLine: BEML): HTML {
        return BemlCompiler.compile(bemlLine);
    }
}
