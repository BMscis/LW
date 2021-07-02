import { TextContainer } from "./textcontainer"
import { aboutushtml } from "../../html/aboutushtml"
import { clubs } from "../../html/clubs"
import { missionAndVision } from "../../html/missionandvision"
export class AboutContainer extends HTMLElement{
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
    get getComponents(){
        return {
            "aboutus": new TextContainer("aboutus",aboutushtml()),
            "clubs": new TextContainer("clubs",clubs()),
            "mission": new TextContainer("missionandvision",missionAndVision())
        }
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(val){
        switch(val){
            case "CLUBS":
                this.disconnectedCallback()
                this.appendChild(this.components.clubs)
                return
            case "MISSION & VISION":
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