const HELPERS = require('./helpers.js').Helpers;

const TranslilationStrategiesEnum = {
    Block: 'Block',
};
const TranslilationStrategies = {
    Block: transpileBlock,
};

function transpileBlock(bemlSource) {
    const htmlClass = HELPERS.lowerCaseFirstLetter(bemlSource);
    return `<div class="${htmlClass}"></div>`;
}

exports.Bemifier = class {
    constructor(config) {
        this.config = config;
    }

    transpileSource(bemlSource) {
        const lexemeSeparators = ['\n', '.'];
        const lines = HELPERS.splitBySeparators(bemlSource, lexemeSeparators);
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
            case HELPERS.isFirstSymbolUppercase(lexeme): return TranslilationStrategiesEnum.Block;
            default: throw new Error('Transpilation strategy is not implemented');
        }
    }
};
