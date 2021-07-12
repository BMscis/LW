
import { AlumniStoreCard } from './alumnistorecard';

export class AlumniStore extends HTMLElement{
    constructor(image,alternative,text,link, bg){
        super()
        //console.log(`${this.nodeName} has been constructed`)
        this.image = image
        this.alternative = alternative
        this.text = text
        this.link = link
        this.bg = bg
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.components = this.getComponents
        const range = 40
        function calcValue(a, b) {return (a/b*range-range/2).toFixed(1)} // thanks @alice-mx
        let timeout;
        this.addEventListener("click",e =>{
          window.location = this.components.card_text.firstElementChild.href
        })
        this.addEventListener("mouseover", e =>{
          const thisX = this.getBoundingClientRect().x
          const thisY = this.getBoundingClientRect().y
          const thisW = this.getBoundingClientRect().width
          const thisMinRange = thisW - 20
          const thisMaxRange = thisW + 20
          const mouseX = e.pageX
          const mouseY = e.pageY
          const transX = mouseX - thisX
          const transY = mouseY - thisY
          const atan = this.calcAngleDegrees(transX,transY)
          const atan2 = calcValue(transX,transY)
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }
          timeout = window.requestAnimationFrame(() => {
          switch(atan < atan2){
            case true:
              this.style.transform = `rotateY(${atan}deg) translateZ(-50px)`
              this.components.cardholder.style.transform = `rotateY(${atan/3}deg) translateZ(25px) `
              const moveLogo1 = calcValue(this.components.cardholder.getBoundingClientRect().x ,this.components.alumnistorecard.getBoundingClientRect().x)
              this.components.alumnistorecard.style.transform = `translateZ(${moveLogo1}px)`
              this.components.alumnistorecard.style.filter = `drop-shadow(${moveLogo1/2}px ${moveLogo1/2}px 1.5px #000000a1`
              break
            case false:
              this.style.transform = `rotateY(${atan2}deg) translateZ(-50px)`
              this.components.cardholder.style.transform = `rotateY(${atan2/3}deg) translateZ(25px)`
              const moveLogo2 = calcValue(this.components.cardholder.getBoundingClientRect().x ,this.components.alumnistorecard.getBoundingClientRect().x)
              this.components.alumnistorecard.style.transform = `translateZ(${moveLogo2}px) `
              this.components.alumnistorecard.style.filter = `drop-shadow(${moveLogo2/2}px ${moveLogo2/2}px 1.5px #000000a1`
              break
          }
        })
        })
        this.addEventListener('mouseout', e =>{
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }
          timeout = window.requestAnimationFrame(() => {
          this.style.transform =                            `initial`
          this.components.cardholder.style.transform =      `initial`
          this.components.alumnistorecard.style.transform = `initial`
          this.components.alumnistorecard.style.filter =    `initial`
          })
        })
        return
    }
    get getComponents(){
      const cardholder = document.createElement('div')
      cardholder.classList.add('cards')
      cardholder.id = this.text + "card"
      cardholder.style.backgroundImage = `url(${this.bg})`
      cardholder.style.backgroundRepeat = `no-repeat`

      const card_text = document.createElement("div")
      card_text.classList.add("card__text") 

      const card_title = document.createElement("a")
      card_title.innerHTML = this.text
      card_title.href = this.link
      card_title.classList.add("card__title")
      card_text.appendChild(card_title)
      return {
        "cardholder": cardholder,
        "alumnistorecard":   new AlumniStoreCard(this.image,this.alternative,this.text,this.link,this.bg),
        "card_text": card_text
      }
    }
    calcAngleDegrees(x, y) {
      return Math.atan2(y, x) * 180 / Math.PI;
    }
    connectedCallback(){
        //console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
      this.components.cardholder.appendChild(this.components.alumnistorecard)
      this.appendChild(this.components.cardholder)
      this.appendChild(this.components.card_text)
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
customElements.define('la-alumnistore', AlumniStore);