export class MenuButton extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        //this.getComponents
        this.classList.add("material-icons")
        this.addEventListener('click', e=>{
            switch(this.innerHTML){
                case "menu":
                    e.path[1].toggleAttribute("overflow")
                    this.innerHTML = "close"
                    return
                case "close":
                    e.path[1].toggleAttribute("overflow")
                    this.innerHTML = "menu"
                    return
            }
        })
        return
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = "menu"
        return
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-menubutton', MenuButton);