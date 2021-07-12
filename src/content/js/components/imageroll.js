export class ImageRoll extends HTMLElement{
    constructor(src, caption){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.caption = caption
        this.src = src
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        return
    }
    get getComponents(){
        return {
            'src': this.src,
            'caption': this.caption
        }
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.src)
        this.appendChild(this.components.caption)
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
customElements.define('la-imageroll', ImageRoll);