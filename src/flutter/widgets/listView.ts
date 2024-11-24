import Widget from "../core/widget";
import Axis from "../property/axis";

type ListViewParams = {
    scrollDirection?: Axis,
    reverse?: boolean,
    primary?: boolean,
    children: Widget[],
}

class ListView extends Widget {
    private scrollDirection: Axis;
    private reverse: boolean;
    private primary: boolean;
    private children : Widget[];

    constructor({ scrollDirection, reverse, primary, children }: ListViewParams){
        super({type:"ListView"});
        this.scrollDirection = scrollDirection ?? Axis.vertical;
        this.reverse = reverse ?? false;
        this.primary = primary ?? true;
        this.children = children;
    }
}
export default ListView;