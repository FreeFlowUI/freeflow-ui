import Property from "../core/property";

class BoxFit extends Property {
    private value: string;
    constructor(value: string){
        super({ type: "BoxFit" });
        this.value = value;
    }

    static fill: BoxFit = new BoxFit("fill");
    static contain: BoxFit = new BoxFit("contain");
    static cover: BoxFit = new BoxFit("cover");
    static fitWidth: BoxFit = new BoxFit("fitWidth");
    static fitHeight: BoxFit = new BoxFit("fitHeight");
    static none: BoxFit = new BoxFit("none");
    static scaleDown: BoxFit = new BoxFit("scaleDown");
}

export default BoxFit;