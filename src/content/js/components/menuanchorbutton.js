import { MenuAnchorButtonDropdown } from "./menuanchorbuttondropdown"
let componentIndex = 0
export class MenuAnchorButton extends HTMLElement {
    constructor(text, active, dropdownList = []) {
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.text = text
        this.active = active
        this.setupDropdown = false
        this.dropdownList = dropdownList
        this.setup()
        return
    }
    setup() {
        this.index = componentIndex
        this.id = this.buttonId
        componentIndex ++
        if (this.dropdownList.length > 0) {
            this.setupDropdown = true
            this.toggleDropDown
        }
        this.getComponents
        this.components.dropdowncontainer.addEventListener("click", e => {
            this.toggleAttribute("dropdown")
            if(!this.setupDropdown){
                if(document.querySelector("la-menuanchor").hasAttribute("overflow")){
                    document.querySelector("la-menubutton").click()
                }
            }
            if (this.setupDropdown) {
                switch(this.id){
                    case "aboutalumni":
                        if(document.querySelector("#activities[dropdown]")){
                            document.querySelector("#activities[dropdown]").components.dropdowncontainer.children["expandmore"].toggleAttribute("disabled")
                            document.querySelector("#activities[dropdown]").components.dropdowncontainer.children["expandless"].toggleAttribute("disabled")
                            document.querySelector("#activities[dropdown]").toggleAttribute("dropdown")
                        }
                        break
                    case "activities":
                        if(document.querySelector("#aboutalumni[dropdown]")){
                            document.querySelector("#aboutalumni[dropdown]").components.dropdowncontainer.children["expandmore"].toggleAttribute("disabled")
                            document.querySelector("#aboutalumni[dropdown]").components.dropdowncontainer.children["expandless"].toggleAttribute("disabled")
                            document.querySelector("#aboutalumni[dropdown]").toggleAttribute("dropdown")
                        }
                        break
                }
                this.components.dropdowncontainer.children["expandmore"].toggleAttribute("disabled")
                this.components.dropdowncontainer.children["expandless"].toggleAttribute("disabled")
                this.buttonAction()
            }
            else {
                this.buttonAction()
            }
        }, false)
        return
    }
    buttonAction() {
        switch(this.text.toUpperCase()){
            case "HOME":
                document.querySelector('la-carousel').render(this.text.toUpperCase())
                document.querySelector("la-carousel").scrollIntoView(false)
                return
            case 'ALUMNI STORE':
                document.querySelector('la-carousel').render(this.text.toUpperCase())
                window.scrollTo(0,0)
                return
            case 'SOCIAL':
                document.querySelector('la-social').scrollIntoView({block: "start"})
                return
            default:
                return
        }
    }
    get toggleDropDown() {
        switch (this.setupDropdown) {
            case false:
                return
            case true:
                return this.setComponents = 0
        }
    }
    get buttonId(){
        let txt = this.text.replace(/\s+/g, '');
        let txtL = txt.toLowerCase()
        return txtL
    }
    get getComponents() {
        const btn = document.createElement("button")
        btn.innerHTML = this.text
        btn.setAttribute("data-buttonwidth", "red")
        const span = document.createElement("span")
        span.classList.add("material-icons")
        span.id = "expandmore"
        span.innerHTML = "expand_more"
        const span2 = document.createElement("span")
        span2.classList.add("material-icons")
        span2.id = "expandless"
        span2.innerHTML = "expand_less"
        span2.setAttribute("disabled","")
        const container = document.createElement("div")
        container.classList.add("dropdownanchor")
        container.appendChild(btn)
        if(this.setupDropdown){
            container.appendChild(span)
            container.appendChild(span2)
        }
        return this.components["dropdowncontainer"] =container
    }
    set setComponents(val) {
        const dropdown = new MenuAnchorButtonDropdown(this.text,this.dropdownList)
        this.components["dropdown"] = dropdown
        return
    }
    connectedCallback() {
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
        this.render()
        return
    }
    render() {
        this.appendChild(this.components.dropdowncontainer)
        if(this.setupDropdown){
            this.appendChild(this.components.dropdown)
        }
        return
    }
    disconnectedCallback() {
        const childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
}
customElements.define('la-menuanchorbutton', MenuAnchorButton);