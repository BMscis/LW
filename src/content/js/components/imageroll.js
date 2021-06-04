export class ImageRoll extends HTMLElement{
    constructor(src, caption){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.caption = caption
        this.src = src
        this.setup()

    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        this.components['src'] = this.src
        this.components['caption'] = this.caption
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
        this.appendChild(this.components.src)
        this.appendChild(this.components.caption)
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-imageroll', ImageRoll);