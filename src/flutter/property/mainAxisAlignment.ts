import Property from "../core/property";

class MainAxisAlignment extends Property{
    private value:string;
    constructor(value: string){
        super({type:"MainAxisAlignment"});
        this.value = value;
    }

    static center:MainAxisAlignment = new MainAxisAlignment("center");
    static spaceBetween:MainAxisAlignment = new MainAxisAlignment("spaceBetween");
    static spaceAround:MainAxisAlignment = new MainAxisAlignment("spaceAround");
    static spaceEvenly:MainAxisAlignment = new MainAxisAlignment("spaceEvenly");
    static start:MainAxisAlignment = new MainAxisAlignment("start");
    static end:MainAxisAlignment = new MainAxisAlignment("end");
}

export default MainAxisAlignment;