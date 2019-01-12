import {IBemifierConfig} from "./bemifier-config.model";
import {BEML, HTML} from "./string-helpers/string-helpers";
import {BemlCompiler} from "./compiler/beml-compiler";
import {BemlParser} from "./compiler/beml-parser";

export class Bemifier {
    public config: IBemifierConfig;
    private compiler: BemlCompiler = new BemlCompiler();

    constructor(config: IBemifierConfig) {
        this.config = config;
    }

    public compileSource(bemlSource: BEML): HTML {
        const bemlParser = new BemlParser();
        const bemlLines = bemlParser.parse(bemlSource);
        const htmlLines: string[] = this.compiler.compile(bemlLines);
        // todo: move html preparation logic to some HtmlPreparation class
        return htmlLines.join("");
    }
}
