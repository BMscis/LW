import { SocialPad } from "./socialpad"

export class Social extends HTMLElement {
    constructor() {
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup() {
        let twitterScript = document.createElement("script")
        document.cookie = `path=https://platform.twitter.com/widgets.js; SameSite=None ;Secure`
        twitterScript.setAttribute("async", "")
        twitterScript.src = "https://platform.twitter.com/widgets.js"
        document.body.appendChild(twitterScript)
        this.components = this.getComponents
        return
    }
    get getComponents() {
        let aref = document.createElement("a")
        aref.classList.add("twitter-timeline")
        aref.href = "https://twitter.com/LightAlumni?ref_src=twsrc%5Etfw"
        aref.innerHTML = "Tweets by LightAlumni"
        return {
            "socialpad": new SocialPad(),
            "href": aref
            }
    }
    connectedCallback() {
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.appendChild(this.components.socialpad)
        this.appendChild(this.components.href)
        return
    }
    disconnectedCallback() {
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
}
customElements.define('la-social', Social);