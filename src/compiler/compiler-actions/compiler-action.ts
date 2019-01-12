import {BemInstance} from "../bem-instances/bem-instance";
import {HTML} from "../../string-helpers/string-helpers";

export abstract class CompilerAction<Instance = BemInstance> {
    protected bemInstance: Instance;

    constructor(bemInstance: Instance) {
        this.bemInstance = bemInstance;
    }

    public abstract compile(): HTML;
}