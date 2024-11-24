import Property from "../core/property";

class Axis extends Property {
    private value:string;
    constructor(value:string){
        super({type:"Axis"});
        this.value = value;
    }
    static vertical = new Axis("vertical");
    static horizontal = new Axis("horizontal");
}

export default Axis;