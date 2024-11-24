type propertyParams = {
    type?:string
};

class Property {
    private type: string;
    constructor( {type}: propertyParams ){
        this.type = type ?? "unknown";
    }
}

export default Property;