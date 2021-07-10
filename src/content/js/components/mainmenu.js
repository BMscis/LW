import { LoginRegister } from "./loginregister"
import { Logo } from "./logo"
import { MenuAnchor } from "./menuanchor"

export class MainMenu extends HTMLElement{
    constructor(){
        super()
        //console.log(`${this.nodeName} has been constructed` )
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
    }
    get getComponents(){
        return {
        "logo" : new Logo(),
        "menuanchor": new MenuAnchor(),
        "user" : new LoginRegister(),
    }
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        //this.appendChild(this.components.logo)
        this.appendChild(this.components.menuanchor)
        //this.appendChild(holder)
        
        return
    }
    disconnectedCallback(){
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )
        return
    }
}
customElements.define('la-mainmenu', MainMenu);