export class TextContainer extends HTMLElement{
    constructor(id, innerhtml){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.id = id
        this.innerhtml =  innerhtml
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        this.innerHTML = this.innerhtml
        return
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define(`la-aboutus`, TextContainer);