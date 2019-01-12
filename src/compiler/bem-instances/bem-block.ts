import {BemInstance} from "./bem-instance";
import {BemElem} from "./bem-elem";

export class BemBlock extends BemInstance {
    public childrenElements: BemElem[];

    constructor(token: string, childrenElements: BemElem[]) {
        super(token);
        this.childrenElements = childrenElements;
    }
}