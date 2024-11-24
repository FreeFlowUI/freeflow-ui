type actionParams = {
    type?:string
};

class Action {
    public type: string;
    constructor({type}: actionParams){
        this.type = type ?? "unknown";
    }
}

export default Action;