import Widget from "../core/widget";
import BoxFit from "../property/boxfit";

type imageParams = {
    url?: string,
    asset?: string,
    height?: number,
    width?: number,
    fit?: BoxFit,
}

class Image extends Widget {
    private url?: string;
    private asset?: string;
    private height?: number;
    private width?: number;
    private fit?: BoxFit;

    constructor({ url, asset, height, width, fit }: imageParams){
        super({type:"Image"});
        this.url = url,
        this.asset = asset,
        this.fit = fit,
        this.height = height;
        this.width = width;
    }
}

export default Image;