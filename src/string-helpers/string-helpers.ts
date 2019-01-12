export type HTML = string;
export type BEML = string;

export class StringHelpers {
    public static isFirstSymbolUppercase(str: string): boolean {
        if (str.length === 0) {
            throw new Error("string cannot be empty");
        }
        const first = str.charAt(0);
        return first === first.toUpperCase();
    }

    public static isFirstSymbolLowercase(str: string): boolean {
        if (str.length === 0) {
            throw new Error("string cannot be empty");
        }
        const first = str.charAt(0);
        return first === first.toLowerCase();
    }

    public static lowerCaseFirstLetter(str: string): string {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    public static splitBySeparators(str: string, tokens: string[]): string[] {
        const tempChar = tokens[0];
        for (let i = 1; i < tokens.length; i++) {
            str = str.split(tokens[i]).join(tempChar);
        }
        return str.split(tempChar);
    }
}