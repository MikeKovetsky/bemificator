exports.Helpers = {
    isFirstSymbolUppercase(str) {
        if (str.length === 0) {
            throw new Error('string cannot be empty');
        }
        const first = str.charAt(0);
        return first === first.toUpperCase();
    },

    lowerCaseFirstLetter(str) {
        return str.charAt(0).toLowerCase() + str.slice(1);
    }
};