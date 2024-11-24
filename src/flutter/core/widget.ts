interface WidgetParams {
    type?:string
}

class Widget{
    public type: string;

    constructor({type}: WidgetParams){
        this.type = type ?? "unknown";
    }
}

export default Widget;