
export class AlumniStoreCard extends HTMLElement{
    constructor(source,alt,text,href,bg){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.source = source
        this.alt = alt
        this.text = text
        this.href = href
        this.bg = bg
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents

        this.classList.add("card")
    }
    get getComponents(){
        var card_bg = document.createElement("div")
        card_bg.classList.add("card__bg")

        // this.style.backgroundImage = `url(${this.bg})`
        // card_bg.style.backgroundSize = `contain`
        // card_bg.style.backgroundRepeat = `no-repeat`
        //card_bg.style.backgroundPosition = `center`
        this.style.backgroundImage = this.source
        this.components["card_bg"] = card_bg
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        this.appendChild(this.components.card_bg)
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-alumnistorecard', AlumniStoreCard);