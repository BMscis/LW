import { MenuButton } from "./components/menubutton"

export class SideBar extends HTMLElement{
    constructor(component){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = component.components
        this.setup()

    }
    setup(){
        this.getComponents
        this.components["menubutton"] = new MenuButton()

    }
    get getComponents(){
        var div = document.createElement('div')
        div.classList.add('backdropdiv')
        this.components["div"] = div
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
        this.appendChild(this.components.menubutton)
        this.components.div.appendChild(this.components.home)
        this.components.div.appendChild(this.components.aboutlaa)
        this.components.div.appendChild(this.components.activities)
        this.components.div.appendChild(this.components.alumnistories)
        this.components.div.appendChild(this.components.buttongallery)
        this.components.div.appendChild(this.components.buttoncontact)
        this.appendChild(this.components.div)
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-sidebar', SideBar);