export class MenuButton extends HTMLElement{
    constructor(){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        //this.getComponents
        this.setAttribute("tabindex","0")
        this.setAttribute("focusable","")
        this.classList.add("material-icons")
        this.addEventListener("keydown", e =>{
            if(e.code === "Enter"){
              this.click()
              return
            }
            else{
              return
            }
          })
        this.addEventListener('click', e=>{
            //console.log("MENU: ", this.innerHTML)
            switch(this.innerHTML){
                case "menu":
                    document.querySelector("la-menuanchor").toggleAttribute("overflow")
                    this.innerHTML = "close"
                    return
                case "close":
                    document.querySelector("la-menuanchor").toggleAttribute("overflow")
                    this.innerHTML = "menu"
                    return
            }
        })
        return
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = "menu"
        return
    }
    disconnectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-menubutton', MenuButton);