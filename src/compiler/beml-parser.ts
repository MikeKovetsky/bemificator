import {BEML, StringHelpers} from "../string-helpers/string-helpers";
import {BemBlock} from "./bem-instances/bem-block";
import {BemElem} from "./bem-instances/bem-elem";
import {BemlValidator} from "../beml-validator/beml-validator";
import {BemModifier} from "./bem-instances/bem-modifier";

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
        const rawElements = rawBlockLines.slice(1);
        const blockElements = rawElements.map((elemToken) => this.buildBemElement(elemToken));
        return new BemBlock(blockToken, blockElements);
    }

    private buildBemElement(elemToken: string): BemElem {
        const preparedElemToken = this.stripIndentation(elemToken);
        const modifiersTokens = this.extractModifiers(preparedElemToken);
        const elemTokenWithNoModifiers = this.removeModifiersFromElementToken(preparedElemToken, modifiersTokens);
        return new BemElem(elemTokenWithNoModifiers, modifiersTokens.map(m => new BemModifier(m)));
    }

    private stripIndentation(sourceLine: string): string {
        const specialSymbolsRE = /\t/g;
        return sourceLine.replace(specialSymbolsRE, "").trim();
    }

    private removeModifiersFromElementToken(elemToken: string, modifiers: string[]): string {
        const bemlModifiers = modifiers.map(m => "[" + m + "]").join();
        return elemToken.replace(bemlModifiers, "");
    }

    private extractModifiers(elemToken: string): string[] {
        // const strInSquareBrackets: RegExp = /\[(.*?)]/;
        const strInSquareBrackets: RegExp = /(?<=\[).+?(?=])/;
        return elemToken.match(strInSquareBrackets) || [];
    }

    private validateBemlSource(source: BEML): void {
        const isBemlValid = BemlValidator.validate(source);
        if (!isBemlValid) {
            throw new SyntaxError("Source BEML is invalid");
        }
    }
}