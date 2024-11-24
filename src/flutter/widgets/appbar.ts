import Widget from "../core/widget";
import {Color} from "../property";

type AppBarParams = {
    child: Widget,
    backgroundColor?:Color,
};

class AppBar extends Widget {
    private child: Widget;
    private backgroundColor?:Color;
    constructor({child, backgroundColor}: AppBarParams){
        super({type:"AppBar"});
        this.child = child;
        this.backgroundColor = backgroundColor;
    }
};

export default AppBar;