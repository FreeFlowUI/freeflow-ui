import Widget from "../core/widget";
import { CrossAxisAlignment, MainAxisAlignment } from "../property";

type ColumnParams = {
    mainAxisAlignment?:MainAxisAlignment,
    crossAxisAlignment?:CrossAxisAlignment,
    children: Widget[],
};

class Column extends Widget {
    private mainAxisAlignment:MainAxisAlignment;
    private crossAxisAlignment:CrossAxisAlignment;
    private children: Widget[];

    constructor({ mainAxisAlignment, crossAxisAlignment, children }: ColumnParams){
        super({type:"Column"});
        this.mainAxisAlignment = mainAxisAlignment ?? MainAxisAlignment.center;
        this.crossAxisAlignment = crossAxisAlignment ?? CrossAxisAlignment.center;
        this.children = children;
    }
}

export default Column;