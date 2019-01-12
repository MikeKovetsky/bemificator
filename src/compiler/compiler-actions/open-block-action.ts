import {CompilerAction} from "./compiler-action";
import {BemBlock} from "../bem-instances/bem-block";
import {HTML, StringHelpers} from "../../string-helpers/string-helpers";

export class OpenBlockAction extends CompilerAction<BemBlock> {
    private readonly classSeparator: string = "."; // todo: move to config

    public compile(): HTML {
        const htmlClassList = this.getClassList(this.bemInstance.token);
        return `<div class="${htmlClassList}">`;
    }

    private getClassList(rawClassList: string): string {
        const classes = rawClassList.split(this.classSeparator).join(" ");
        return StringHelpers.lowerCaseFirstLetter(classes);
    }
}