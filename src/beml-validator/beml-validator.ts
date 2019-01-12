import {BEML} from "../string-helpers/string-helpers";

export class BemlValidator {
    public static validate(source: BEML): boolean {
        const disallowedSymbols: string[] = [];
        return disallowedSymbols.every(s => !source.includes(s));
    }
}