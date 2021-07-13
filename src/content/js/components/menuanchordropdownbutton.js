export class MenuAnchorDropDownButton extends HTMLElement {
    constructor(text) {
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.text = text
        this.setup()
        return
    }
    setup() {
        this.setAttribute("tabindex","0")
        this.setAttribute("focusable","")
        this.addEventListener("keydown", e =>{
            if(e.code === "Enter"){
              this.click()
              return
            }
            else{
              return
            }
          })
         this.addEventListener("click", e => {
            if(document.querySelector("la-menuanchor").hasAttribute("overflow")){
            document.querySelector("la-menubutton").click()
            }
            this.parentElement.parentElement.parentElement.parentElement.components.dropdowncontainer.children["expandmore"].toggleAttribute("disabled")
            this.parentElement.parentElement.parentElement.parentElement.components.dropdowncontainer.children["expandless"].toggleAttribute("disabled")
            this.parentElement.parentElement.parentElement.parentElement.toggleAttribute("dropdown")
            this.buttonAction()
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
            case "PARTNERSHIPS":
                document.querySelector('la-carousel').render("ALUMNI STORE")
                window.scrollTo(0,0)
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
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`, "color:#cd4cf7", "color:black", "color:#0ee232")
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
        const childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`, "color:#cd4cf7", "color:black", "color:#ef1a1a")
        return
    }
}
customElements.define('la-menuanchordropdownbutton', MenuAnchorDropDownButton);