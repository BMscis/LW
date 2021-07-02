export class LoginRegister extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        window.addEventListener("scroll", e=>{
            console.log(window.scrollY)
            if(window.scrollY > window.innerHeight / 2){
                this.setAttribute("hide","")
                return
            }
            else{
                if(this.hasAttribute("hide")){
                    this.removeAttribute("hide")
                    return
                }
                return
            }
        })
        return
    }
    get getComponents(){
        let btn1 = document.createElement("button")
        btn1.innerHTML = "Log In"
        btn1.classList.add("login")
        let btn2 = document.createElement("button")
        btn2.innerHTML = "Register"
        btn2.classList.add("register")
        return {
            "login":btn1,
            "register":btn2
        }
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.appendChild(this.components.login)
        this.appendChild(this.components.register)
        return
    }
    disconnectedCallback(){
        var childCount = this.childElementCount
        for(let i = childCount; i > 0; i--){
            this.removeChild(this.children[0])
        }
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
        return
    }
}
customElements.define('la-loginregister', LoginRegister);