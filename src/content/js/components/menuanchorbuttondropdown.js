import { MenuAnchorButton } from "./menuanchorbutton"

export class MenuAnchorButtonDropdown extends HTMLElement{
    constructor(dropdownList){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.dropdownList = dropdownList
        this.setup()

    }
    setup(){
        this.getComponents
    }
    drop(){
        this.animate([
            {transform: "translateY(1045px)"}
        ],
        {
            duration:650,
            fill:'forwards',
            easing:'cubic-bezier(.39,.11,.61,.84)'
        }
        )
    }
    fold(){
        this.animate([
            {transform: "translateY(1020px)"}
        ],
        {
            duration:650,
            fill:'forwards',
            easing:'cubic-bezier(.39,.11,.61,.84)'
        }
        )
    }
    get getComponents(){
        this.dropdownList.forEach(element => {
            this.components[element] = new MenuAnchorButton(element,false,[])
        });
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
        for (const [key, value] of Object.entries(this.components)){
            this.appendChild(value)
        }
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-menuanchorbuttondropdown',MenuAnchorButtonDropdown);