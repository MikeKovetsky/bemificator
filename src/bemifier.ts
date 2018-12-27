import { Helpers } from "./helpers";

const TranslilationStrategiesEnum = {
    Block: 'Block',
};
const TranslilationStrategies = {
    Block: transpileBlock,
};

function transpileBlock(bemlSource) {
    const htmlClass = Helpers.lowerCaseFirstLetter(bemlSource);
    return `<div class="${htmlClass}"></div>`;
}

export class Bemifier {
    config: any;

    constructor(config) {
        this.config = config;
    }

    transpileSource(bemlSource) {
        const lexemeSeparators = ['\n', '.'];
        const lines = Helpers.splitBySeparators(bemlSource, lexemeSeparators);
        const htmlLines = lines.map(bemlLine => this._transpileLine(bemlLine));
        return htmlLines.join('');
    }

    _transpileLine(bemlLine) {
        const strategy = this._defineTranspilationStrategy(bemlLine);
        const htmlLine = TranslilationStrategies[strategy](bemlLine);
        return htmlLine;
    }

    _defineTranspilationStrategy(lexeme) {
        switch (true) {
            case Helpers.isFirstSymbolUppercase(lexeme): return TranslilationStrategiesEnum.Block;
            default: throw new Error('Transpilation strategy is not implemented');
        }
    }
};
