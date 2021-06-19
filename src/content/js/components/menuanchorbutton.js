import { MenuAnchorButtonDropdown } from "./menuanchorbuttondropdown"

export class MenuAnchorButton extends HTMLElement{
    constructor(text,active,dropdownList=[]){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.components = {}
        this.text = text
        this.active = active
        this.setupDropdown = false
        this.dropdownList = dropdownList
        this.setup()

    }
    setup(){
        this.addEventListener("click", e=>{
            var prevActive = document.querySelector("la-menuanchorbutton[active]")
            if(prevActive.hasAttribute("dropdown")){
                prevActive.toggleAttribute('dropdown',false)
            }
            this.toggleAttribute('dropdown')
            prevActive.getActive
            this.setActive = 0
            this.active = true
            if(this.text === "ALUMNI STORES"){
                document.querySelector('la-carousel').render(this.text)
            }
            else if(this.text === "HOME"){
                document.querySelector('la-carousel').render(this.text)
            }
            return
            
        })

        switch(this.dropdownList.length == 0){
            case true:
                this.getComponents
                break
            case false:
                this.setComponents = 0
                break
            
        }

        this.getActive

    }
    get getActive(){
        switch(this.active){
            case true:
                this.toggleAttribute("active")
                return
            case false:
                this.toggleAttribute("active",false)
                return
        }
    }
    set setActive(val){
        this.toggleAttribute("active",true)
        return
    }
    get getComponents(){
        return
    }
    set setComponents(val){
        this.setupDropdown = true
        var dropdown = new MenuAnchorButtonDropdown(this.dropdownList)
        this.components["dropdown"] = dropdown
        return
    }
    static get observedAttributes() {
        return [""]
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
        switch(this.setupDropdown){
            case true:
                this.innerHTML = `
                <button>${this.text}</button>
                `
                this.appendChild(this.components.dropdown)
                return
            case false:
                this.innerHTML = `
                <button>${this.text}</button>
                `
                return
        }
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-menuanchorbutton', MenuAnchorButton);