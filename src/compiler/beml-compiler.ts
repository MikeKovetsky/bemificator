import {CompilerStrategy} from "./compiler-strategy";
import {BlockCompilerStrategy} from "./strategies/block-compiler-strategy";
import {BEML, HTML} from "../string-helpers/string-helpers";

const COMPILER_STRATEGIES: CompilerStrategy[] = [
    new BlockCompilerStrategy(),
];

export class BemlCompiler {

    public static compile(source: BEML): HTML {
        const strategy = COMPILER_STRATEGIES.find((s) => s.isUsed(source));
        if (strategy === undefined) {
            throw new Error("Compilation strategy was not found");
        }
        return strategy.compile(source);
    }
}