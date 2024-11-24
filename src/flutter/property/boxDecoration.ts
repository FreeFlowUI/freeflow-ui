import Property from "../core/property";
import Color from "./color";

type decorationParams = {
    color: Color,
    borderRadius: number,
};

class BoxDecoration extends Property {
    private color: Color;
    private borderRadius: number;
    constructor({ color, borderRadius }: decorationParams){
        super({type:"BoxDecoration"});
        this.borderRadius = borderRadius;
        this.color = color;
    }
}

export default BoxDecoration;