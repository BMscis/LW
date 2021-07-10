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
        this.classList.add("material-icons")
        this.addEventListener("click", e =>{
            switch(this.innerText){
                case "unfold_more":
                    switch(window.innerWidth > 600){
                        case true:
                            document.querySelector("la-social").setAttribute("style","top: max(min(calc(100vw * 0.1), calc(100vh * 0.1))); bottom:0")
                            break
                        case false:
                            document.querySelector("la-social").setAttribute("style","top: max(max(calc(100vw * 0.1), calc(100vh * 0.1))); bottom:0")
                            break
                    }
                    this.innerText = "unfold_less"
                    document.querySelector("la-loginregister").setAttribute("hide","")
                    return
                case "unfold_less":
                    switch(window.innerWidth > 600){
                        case true:
                            document.querySelector("la-social").setAttribute("style","top: max(100vh - min(calc(100vw * 0.1), calc(100vh * 0.1))); bottom:unset")
                            break
                        case false:
                            document.querySelector("la-social").setAttribute("style","top: max(100vh - max(calc(100vw * 0.1), calc(100vh * 0.1))); bottom:unset")
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
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        //console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-unfoldmore', UncofldMore);