import { MenuAnchorButton } from "./menuanchorbutton"

export class MenuAnchor extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        var buttonHome = new MenuAnchorButton("HOME",true,[])
        var buttonAbout = new MenuAnchorButton("ABOUT LAAA",false,["MISSION AND VISION","CONSTITUTION","PARTNERSHIP","ABOUT US","CLUBS"])
        var buttonActivities = new MenuAnchorButton("ACTIVITIES",false,["EVENTS", "PROJECTS"])
        var buttonAlumniStories = new MenuAnchorButton("ALUMNI STORIES",false,[])
        var buttonGallery = new MenuAnchorButton("GALLERY",false,[])
        var buttonContact = new MenuAnchorButton("CONTACT US",false,[])

        this.components["home"] = buttonHome
        this.components["aboutlaa"] = buttonAbout
        this.components["activities"] = buttonActivities
        this.components["alumnistories"] = buttonAlumniStories
        this.components["buttongallery"] = buttonGallery
        this.components["buttoncontact"] = buttonContact
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
        this.appendChild(this.components.home)
        this.appendChild(this.components.aboutlaa)
        this.appendChild(this.components.activities)
        this.appendChild(this.components.alumnistories)
        this.appendChild(this.components.buttongallery)
        this.appendChild(this.components.buttoncontact)
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-menuanchor', MenuAnchor);