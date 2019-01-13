import {BEML, StringHelpers} from "../string-helpers/string-helpers";
import {BemBlock} from "./bem-instances/bem-block";
import {BemElem} from "./bem-instances/bem-elem";
import {BemlValidator} from "../beml-validator/beml-validator";

export class BemlParser {
    private readonly blockSeparatorRE: RegExp = /[^a-z](?=[A-Z])/;

    public parse(rawSource: BEML): BemBlock[] {
        this.validateBemlSource(rawSource);
        const rawBemlBlocks = rawSource.split(this.blockSeparatorRE);
        return rawBemlBlocks.map(rawBlock => this.buildBemBlock(rawBlock));
    }

    private buildBemBlock(rawBemlBlock: BEML): BemBlock {
        const rawBlockLines = StringHelpers.splitBySeparators(rawBemlBlock, ["\n"]);
        const blockToken = this.stripIndentation(rawBlockLines[0]);
        const blockElements = rawBlockLines.slice(1)
            .map(elemToken => this.stripIndentation(elemToken))
            .map(elemToken => new BemElem(elemToken));
        return new BemBlock(blockToken, blockElements);
    }

    private stripIndentation(sourceLine: string): string {
        const specialSymbolsRE = /\t/g;
        return sourceLine.replace(specialSymbolsRE, "").trim();
    }

    private validateBemlSource(source: BEML): void {
        const isBemlValid = BemlValidator.validate(source);
        if (!isBemlValid) {
            throw new SyntaxError("Source BEML is invalid");
        }
    }
}