import Color from "../property/color";
import Widget from "../core/widget";
import TextStyle from "../property/testStyle";

type TextParams = {
    value: string,
    textStyle?: TextStyle,
};

class Text extends Widget {
    private value: string;
    private textStyle?: TextStyle

    constructor({value, textStyle}: TextParams){
        super({type: "Text"});
        this.value = value;
        this.textStyle = textStyle;
    }
}

export default Text;