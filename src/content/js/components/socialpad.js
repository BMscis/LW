import twitter from "../../../assets/social/twitter.png"
import instagram from "../../../assets/social/instagram.png"
import facebook from "../../../assets/social/facebook.png"
import { SocialButton } from "./socialbutton"
export class SocialPad extends HTMLElement{
    constructor(){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.id = this.nodeName.toLowerCase()
        this.components = this.getComponents
        return
    }
    get getComponents(){
        return {
            "twitter": new SocialButton(twitter),
            "instagram": new SocialButton(instagram),
            "facebook": new SocialButton(facebook),
        }
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.twitter.components.input)
        this.appendChild(this.components.instagram.components.input)
        this.appendChild(this.components.facebook.components.input)
        this.appendChild(this.components.instagram.components.label)
        this.appendChild(this.components.twitter.components.label)
        this.appendChild(this.components.facebook.components.label)
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
customElements.define('la-socialpad', SocialPad);