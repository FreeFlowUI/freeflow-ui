import Property from "../core/property";

type EdgeInsetsParams  = {
    l:number,
    t:number,
    r:number,
    b:number,
};

class EdgeInsets extends Property{
    private l: number;
    private t: number;
    private r: number;
    private b: number;

    constructor({ l,t,r,b }: EdgeInsetsParams){
        super({type:"EdgeInsets"});
        this.l = l;
        this.t = t;
        this.r = r;
        this.b = b;
    }
}

export default EdgeInsets;