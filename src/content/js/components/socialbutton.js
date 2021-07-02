var componentIndex = 0
export class SocialButton extends HTMLElement{
    constructor(logo){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.logo = logo
        this.components = {}
        this.setup()
        return
    }
    setup(){
        componentIndex ++
        this.componentIndex = componentIndex
        this.components = this.getComponents
        return
    }
    get getComponents(){
        let inpt = document.createElement("input")
        inpt.type = "radio"
        inpt.id = `${this.nodeName.toLowerCase()}-input-${this.componentIndex}`
        inpt.name = `${this.nodeName.toLowerCase()}-slider`
        if(componentIndex === 1){
            inpt.checked = "checked"
        }
        let lbl = document.createElement("label")
        lbl.setAttribute("style", `
        background-image:url(${this.logo});
        `)
        lbl.setAttribute("for",`${this.nodeName.toLowerCase()}-input-${this.componentIndex}`)
        lbl.id = `${this.nodeName.toLowerCase()}-label-${this.componentIndex}`
        return {"label": lbl,"input": inpt}
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.label)
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
customElements.define('la-socialbutton', SocialButton);