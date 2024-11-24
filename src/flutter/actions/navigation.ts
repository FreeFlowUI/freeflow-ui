import { Action } from "../core"

type navigationParams = {
    path:string
}

class Navigation extends Action {
    private path:string;
    constructor({ path }: navigationParams){
        super({type:"navigation"});
        this.path = path;
    }
}

export default Navigation;