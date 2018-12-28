import { BEML, HTML, StringHelpers } from "./string-helpers/string-helpers";

export type TranspilationStrategiesEnum = "Block";
type TranspilationFunction = (y: BEML) => HTML;

// todo: replace string by TranspilationStrategiesEnum when https://github.com/Microsoft/TypeScript/pull/26797 is merged
export const TRANSPILATION_STRATEGIES: {[x: string]: TranspilationFunction} = {
    Block: transpileBlock,
};

function transpileBlock(bemlSource: BEML): HTML {
    const htmlClass = StringHelpers.lowerCaseFirstLetter(bemlSource);
    return `<div class="${htmlClass}"></div>`;
}