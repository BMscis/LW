export class MenuAnchorDropDownButton extends HTMLElement {
    constructor(text) {
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.text = text
        this.setup()
        return
    }
    setup() {
         this.addEventListener("click", e => {
            if(e.path[8].hasAttribute("overflow")){
            document.querySelector("la-menubutton").click()
            }
            e.path[5].components.dropdowncontainer.children["expandmore"].toggleAttribute("disabled")
            e.path[5].components.dropdowncontainer.children["expandless"].toggleAttribute("disabled")
            e.path[5].toggleAttribute("dropdown")
            e.path[1].buttonAction()
         },false)
        return
    }
    buttonAction() {
        switch (this.text.toUpperCase()) {
            case "ABOUT US":
                document.querySelector('la-aboutcontainer').render(this.text.toUpperCase())
                window.location = this.buttonId
                document.querySelector('la-aboutcontainer').scrollIntoView({block: "start"})
                return
            case "MISSION & VISION":
                document.querySelector('la-aboutcontainer').render(this.text.toUpperCase())
                window.location = this.buttonId
                document.querySelector('la-aboutcontainer').scrollIntoView({block: "start"})
                return
            case "CONSTITUTION":
                return
            case "PARTNERSHIP":
                document.querySelector('la-carousel').render("ALUMNI STORES")
                document.querySelector('la-carousel').scrollIntoView({block: "start"})
                return
            case "CLUBS":
                document.querySelector('la-aboutcontainer').render(this.text.toUpperCase())
                window.location = this.buttonId
                document.querySelector('la-aboutcontainer').scrollIntoView({block: "start"})
                return
            default:
                return
        }
    }
    get buttonId(){
        let txt = this.text.replace(/\s+/g, '');
        let txtL = txt.toLowerCase()
        return '#' + txtL
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.innerHTML = `
        <button>${this.text}</button>
        `
        return
    }
    disconnectedCallback() {
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
}
customElements.define('la-menuanchordropdownbutton', MenuAnchorDropDownButton);