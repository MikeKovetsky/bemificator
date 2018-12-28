import {BEML, HTML, StringHelpers} from "../../string-helpers/string-helpers";
import {CompilerStrategy} from "../compiler-strategy";

export class BlockCompilerStrategy extends CompilerStrategy {
    public compile(source: BEML): HTML {
        const htmlClass = StringHelpers.lowerCaseFirstLetter(source);
        return `<div class="${htmlClass}"></div>`;
    }
    public isUsed(source: BEML): boolean {
        return StringHelpers.isFirstSymbolUppercase(source);
    }
}