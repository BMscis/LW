export class TextContainer extends HTMLElement{
    constructor(id, innerhtml, text){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.id = id
        this.innerhtml =  innerhtml
        this.text = text
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
    }
    get getComponents(){
        const h3 = document.createElement("h3")
        h3.innerHTML = this.text
        return {"h3": h3}
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = this.innerhtml
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
customElements.define(`la-aboutus`, TextContainer);