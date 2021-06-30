export class MenuAnchorDropDownButton extends HTMLElement {
    constructor(text) {
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.text = text
        this.setup()
        return
    }
    setup() {
         this.addEventListener("click", e => {
            const effect = 1
             if (e.path.length > 9) {
                 e.path[3].toggleDropDown = 0
                 e.path[1].buttonAction()
             }
             else {
                 document.querySelector("la-menuanchorbutton[active]").setActive = 0
                 e.path[1].setActive = 0
                 if (e.path[1].setupDropdown) {
                     e.path[1].toggleDropDown = 0
                     e.path[1].buttonAction()
                    }
                    else{
                        e.path[1].buttonAction()
                    }
             }
         },false)
        return
    }
    buttonAction() {
        switch (this.text) {
            case "ABOUT US":
                document.querySelector('la-aboutcontainer').render(this.text)
                window.location = this.buttonId
                document.querySelector('la-aboutcontainer').scrollIntoView(false)
                return
            case "MISSION AND VISION":
                document.querySelector('la-aboutcontainer').render(this.text)
                window.location = this.buttonId
                document.querySelector('la-aboutcontainer').scrollIntoView(false)
                return
            case "CONSTITUTION":
                return
            case "PARTNERSHIP":
                document.querySelector('la-carousel').render("ALUMNI STORES")
                document.querySelector('la-carousel').scrollIntoView(false)
                return
            case "CLUBS":
                document.querySelector('la-aboutcontainer').render(this.text)
                window.location = this.buttonId
                document.querySelector('la-aboutcontainer').scrollIntoView(false)
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
    get getComponents() {
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render() {
        this.innerHTML = `
        <button>${this.text}</button>
        `
        return
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
    }
}
customElements.define('la-menuanchordropdownbutton', MenuAnchorDropDownButton);