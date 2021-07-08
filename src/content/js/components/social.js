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

        //Facebook Script
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
        
        (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "https://connect.facebook.net/en_US/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
        }(document, 'script', 'facebook-jssdk'));
        `
        // fbSDK.setAttribute("async","")
        // fbSDK.setAttribute("defer","")
        // fbSDK.setAttribute("crossorigin","anonymous")
        // fbSDK.setAttribute("src","https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v11.0&appId=843006239656820&autoLogAppEvents=1")
        // fbSDK.setAttribute("nonce","D7PIPwIt")
        document.body.prepend(fbSDK)
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
            //twitterLabel
        let twLabel = document.createElement("label")
        twLabel.id = "twlabel"
        twLabel.setAttribute("for", "la-socialbutton-input-1")
        twLabel.appendChild(twitterHref)

        //facebookHref
        let fbRoot = document.createElement("div")
        fbRoot.id = "fb-root"

        let fbPage = document.createElement("div")
        fbPage.classList.add("fb-page")
        fbPage.setAttribute("data-href","https://www.facebook.com/LightAcademyAlumni")
        fbPage.setAttribute("data-tabs","timeline")
        fbPage.setAttribute("data-width","500")
        fbPage.setAttribute("data-height",`500`)
        fbPage.setAttribute("data-small-header","true")
        fbPage.setAttribute("data-add-container-width","true")
        fbPage.setAttribute("data-hide-cover","true")
        fbPage.setAttribute("data-hide-cover","true")
        fbPage.setAttribute("data-show-facepile","false")
        fbPage.style.position = "relative"
        fbPage.style.overflow = "auto"
        fbPage.style.width = "500px"
            //fbLabel
        let fbLabel = document.createElement("label")
        fbLabel.id = "fblabel"
        fbLabel.setAttribute("for", "la-socialbutton-input-3")
        fbLabel.appendChild(fbPage)

        let blockQuote = document.createElement("blockquote")
        blockQuote.cite = "https://www.facebook.com/LightAcademyAlumni"
        blockQuote.classList.add("fb-xfbml-parse-ignore")

        let fbHref = document.createElement('a')
        fbHref.href = "https://www.facebook.com/LightAcademyAlumni"
        fbHref.innerHTML = "Light Academy Alumni"

        blockQuote.appendChild(fbHref)
        fbPage.appendChild(blockQuote)
        //Instagram
        let instagramHref = document.createElement("iframe")
        instagramHref.classList.add("instagramiframe")
        
        return {
            "socialpad": new SocialPad(),
            "twitterhref": twLabel,
            "fbroot":fbRoot,
            "fbpage":fbLabel,
            "instagramhref": instagramHref
            }
    }
    connectedCallback() {
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.appendChild(this.components.socialpad)
        this.components.socialpad.appendChild(this.components.twitterhref)
        this.components.socialpad.appendChild(this.components.fbpage)
        //this.appendChild(this.components.instagramhref)
        this.prepend(this.components.fbroot)
        // this.components.facebookhref.outerHTML = `
        // <iframe class=facebookiframe src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FLightAcademyAlumni&tabs=timeline&width=${parseInt(window.innerWidth / 1.8)}&height=${parseInt(window.innerHeight)}&small_header=true&adapt_container_width=true&hide_cover=true&show_facepile=false&appId=843006239656820" width="500" height="500" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowfullscreen="true" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
        // `
        // this.components.instagramhref.outerHTML = `
        // <iframe class=instagramiframe src="https://www.instagram.com/lightalumni/EAALZBta91S3QBANNBpwZB9gEKbx7jbbZCgf8DZCwu5SfonlQmm46xvtCI4V3wm8yqOSxNzighjQi9vWst5ZCrltZCkCDap5GDy1sY6VNzPmyuManiJdofn8v47Wxd4Ys2mQOXdalqoZB10wrBh7yruumcbPRRZChCjFJLH7dkJZA8bMcw1NBZASqWwss6Etx1ZCfdezoCD478fBbwZDZD" ></iframe>
        // `
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