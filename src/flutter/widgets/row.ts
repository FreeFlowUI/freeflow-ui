import Widget from "../core/widget";
import {MainAxisAlignment, CrossAxisAlignment} from "../property"


type rowParams = {
    mainAxisAlignment?:MainAxisAlignment,
    crossAxisAlignment?:CrossAxisAlignment,
    children: Widget[],
};

class Row extends Widget {
    private mainAxisAlignment:MainAxisAlignment;
    private crossAxisAlignment:CrossAxisAlignment;
    private children: Widget[];

    constructor({ mainAxisAlignment, crossAxisAlignment, children }: rowParams){
        super({type:"Row"});
        this.mainAxisAlignment = mainAxisAlignment ?? MainAxisAlignment.center;
        this.crossAxisAlignment = crossAxisAlignment ?? CrossAxisAlignment.center;
        this.children = children;
    }
}

export default Row;