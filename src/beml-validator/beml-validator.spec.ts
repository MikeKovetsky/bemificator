import {BemlValidator} from "./beml-validator";

describe("BemlValidator", () => {
    it("should mark as invalid beml with space", () => {
        const beml = "Header Tabs";
        expect(BemlValidator.validate(beml)).toEqual(false);
    });
});