import {HTML} from "../string-helpers/string-helpers";
import {BemBlock} from "./bem-instances/bem-block";
import {CompilerAction} from "./compiler-actions/compiler-action";
import {BuildElemAction} from "./compiler-actions/build-elem-action";
import {OpenBlockAction} from "./compiler-actions/open-block-action";
import {EndBlockAction} from "./compiler-actions/end-block-action";

export class BemlCompiler {

    public compile(bemBlocks: BemBlock[]): HTML[] {
        return bemBlocks.map(block => this.compileBlock(block));
    }

    private compileBlock(bemBlock: BemBlock): HTML {
        const compilerActions: CompilerAction[] = this.buildBlockActions(bemBlock);
        const compiledHTML = compilerActions.map(a => a.compile());
        return compiledHTML.join(""); // todo: move logic to htmlFormatter
    }

    private buildBlockActions(bemBlock: BemBlock): CompilerAction[] {
        const blockTokenCompilerAction = new OpenBlockAction(bemBlock);
        const elemsCompilerActions = bemBlock.childrenElements.map(
            (elem) => new BuildElemAction(elem, bemBlock),
        );
        const blockEndingAction = new EndBlockAction(bemBlock);
        return [
            blockTokenCompilerAction,
            ...elemsCompilerActions,
            blockEndingAction,
        ];
    }

}