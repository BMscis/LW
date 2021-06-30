export class Social extends HTMLElement {
    constructor() {
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.setup()

    }
    setup() {
        let twitterScript = document.createElement("script")
        document.cookie = `path=https://platform.twitter.com/widgets.js; SameSite=None ;Secure`
        twitterScript.setAttribute("async", "")
        twitterScript.src = "https://platform.twitter.com/widgets.js"
        // fetch("https://platform.twitter.com/widgets.js",
        //     {
        //         method: 'GET',
        //         mode:"same-origin",
        //         headers: {
        //             SameSite: "None"
        //         }

        //     }
        // ).then(response => response.json())
        // .then(data => console.log(data))
        document.body.appendChild(twitterScript)
        this.getComponents
    }
    get getComponents() {
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render() {
        this.innerHTML = `
        <a class="twitter-timeline" href="https://twitter.com/LightAlumni?ref_src=twsrc%5Etfw">Tweets by LightAlumni</a> 
        
        `
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
    }
}
customElements.define('la-social', Social);