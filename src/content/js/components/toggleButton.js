//import { Dimensions } from "../../Classes/spacemaps/dimensions"

import { ScrollLedger } from "../Classes/scrolledger"

//import btnGradient from '../../assets/svg/buttonGradient.gif'
export class ToggleButton extends HTMLElement {
    constructor(direction) {
        super()
        console.log(`${this.nodeName} has been constructed` )                                                                             
        this.direction = direction
        //this.shadow = this.attachShadow({ mode: 'open' })
        this.setup()
    }
    static get observedAttributes() {
        return ['']
    }
    get styleTemplate() {
        return `
            <style>
            es-toggle{
                cursor: pointer;
                position: absolute;
                top:50%;
                transform: scale(var(--ggs,1));
                border-image-slice: 8;
                border-image-width: 7px;
                transition: 0.5s ease;
                z-index:2;
            }
            es-toggle[prev]{
                transform-origin: right;
                left:30%;
            }
            es-toggle[next]{
                transform-origin: right;
                right:30%;
            }
            es-toggle::before{
                content: "";
                position: absolute;
                transform: scale(var(--ggs,1)) rotate(45deg);
                width: calc(78vh * 0.05);
                height: calc(78vh * 0.05);
                border-radius: 100px;
                cursor: pointer;
                border-image-width: 2px;
            }
            es-toggle::after{
                content: "";
                box-sizing: border-box;
                position: absolute;
                width: calc(78vh * 0.05);
                height: calc(78vh * 0.05);

                border-radius:25%;
            }

            es-toggle[prev]::after{
                border-bottom: 7px inset;
                border-left: 7px solid white;
                transform: rotate(45deg);
            }
            es-toggle[next]::after{
                border-bottom: 7px inset;
                border-right: 7px solid white;
                transform: rotate(-45deg);
            }

            es-toggle[hide]{
                display:none;
            }
            es-toggle:hover{
                transform: scaleY(1.5) scaleX(2);
            }
            </style>
        `
    }
     setup(){
         this.scrolledger = new ScrollLedger()
         this.addEventListener('click', e=>{
             window.ComponentHandler.scrolledger.toggleScroll("la-imageroll",this.direction)
         })
    //     this.dimension = new Dimensions()
    //     this.dimension.toggleSetup
        // window.addEventListener('resize', e => {
        //     //this.resize()
        // })
        // this.addEventListener('orientationchange', e => {
        //     this.setup()
        //     //this.visibility()
        //     this.render()
        // })
        // this.addEventListener('click', e => {
        //     console.log()
        //     var story = document.querySelector('es-carousel').shadow.querySelector('es-story[active]')
        //     switch (this.hasAttribute('prev')) {
        //         case true:
        //             if (story.previousElementSibling.nodeName == 'ES-STORY') {
        //                 if (story.previousElementSibling) {
        //                     story.active = false
        //                     story.previousElementSibling.active = true
        //                     var stories = document.querySelector('es-carousel').shadow.querySelectorAll('es-story')
        //                     stories.forEach(element => {
        //                         element.next("left")
        //                     });
        //                 }
        //             }
        //             return
        //         case false:
        //             if (story.nextElementSibling.nodeName == 'ES-STORY') {
        //                 if (story.nextElementSibling) {
        //                     story.active = false
        //                     story.nextElementSibling.active = true
        //                     var stories = document.querySelector('es-carousel').shadow.querySelectorAll('es-story')
        //                     stories.forEach(element => {
        //                         element.next("right")
        //                     });
        //                     //story.nextElementSibling.translateX('right')
        //                 }
        //             }
        //             return
        //     }
        // })
    }
    resize(){
        //this.dimension.toggleSetup        
        //this.visibility()
        this.render()
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )                                                                             

        //this.visibility()

        this.render()
        this.setAttribute(this.direction, '')
    }
    visibility() {
        switch(window.Espii.mobile)
        {
            case true:
                return this.toggleAttribute("hide",false)
            case false:
                return this.toggleAttribute("hide",false)
        }
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" ) 
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }

    render() {
        return this.innerHTML = `
        `
    }
}
customElements.define(`es-toggle`, ToggleButton);
