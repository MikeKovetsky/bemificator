export type HTML = string;
export type BEML = string;

export class StringHelpers {
    static isFirstSymbolUppercase(str: string): boolean {
        if (str.length === 0) {
            throw new Error('string cannot be empty');
        }
        const first = str.charAt(0);
        return first === first.toUpperCase();
    }

    static lowerCaseFirstLetter(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    static splitBySeparators(str: string, tokens: string[]): string[] {
        const tempChar = tokens[0]; // We can use the first token as a temporary join character
        for (let i = 1; i < tokens.length; i++) {
            str = str.split(tokens[i]).join(tempChar);
        }
        return str.split(tempChar);
    }
}