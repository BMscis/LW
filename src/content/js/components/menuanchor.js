import { MenuAnchorButton } from "./menuanchorbutton"
import { MenuButton } from "./menubutton"

export class MenuAnchor extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
    }
    dropdownId(val){
        let txt = val.replace(/\s+/g, '');
        let txtL = txt.toLowerCase()
        
        return txtL + `-dropdown`
    }
    set toggleDropDown(val) {
        var value = this.dropdownId(val)
        return this.setAttribute("dropdown",value)
    }
    get getComponents(){
        var componentList = []
        var buttonAbout = new MenuAnchorButton("About Alumni",false,["Mission & Vision","Constitution","Partnership","About Us","Clubs","Contact Us"])
        componentList.push(buttonAbout)
        var buttonActivities = new MenuAnchorButton("Activities",false,["Events", "Projects"])
        componentList.push(buttonActivities)
        var buttonAlumniStore = new MenuAnchorButton("Alumni Store",false,[])
        componentList.push(buttonAlumniStore)
        var buttonSocial = new MenuAnchorButton("Social",false,[])
        componentList.push(buttonSocial)
        var ul = document.createElement('ul')
        ul.id = "anchorbuttons"
        for(let i = 0; i < 4; i++){
            let li = document.createElement("li")
            li.appendChild(componentList[i])
            ul.appendChild(li)
        }
        
        return {
            "ul":ul,
            "aboutalumni":buttonAbout,
            "activities":buttonActivities,
            "menubutton":new MenuButton()
        }
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.menubutton)
        this.appendChild(this.components.ul)
        //this.appendChild(this.components.aboutalumni.components.dropdown)
        //this.appendChild(this.components.activities.components.dropdown)
        return
        }
    disconnectedCallback(){
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-menuanchor', MenuAnchor);