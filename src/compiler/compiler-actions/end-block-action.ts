import {BemBlock} from "../bem-instances/bem-block";
import {CompilerAction} from "./compiler-action";
import {HTML} from "../../string-helpers/string-helpers";

export class EndBlockAction extends CompilerAction<BemBlock> {

    public compile(): HTML {
        return `</div>`;
    }
}