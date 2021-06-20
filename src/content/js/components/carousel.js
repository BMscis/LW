import { AlumniStore } from "./alumnistores"
import { ImageRoll } from "./imageroll"
import { ToggleButton } from "./toggleButton"

import espiiLogo from '../../../assets/espiiforweb.svg';
import eidesign from '../../../assets/eidesign.png';
// import lacard from '../../../assets/lacardLight.png';
import cog1 from '../../../assets/cognita1.svg'
import cog4 from '../../../assets/cognita4s.svg'
import anatolia1 from '../../../assets/anatolia.svg'
import anatolia2 from '../../../assets/anatolia2.svg'
import lis2 from '../../../assets/LIS-FLAT.svg'
import lis1 from '../../../assets/Round-Logo-International.svg'
import lan1 from '../../../assets/Round-Logo-Academy.svg'
import lan2 from '../../../assets/LGS-flat.svg'

export class Carousel extends HTMLElement{
    constructor(imageSet=[],render = ''){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.renderer = render
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
        this.components["one"]   = new AlumniStore(cog1,"cognita.png","Cognita","http://cognitaconsultancy.com",cog4),
        this.components["two"]   = new AlumniStore(anatolia2,"anatolia.png","Anatolia Consultancy","https://anatoliaconsultancy.business.site",anatolia1),
        this.components["three"] = new AlumniStore(lis1,"lacardLight.png","Light Academy International School","http://lis.sc.ke/nairobi/",lis2)
        this.components["four"] = new AlumniStore(lan1,"lacardLight.png","Light Academy Nairobi School","http://lightacademy.ac.ke/nairobi/",lan2)
        this.components["five"] = new AlumniStore(espiiLogo,"espiilogo.png","Espii Iterface & Designs","https://bmscis.github.io/components/","")
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render(this.renderer)
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(val){
        switch(val){
            case "ALUMNI STORES":
                this.disconnectedCallback()
                this.setAttribute('store','')
                this.appendChild(this.components.one)
                this.appendChild(this.components.two)
                this.appendChild(this.components.three)
                this.appendChild(this.components.four)
                this.appendChild(this.components.five)
            return
            case "HOME":
                this.disconnectedCallback()
                this.removeAttribute('store','')
                var center = document.createElement("div")
                center.classList.add("centralcarousel")
                center.appendChild(this.components.imagecontainer)
                this.appendChild(center)
                this.appendChild(this.components.toggleleft)
                this.appendChild(this.components.toggleright)
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