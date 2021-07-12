export class Component extends HTMLElement{
    constructor(){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
    }
    get getComponents(){
        return
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = `
        `
        return
    }
    disconnectedCallback(){
        const childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-component', Component);