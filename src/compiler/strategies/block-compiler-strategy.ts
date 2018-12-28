import {BEML, HTML, StringHelpers} from "../../string-helpers/string-helpers";
import {CompilerStrategy} from "../compiler-strategy";

export class BlockCompilerStrategy extends CompilerStrategy {
    private readonly classSeparator: string = ".";

    public compile(source: BEML): HTML {
        const htmlClassList = this.getClassList(source);
        return `<div class="${htmlClassList}"></div>`;
    }

    public isAppropriate(source: BEML): boolean {
        return StringHelpers.isFirstSymbolUppercase(source);
    }

    private getClassList(rawClassList: string): string {
        const classes = rawClassList.split(this.classSeparator).join(" ");
        return StringHelpers.lowerCaseFirstLetter(classes);
    }
}