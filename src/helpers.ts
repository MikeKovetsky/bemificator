export class Helpers {
    static isFirstSymbolUppercase(str) {
        if (str.length === 0) {
            throw new Error('string cannot be empty');
        }
        const first = str.charAt(0);
        return first === first.toUpperCase();
    }

    static lowerCaseFirstLetter(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }

    static splitBySeparators(str, tokens) {
        const tempChar = tokens[0]; // We can use the first token as a temporary join character
        for (let i = 1; i < tokens.length; i++) {
            str = str.split(tokens[i]).join(tempChar);
        }
        str = str.split(tempChar);
        return str;
    }
}