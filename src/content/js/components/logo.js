import lalogo from "../../../assets/LAA/LAASVG.svg"

export class Logo extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        return
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = `
        <img src=${lalogo}>
        `
        return
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-logo', Logo);