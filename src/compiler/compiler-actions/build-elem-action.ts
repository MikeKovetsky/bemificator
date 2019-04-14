import {CompilerAction} from "./compiler-action";
import {BemElem} from "../bem-instances/bem-elem";
import {HTML, StringHelpers} from "../../string-helpers/string-helpers";
import {BemBlock} from "../bem-instances/bem-block";

export class BuildElemAction extends CompilerAction<BemElem> {
    private readonly elementSeparator: string = "__"; // todo: move to config
    private readonly modifierSeparator: string = "--"; // todo: move to config
    private readonly activeBlock: BemBlock;

    constructor(bemElem: BemElem, activeBlock: BemBlock) {
        super(bemElem);
        this.activeBlock = activeBlock;
    }

    public compile(): HTML {
        const htmlClass = this.buildHtmlClass(this.bemInstance);
        const preparedHtmlClass = StringHelpers.lowerCaseFirstLetter(htmlClass);
        return `<div class="${preparedHtmlClass}"></div>`;
    }

    private buildHtmlClass(elem: BemElem): string {
        const htmlClassRoot = this.activeBlock.token + this.elementSeparator + elem.token;
        if (elem.modifiers.length) {
            const modifiers = elem.modifiers;
            const modifiersClassSuffixes = modifiers.map(m => this.modifierSeparator + m.token);
            return htmlClassRoot + modifiersClassSuffixes.join();
        } else {
            return htmlClassRoot;
        }
    }
}