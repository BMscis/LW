import { Carousel } from "./carousel";
import { Stories } from "./stories";

import ag from "../../../assets/ANNUALGALA2019.webp"
import ag2 from "../../../assets/ANNUALGALA20192.webp"
import ag3 from "../../../assets/FOOTBALLTOURNAMENT2019.jpg"
import ag4 from "../../../assets/FOOTBALLTOURNAMENT2020.webp"
import ag5 from "../../../assets/IFTAR2018.jpeg"
import ag6 from "../../../assets/IGCSEREUNIONOLDOFFICE.jpg"
import ag7 from "../../../assets/SATURDAYFOOTBALLMATCHES.jpg"
import { ScrollLedger } from "../Classes/scrolledger";
import { Calendar } from "./calendar";
import { AboutContainer } from "./aboutlaacontainer";
import { Social } from "./social";
import { MainMenuContainer } from "./mainmenucontainer";
export class ComponentHandler extends HTMLElement{
    constructor(renderCarousel = ''){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.renderCarousel = renderCarousel
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        this.scrolledger = new ScrollLedger()
        window.addEventListener("resize", e=>{
        })
        return
    }
    get getComponents(){
        return {
        "calendar" : new Calendar(),
        "stories" : new Stories(),
        "mainmenu" : new MainMenuContainer(),
        "carousel" : new Carousel([[ag,"Annual Gala 2019"],[ag2,"Annual Gala 2019"],[ag3,"Football Tournament 2019"],[ag4,"Football Tournament 2020"],[ag5,"Iftar 2018"],[ag6,"IGCSE Reunion"],[ag7,"Saturday Football Matches"]],this.renderCarousel),
        "aboutcontainer" : new AboutContainer(),
        "social" : new Social()
        }
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.mainmenu)
        this.appendChild(this.components.carousel)
        this.appendChild(this.components.aboutcontainer)
        this.appendChild(this.components.social)
        //this.appendChild(this.components.stories)
        //this.appendChild(this.components.calendar)
        return
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
customElements.define('la-componenthandler', ComponentHandler);