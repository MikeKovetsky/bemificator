import {BEML, HTML} from "../string-helpers/string-helpers";

export abstract class CompilerStrategy {
    public abstract compile(source: BEML): HTML;
    public abstract isUsed(source: BEML): boolean;
}