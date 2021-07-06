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
        //Twitter Script
        let twitterScript = document.createElement("script")
        twitterScript.setAttribute("async", "")
        twitterScript.src = "https://platform.twitter.com/widgets.js"
        //document.body.appendChild(twitterScript)
        this.components = this.getComponents
        return
    }
    get getComponents() {
        //twitterHref
        let twitterHref = document.createElement("a")
        twitterHref.classList.add("twitter-timeline")
        twitterHref.href = "https://twitter.com/LightAlumni?ref_src=twsrc%5Etfw"
        twitterHref.innerHTML = "Tweets by LightAlumni"

        //facebookHref
        //
        let facebookHref = document.createElement("iframe")
        
        return {
            "socialpad": new SocialPad(),
            "twitterhref": twitterHref,
            "facebookhref": facebookHref
            }
    }
    connectedCallback() {
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.appendChild(this.components.socialpad)
        this.appendChild(this.components.facebookhref)
        this.components.facebookhref.outerHTML = `
        <iframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLightAcademyAlumniPresident&tabs=timeline&width=500&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=843006239656820" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        `
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