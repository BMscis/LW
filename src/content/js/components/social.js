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
        document.body.appendChild(twitterScript)
        this.components = this.getComponents
        return
    }
    get getComponents() {
        //twitterHref
        let twitterHref = document.createElement("a")
        twitterHref.classList.add("twitter-timeline")
        twitterHref.href = "https://twitter.com/LightAlumni?ref_src=twsrc%5Etfw"
        twitterHref.innerHTML = "Tweets by LightAlumni"
        twitterHref.classList.add("twitteriframe")
        //facebookHref
        //
        let facebookHref = document.createElement("iframe")
        facebookHref.classList.add("facebookiframe")
        
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
        this.appendChild(this.components.twitterhref)
        this.appendChild(this.components.facebookhref)
        this.components.facebookhref.outerHTML = `
        <iframe class=facebookiframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLightAcademyAlumni&tabs=timeline&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId=843006239656820" width="100%" height="100%" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        <iframe class=instagramiframe src="https://www.instagram.com/lightalumni/EAALZBta91S3QBANNBpwZB9gEKbx7jbbZCgf8DZCwu5SfonlQmm46xvtCI4V3wm8yqOSxNzighjQi9vWst5ZCrltZCkCDap5GDy1sY6VNzPmyuManiJdofn8v47Wxd4Ys2mQOXdalqoZB10wrBh7yruumcbPRRZChCjFJLH7dkJZA8bMcw1NBZASqWwss6Etx1ZCfdezoCD478fBbwZDZD" width="100%" height="100%"></iframe>
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