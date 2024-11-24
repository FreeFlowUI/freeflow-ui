import AppBar from "./appbar";
import Widget from "../core/widget";

type ScaffolParams = {
    appBar: AppBar,
    body: Widget,
};

class Scaffold extends Widget{
    private appBar: AppBar;
    private body : Widget;

    public constructor( {appBar, body}: ScaffolParams){
        super({ type:"Scaffold"});
        this.appBar = appBar;
        this.body = body;
    }
}

export default Scaffold;