import { AlumniStore } from "./alumnistores"
import { ImageRoll } from "./imageroll"
import { ToggleButton } from "./toggleButton"
import { BackHome } from "./backhome"

import espiiLogo from '../../../assets/ESPII/ESPIISVG.svg';
//import eidesign from '../../../assets/eidesign.png';
// import lacard from '../../../assets/lacardLight.png';
import cog1 from '../../../assets/COGNITA/COGNITA1SVG.svg'
import cog2 from '../../../assets/COGNITA/COGNITA2SVG.svg'
import anatolia1 from '../../../assets/ANATOLIA/ANATOLIASVG1.svg'
import anatolia2 from '../../../assets/ANATOLIA/ANATOLIASVG2.svg'
import lis2 from '../../../assets/LIF/LIFSVG.svg'
import lis1 from '../../../assets/LIS/LISVG.svg'
import lan1 from '../../../assets/LNS/LNSVG.svg'
import lan2 from '../../../assets/LNF/LNFSVG.svg'

export class Carousel extends HTMLElement{
    constructor(imageSet=[],render = ''){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.renderer = render
        this.imageSet = imageSet
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
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
        
        return {
        "imagecontainer" : div,
        "toggleright" : toggleright,
        "toggleleft" : toggleleft,
        "one"   : new AlumniStore(`url(${cog2})`,"cognita.png","Cognita","http://cognitaconsultancy.com",cog1),
        "two"   : new AlumniStore(`url(${anatolia1}`,"anatolia.png","Anatolia Consultancy","https://anatoliaconsultancy.business.site",anatolia2),
        "three" : new AlumniStore( `url(${lis1})`,"lacardLight.png","International School","http://lis.sc.ke/nairobi/",lis2),
        "four" : new AlumniStore(  `url(${lan1})`,"lacardLight.png","Nairobi School","http://lightacademy.ac.ke/nairobi/",lan2),
        "five" : new AlumniStore(  `url(${espiiLogo})`,"espiilogo.png","Espii Iterface & Designs","https://bmscis.github.io/components/",""),
        "backhome": new BackHome()
        }
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render(this.renderer)
        return
    }
    render(val){
        switch(val){
            case "ALUMNI STORE":
                this.disconnectedCallback()
                this.setAttribute('store','')
                this.appendChild(this.components.backhome)
                var heading = document.createElement("h2")
                heading.innerHTML = "Get access to discounts if you are a member of the Alumni Association."
                this.appendChild(heading)
                let list = ["one","two","three","four","five"]
                var ul = document.createElement("ul")
                list.forEach(element => {
                    let li = document.createElement("li")
                    li.appendChild(this.components[element])
                    ul.appendChild(li)
                });
                this.appendChild(ul)
            return
            case "HOME":
                this.disconnectedCallback()
                this.removeAttribute('store','')
                var center = document.createElement("div")
                center.classList.add("centralcarousel")
                var heading = document.createElement('h1')
                heading.innerHTML = "Welcome to the Light Academy Alumni Association."
                center.appendChild(heading)
                center.appendChild(this.components.imagecontainer)
                this.appendChild(center)
            return
            default:
                var center = document.createElement("div")
                center.classList.add("centralcarousel")
                var heading = document.createElement('h1')
                heading.innerHTML = "Welcome to the Light Academy Alumni Association."
                center.appendChild(heading)
                center.appendChild(this.components.imagecontainer)
                this.appendChild(center)
                return
        }
    }
    disconnectedCallback(){
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-carousel', Carousel);