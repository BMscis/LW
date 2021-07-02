
export class AlumniStoreCard extends HTMLElement{
    constructor(source,alt,text,href,bg){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.source = source
        this.alt = alt
        this.text = text
        this.href = href
        this.bg = bg
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        this.classList.add("card")
        return
    }
    get getComponents(){
        var card_bg = document.createElement("div")
        card_bg.classList.add("card__bg")
        this.style.backgroundImage = this.source
        return {
            "card_bg":card_bg
        }
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.card_bg)
        return
    }
    disconnectedCallback(){
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-alumnistorecard', AlumniStoreCard);