import { TextContainer } from "./textcontainer"
import { aboutushtml } from "../../html/aboutushtml"
import { clubs } from "../../html/clubs"
import { missionAndVision } from "../../html/missionandvision"
const filereader = new FileReader()
export class AboutContainer extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()

    }
    setup(){
        this.components = this.getComponents
    }
    get getComponents(){
        return {
            "aboutus": new TextContainer("aboutus",aboutushtml()),
            "clubs": new TextContainer("clubs",clubs()),
            "mission": new TextContainer("missionandvision",missionAndVision())
        }
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
    render(val){
        switch(val){
            case "CLUBS":
                this.disconnectedCallback()
                this.appendChild(this.components.clubs)
                return
            case "MISSION AND VISION":
                this.disconnectedCallback()
                this.appendChild(this.components.mission)
                return
            case "CONTITUTION":
                this.disconnectedCallback()
                this.appendChild(this.components.constitution)
                return
            case "ABOUTUS":
                this.disconnectedCallback()
                this.appendChild(this.components.aboutus)
                return
            default:
                this.disconnectedCallback()
                this.appendChild(this.components.aboutus)
                return
        }
    }
    disconnectedCallback(){
        let childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-aboutcontainer', AboutContainer);