import { BemifierConfig } from "./bemifier-config.model";
import { TranspilationStrategies, TranspilationStrategiesEnum } from "./transpilation-strategies";
import { BEML, HTML, StringHelpers } from "./string-helpers/string-helpers";

export class Bemifier {
    config: BemifierConfig;

    constructor(config: BemifierConfig) {
        this.config = config;
    }

    transpileSource(bemlSource: BEML): HTML {
        const lexemeSeparators = ['\n', '.'];
        const lines = StringHelpers.splitBySeparators(bemlSource, lexemeSeparators);
        const htmlLines = lines.map(bemlLine => this.transpileLine(bemlLine));
        return htmlLines.join('');
    }

    private transpileLine(bemlLine: BEML): HTML {
        const strategy = this.defineTranspilationStrategy(bemlLine);
        const htmlLine = TranspilationStrategies[strategy](bemlLine);
        return htmlLine;
    }

    private  defineTranspilationStrategy(lexeme): TranspilationStrategiesEnum {
        switch (true) {
            case StringHelpers.isFirstSymbolUppercase(lexeme): return 'Block';
            default: throw new Error('Transpilation strategy is not implemented');
        }
    }
};
