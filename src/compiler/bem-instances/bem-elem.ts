import {BemInstance} from "./bem-instance";
import {BemModifier} from "./bem-modifier";

export class BemElem extends BemInstance {
    public modifiers: BemModifier[];

    constructor(token: string, modifiers: BemModifier[]) {
        super(token);
        this.modifiers = modifiers;
    }

}