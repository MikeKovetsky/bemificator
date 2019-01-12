import {BEML, HTML} from "../string-helpers/string-helpers";

export abstract class CompilationStrategy {
    public abstract compile(source: BEML): HTML;
}