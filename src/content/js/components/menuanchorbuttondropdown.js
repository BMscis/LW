import { MenuAnchorButton } from "./menuanchorbutton"
import { MenuAnchorDropDownButton } from "./menuanchordropdownbutton"

export class MenuAnchorButtonDropdown extends HTMLElement{
    constructor(text,dropdownList){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.text = text
        this.components = {}
        this.dropdownList = dropdownList
        this.setup()
        return
    }
    setup(){
        this.id = this.buttonId
        this.getComponents
        return
    }
    get buttonId(){
        let txt = this.text.replace(/\s+/g, '');
        let txtL = txt.toLowerCase()
        
        return txtL + `-dropdown`
    }
    get getComponents(){
        this.dropdownList.forEach(element => {
            this.components[element] = new MenuAnchorDropDownButton(element)
        });
        return
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        const ul = document.createElement("ul")
        for (const [key, value] of Object.entries(this.components)){
            const li = document.createElement("li")
            li.appendChild(value)
            ul.appendChild(li)
        }
        this.appendChild(ul)
        return
    }
    disconnectedCallback(){
        const childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-menuanchorbuttondropdown',MenuAnchorButtonDropdown);