import { MenuAnchorButtonDropdown } from "./menuanchorbuttondropdown"

export class MenuAnchorButton extends HTMLElement {
    constructor(text, active, dropdownList = []) {
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.text = text
        this.active = active
        this.setupDropdown = false
        this.dropdownList = dropdownList
        this.setup()
        return
    }
    setup() {
        this.getComponents
        this.components.button.addEventListener("click", e => {
            if (e.path.length > 9) {
                e.path[3].toggleDropDown = 0
                e.path[1].buttonAction()
            }
            else {
                if (document.querySelector("la-menuanchorbutton[active]").setupDropdown) {
                    if(document.querySelector("la-menuanchorbutton[active]").hasAttribute("dropdown")){
                        document.querySelector("la-menuanchorbutton[active]").toggleDropDown = 0
                    }
                }
                document.querySelector("la-menuanchorbutton[active]").setActive = 0
                e.path[1].setActive = 0
                if (e.path[1].setupDropdown) {
                    e.path[1].toggleDropDown = 0
                    e.path[1].buttonAction()
                }
                else {
                    e.path[1].buttonAction()
                }
            }
        }, false)
        if (this.dropdownList.length > 0) {
            this.setupDropdown = true
        }
        this.toggleDropDown
        this.getActive

        return
    }
    buttonAction() {
        switch(this.text){
            case "HOME":
                document.querySelector('la-carousel').render(this.text)
                document.querySelector("la-carousel").scrollIntoView(false)
                return
            case 'ALUMNI STORES':
                document.querySelector('la-carousel').render(this.text)
                document.querySelector("la-carousel").scrollIntoView()
                return
            case 'SOCIAL':
                document.querySelector('la-social').scrollIntoView(false)
                return
            default:
                return
        }
    }
    get getActive() {
        switch (this.active) {
            case true:
                this.toggleAttribute("active")
                return
            case false:
                this.toggleAttribute("active", false)
                return
        }
        return
    }
    set setActive(val) {
        return this.toggleAttribute("active")

    }
    get toggleDropDown() {
        switch (this.setupDropdown) {
            case false:
                return
            case true:
                return this.setComponents = 0

        }
    }
    set toggleDropDown(val) {
        switch (this.setupDropdown) {
            case false:
                return
            case true:
                return this.toggleAttribute("dropdown")
        }

    }
    get buttonId(){
        let txt = this.id.replace(/\s+/g, '');
        let txtL = txt.toLowerCase()
        
        return '#' + textL
    }
    get getComponents() {
        var btn = document.createElement("button")
        btn.innerHTML = this.text
        this.components["button"] = btn
        return
    }
    set setComponents(val) {
        this.setupDropdown = true
        var dropdown = new MenuAnchorButtonDropdown(this.dropdownList)
        this.components["dropdown"] = dropdown
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
        switch (this.setupDropdown) {
            case true:
                this.appendChild(this.components.button)
                this.appendChild(this.components.dropdown)
                return
            case false:
                this.appendChild(this.components.button)
                return
        }
    }
    disconnectedCallback() {
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
    }
}
customElements.define('la-menuanchorbutton', MenuAnchorButton);