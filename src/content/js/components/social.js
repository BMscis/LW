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

        //facebook Script
        let fbSDK = document.createElement("script")
        fbSDK.innerHTML = `
            window.fbAsyncInit = function() {
                FB.init({
                    appId            : '843006239656820',
                    autoLogAppEvents : true,
                    xfbml            : true,
                    version          : 'v11.0'
                });
            };
        `
        document.body.appendChild(fbSDK)
        let facebookScript = document.createElement("script")
        facebookScript.setAttribute("async","")
        facebookScript.setAttribute("defer","")
        facebookScript.setAttribute("crossorigin","anonymous")
        facebookScript.src = `https://connect.facebook.net/en_US/sdk.js`
        facebookScript.setAttribute("async","")
        facebookScript.setAttribute("defer","")
        facebookScript.setAttribute("crossorigin","anonymous")
        document.body.appendChild(facebookScript)
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
        let facebookHref = document.createElement("div")
        facebookHref.classList.add("fb-page")
        facebookHref.setAttribute("data-href","https://www.facebook.com/LightAcademyAlumniPresident")
        facebookHref.setAttribute("data-tabs","timeline")
        facebookHref.setAttribute("data-width","500px")
        facebookHref.setAttribute("data-height","500px")
        facebookHref.setAttribute("data-small-header","false")
        facebookHref.setAttribute("data-adapt-container-width","true")
        facebookHref.setAttribute("data-hide-cover","false")
        facebookHref.setAttribute("data-show-facepile","true")

        let facebookRoot = document.createElement("div")
        facebookRoot.id = "fb-root"
        return {
            "socialpad": new SocialPad(),
            "twitterhref": twitterHref,
            "facebookhref": facebookHref,
            "facebookroot":facebookRoot
            }
    }
    connectedCallback() {
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.appendChild(this.components.socialpad)
        this.appendChild(this.components.facebookroot)
        this.appendChild(this.components.facebookhref)
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