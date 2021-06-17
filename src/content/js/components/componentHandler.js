import { SideBar } from "../sidbar";
import { Carousel } from "./carousel";
import { MainMenu } from "./mainmenu";
import { Stories } from "./stories";

import ag from "../../../assets/ANNUALGALA2019.jpg"
import ag2 from "../../../assets/ANNUALGALA20192.jpg"
import ag3 from "../../../assets/FOOTBALLTOURNAMENT2019.jpg"
import ag4 from "../../../assets/FOOTBALLTOURNAMENT2020.jpg"
import ag5 from "../../../assets/IFTAR2018.jpg"
import ag6 from "../../../assets/IGCSEREUNIONOLDOFFICE.jpg"
import ag7 from "../../../assets/SATURDAYFOOTBALLMATCHES.jpg"
import { ScrollLedger } from "../Classes/scrolledger";
import { Calendar } from "./calendar";
export class ComponentHandler extends HTMLElement{
    constructor(renderCarousel = ''){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.renderCarousel = renderCarousel
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents
        this.scrolledger = new ScrollLedger()
        window.addEventListener("resize", e=>{
            this.checkMainMenu()
        })
    }
    checkMainMenu(){
        switch(window.innerWidth < 650){
            case true:
                this.components.mainmenu.replaceChild(
                    this.components.sidebar,
                    this.components.mainmenu.components.menuanchor
                    )
                    this.setAttribute("mobi",'')
            return
            case false:
                if(this.hasAttribute("mobi")){
                    this.components.mainmenu.replaceChild(
                        this.components.mainmenu.components.menuanchor,
                        this.components.sidebar
                        )
                        this.removeAttribute("mobi")
                }
                return
        }
    }
    get getComponents(){
        this.components["calendar"] = new Calendar()
        this.components["stories"] = new Stories()
        this.components["mainmenu"] = new MainMenu()
        this.components["carousel"] = new Carousel(
            [[ag,"Annual Gala 2019"],
            [ag2,"Annual Gala 2019"],
            [ag3,"Football Tournament 2019"],
            [ag4,"Football Tournament 2020"],
            [ag5,"Iftar 2018"],
            [ag6,"IGCSE Reunion"],
            [ag7,"Saturday Football Matches"]],
            this.renderCarousel
        )
        this.components["sidebar"] = new SideBar(this.components.mainmenu.components.menuanchor)
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        this.checkMainMenu()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        this.appendChild(this.components.mainmenu)
        this.appendChild(this.components.carousel)
        this.appendChild(this.components.stories)
        this.appendChild(this.components.calendar)

        
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-componenthandler', ComponentHandler);