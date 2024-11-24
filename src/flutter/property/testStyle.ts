import Property from "../core/property";
import Color from "./color";

type TextStyleParams = {
    fontSize?:number;
    color?:Color;
    fontWeight?: number;
};

class TextStyle extends Property {
    private fontSize?:number;
    private color?:Color;
    private fontWeight?: number;

    constructor({ fontSize, fontWeight, color }: TextStyleParams){
        super({type:"TextStyle"});
        this.color = color;
        this.fontSize = fontSize;
        this.fontWeight = fontWeight;
    }
}

export default TextStyle;