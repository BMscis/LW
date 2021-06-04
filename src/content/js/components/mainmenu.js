import { Logo } from "./logo"
import { MenuAnchor } from "./menuanchor"

export class MainMenu extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed` )
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()
    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        var logo = new Logo()
        var menuanchor = new MenuAnchor()
        this.components["logo"] = logo
        this.components["menuanchor"] = menuanchor
        return
    }
    static get observedAttributes() {
        return [""]
    }

    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        this.appendChild(this.components.logo)
        this.appendChild(this.components.menuanchor)
        this.appendChild(document.createElement("div"))
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )
    }
}
customElements.define('la-mainmenu', MainMenu);