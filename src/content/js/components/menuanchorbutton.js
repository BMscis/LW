import { MenuAnchorButtonDropdown } from "./menuanchorbuttondropdown"
var componentIndex = 0
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
        componentIndex ++
        if (this.dropdownList.length > 0) {
            this.setupDropdown = true
            this.toggleDropDown
        }
        this.getComponents
        this.components.dropdowncontainer.addEventListener("click", e => {
            this.toggleAttribute("dropdown")
            if(!this.setupDropdown){
                if(e.path[5].hasAttribute("overflow")){
                    document.querySelector("la-menubutton").click()
                }
            }
            if (this.setupDropdown) {
                this.components.dropdowncontainer.children["expandmore"].toggleAttribute("disabled")
                this.components.dropdowncontainer.children["expandless"].toggleAttribute("disabled")
                e.path[2].buttonAction()
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
        return '#' + txtL
    }
    get getComponents() {
        var btn = document.createElement("button")
        btn.innerHTML = this.text
        btn.setAttribute("data-buttonwidth", "red")
        var span = document.createElement("span")
        span.classList.add("material-icons")
        span.id = "expandmore"
        span.innerHTML = "expand_more"
        var span2 = document.createElement("span")
        span2.classList.add("material-icons")
        span2.id = "expandless"
        span2.innerHTML = "expand_less"
        span2.setAttribute("disabled","")
        var container = document.createElement("div")
        container.classList.add("dropdownanchor")
        container.appendChild(btn)
        if(this.setupDropdown){
            container.appendChild(span)
            container.appendChild(span2)
        }
        return this.components["dropdowncontainer"] =container
    }
    set setComponents(val) {
        var dropdown = new MenuAnchorButtonDropdown(this.text,this.dropdownList)
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
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
}
customElements.define('la-menuanchorbutton', MenuAnchorButton);