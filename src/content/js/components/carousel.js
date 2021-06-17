import { AlumniStore } from "./alumnistores"
import { ImageRoll } from "./imageroll"
import { ToggleButton } from "./toggleButton"

export class Carousel extends HTMLElement{
    constructor(imageSet=[]){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.imageSet = imageSet
        this.setup()

    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        var toggleright = new ToggleButton("next")
        var toggleleft = new ToggleButton("prev")
        var div = document.createElement("div")
        for(var i = 0; i < this.imageSet.length; i++){
            let img = document.createElement("div")
            img.style.backgroundImage = `url(${this.imageSet[i][0]})`
            let title = document.createElement("caption")
            title.innerHTML = this.imageSet[i][1]
            let imageroll = new ImageRoll(img,title)
            div.appendChild(imageroll)
        }
        div.classList.add("imagecontainer")
        this.components["imagecontainer"] = div
        this.components["toggleright"] = toggleright
        this.components["toggleleft"] = toggleleft
        this.components["alumnistore"] = new AlumniStore()
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
    render(val){
        switch(val){
            case "ALUMNI STORES":
                this.disconnectedCallback()
                this.appendChild(this.components.alumnistore)
                this.setAttribute("alumnistore",'')
            return
            default:
                var center = document.createElement("div")
                center.classList.add("centralcarousel")
                center.appendChild(this.components.imagecontainer)
                this.appendChild(center)
                this.appendChild(this.components.toggleleft)
                this.appendChild(this.components.toggleright)
                return
        }
    }
    get styledTemplate(){
        return `
        <style>
            la-carousel{
                width:${window.innerWidth + "px"};
                height:calc(${window.innerHeight}/0.45)px;
            }
        </style>
        `
    }
    disconnectedCallback(){
        var childCount = this.childElementCount
        for(let i = 0; i < childCount; i++){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-carousel', Carousel);