import lalogo from "../../../assets/lalogo.svg"

export class Logo extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})    
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
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        this.innerHTML = `
        <img src=${lalogo}>
        `
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-logo', Logo);