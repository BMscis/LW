export class UncofldMore extends HTMLElement{
    constructor(){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        //this.components = this.getComponents
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
        this.addEventListener("click", e =>{
            switch(this.innerText){
                case "unfold_more":
                    switch(window.innerWidth > 600){
                        case true:
                            document.querySelector("la-social").setAttribute("style","top: max(calc(50vw * 0.0271 + 48px), calc(50vh * 0.0271 + 48px)); bottom:0")
                            break
                        case false:
                            document.querySelector("la-social").setAttribute("style","top: max(calc(50vw * 0.0271 + 48px), calc(50vh * 0.0271 + 48px)); bottom:0")
                            break
                    }
                    this.innerText = "unfold_less"
                    document.querySelector("la-loginregister").setAttribute("hide","")
                    return
                case "unfold_less":
                    switch(window.innerWidth > 600){
                        case true:
                            document.querySelector("la-social").setAttribute("style","top: calc(100vh - max(calc(50vw * 0.0271 + 48px), calc(50vh * 0.0271 + 48px))); bottom:unset")
                            break
                        case false:
                            document.querySelector("la-social").setAttribute("style","top: calc(100vh - max(calc(50vw * 0.0271 + 48px), calc(50vh * 0.0271 + 48px))); bottom:unset")
                            break
                    }
                    this.innerText = "unfold_more"
                    document.querySelector("la-loginregister").removeAttribute("hide")

            }
            
        })
        return
    }
    get getComponents(){
        return
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = `unfold_more
        `
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
customElements.define('la-unfoldmore', UncofldMore);