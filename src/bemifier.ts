import {IBemifierConfig} from "./bemifier-config.model";
import {TRANSPILATION_STRATEGIES, TranspilationStrategiesEnum} from "./transpilation-strategies";
import {BEML, HTML, StringHelpers} from "./string-helpers/string-helpers";

export class Bemifier {
    public config: IBemifierConfig;

    constructor(config: IBemifierConfig) {
        this.config = config;
    }

    public transpileSource(bemlSource: BEML): HTML {
        const lexemeSeparators = ["\n", "."];
        const lines = StringHelpers.splitBySeparators(bemlSource, lexemeSeparators);
        const htmlLines = lines.map(bemlLine => this.transpileLine(bemlLine));
        return htmlLines.join("");
    }

    private transpileLine(bemlLine: BEML): HTML {
        const strategy = this.defineTranspilationStrategy(bemlLine);
        const htmlLine = TRANSPILATION_STRATEGIES[strategy](bemlLine);
        return htmlLine;
    }

    private defineTranspilationStrategy(lexeme: string): TranspilationStrategiesEnum {
        switch (true) {
            case StringHelpers.isFirstSymbolUppercase(lexeme):
                return "Block";
            default:
                throw new Error("Transpilation strategy is not implemented");
        }
    }
}
