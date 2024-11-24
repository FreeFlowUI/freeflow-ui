import Property from "../core/property";

class CrossAxisAlignment extends Property{
    private value:string;
    constructor(value: string){
        super({type:"CrossAxisAlignment"});
        this.value = value;
    }

    static center:CrossAxisAlignment = new CrossAxisAlignment("center");
    static expand:CrossAxisAlignment = new CrossAxisAlignment("expand");
    static start:CrossAxisAlignment = new CrossAxisAlignment("start");
    static end:CrossAxisAlignment = new CrossAxisAlignment("end");
    static stretch:CrossAxisAlignment = new CrossAxisAlignment("stretch");
    static baseline:CrossAxisAlignment = new CrossAxisAlignment("baseline");
}

export default CrossAxisAlignment;