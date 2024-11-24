import Widget from "../core/widget";
import { EdgeInsets } from "../property";
import BoxDecoration from "../property/boxDecoration";

type containerParams = {
    padding?: EdgeInsets,
    margin?: EdgeInsets,
    decoration?: BoxDecoration,
    child?: Widget,
    height?: number,
    width?: number,
}

class Container extends Widget {
    private child?: Widget;
    private decoration?: BoxDecoration;
    private padding?: EdgeInsets;
    private margin?: EdgeInsets;
    private height?: number;
    private width?: number;

    constructor({padding, margin, decoration, child, height, width}: containerParams){
        super({type:"Container"});
        this.padding = padding;
        this.decoration = decoration;
        this.child = child;
        this.margin = margin;
        this.height = height;
        this.width = width;
    }
}

export default Container;