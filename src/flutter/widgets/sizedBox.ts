import Widget from "../core/widget";

type SizedBoxParams = {
    height?:number;
    width?:number;
}

class SizedBox extends Widget {
    private height?:number;
    private width?:number;
    constructor({ height, width }: SizedBoxParams){
        super({type:"SizedBox"});
        this.width = width;
        this.height = height;
    }
}

export default SizedBox;