import {CompilerAction} from "./compiler-action";
import {BemElem} from "../bem-instances/bem-elem";
import {HTML, StringHelpers} from "../../string-helpers/string-helpers";
import {BemBlock} from "../bem-instances/bem-block";

export class BuildElemAction extends CompilerAction<BemElem> {
    private readonly elementSeparator: string = "__"; // todo: move to config
    private readonly activeBlock: BemBlock;

    constructor(bemElem: BemElem, activeBlock: BemBlock) {
        super(bemElem);
        this.activeBlock = activeBlock;
    }

    public compile(): HTML {
        const htmlClass = this.activeBlock.token + this.elementSeparator + this.bemInstance.token;
        const preparedHtmlClass = StringHelpers.lowerCaseFirstLetter(htmlClass);
        return `<div class="${preparedHtmlClass}"></div>`;
    }
}