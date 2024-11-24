import Property from "../core/property";

type ColorParams = {
    value?:string
};

class Color extends Property{
    private value?: string;
    constructor({value}: ColorParams){
        super({type: "Color"});
        this.value = value;
    }
}

export default Color;