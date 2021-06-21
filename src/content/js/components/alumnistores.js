
import { AlumniStoreCard } from './alumnistorecard';

export class AlumniStore extends HTMLElement{
    constructor(image,alternative,text,link, bg){
        super()
        console.log(`${this.nodeName} has been constructed`)
        //this.shadow = this.attachShadow({mode:'open'})
        this.image = image
        this.alternative = alternative
        this.text = text
        this.link = link
        this.bg = bg
        this.components = {}
        this.setup()

    }
    setup(){
        this.getComponents
        const range = 40
        function calcValue(a, b) {return (a/b*range-range/2).toFixed(1)} // thanks @alice-mx

        let timeout;
        this.addEventListener("mouseover", e =>{
          console.log("mouseleover")
          var thisX = this.getBoundingClientRect().x
          var thisY = this.getBoundingClientRect().y
          var thisW = this.getBoundingClientRect().width
          var thisMinRange = thisW - 20
          var thisMaxRange = thisW + 20
          var mouseX = e.pageX
          var mouseY = e.pageY
          var transX = mouseX - thisX
          var transY = mouseY - thisY
          var atan = this.calcAngleDegrees(transX,transY)
          var atan2 = calcValue(transX,transY)
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }
          timeout = window.requestAnimationFrame(() => {
          switch(atan < atan2){
            case true:
              this.style.transform = `rotateY(${atan}deg) translateZ(-50px)`
              this.components.cardholder.style.transform = `rotateY(${atan/3}deg) translateZ(25px) `
              var moveLogo = calcValue(this.components.cardholder.getBoundingClientRect().x ,this.components.alumnistorecard.getBoundingClientRect().x)
              this.components.alumnistorecard.style.transform = `translateX(${moveLogo}px) translateZ(15px)`
              console.log(true)
              break
            case false:
              this.style.transform = `rotateY(${atan2}deg) translateZ(-50px)`
              this.components.cardholder.style.transform = `rotateY(${atan2/3}deg) translateZ(25px)`
              var moveLogo = calcValue(this.components.cardholder.getBoundingClientRect().x ,this.components.alumnistorecard.getBoundingClientRect().x)
              this.components.alumnistorecard.style.transform = `translateZ(${moveLogo}px) `
              console.log(false)
              break
          }
        })
          // console.log(
          //   "thisX: ", thisX,
          //   "thisY: ", thisY,
          //   "mouseX: ", mouseX,
          //   "mouseY: ", mouseY,
          //   "RotateX: ", transX,
          //   "RotateY: ", transY,
          //   "Atan: ", atan,
          //   "Atan2: ", atan2
          // )
        })
        this.addEventListener('mouseout', e =>{
          console.log("mouseleave")
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }
          timeout = window.requestAnimationFrame(() => {
          this.style.transform =                            `initial`
          this.components.cardholder.style.transform =      `initial`
          this.components.alumnistorecard.style.transform = `initial`
          })
        })
        // this.addEventListener('mousemove', ({x, y}) => {
        //   const backgrounds = document.querySelectorAll(".cards");
        //   const images = document.querySelectorAll(".card");
        //   if (timeout) {
        //     window.cancelAnimationFrame(timeout);
        //   }
            
        //   timeout = window.requestAnimationFrame(() => {
        //     const yValue = calcValue(y, window.innerHeight);
        //     const xValue = calcValue(x, window.innerWidth);
        
        //     this.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
        
        //     [].forEach.call(images, (image) => {
        //       image.style.transform = `translateX(${-xValue}px) translateY(${yValue}px)`;
        //     });
        
        //     [].forEach.call(backgrounds, (background) => {
        //       background.style.backgroundPosition = `${xValue*.45}px ${-yValue*.45}px`;
        //     })
        //   })
        // }, false);
        // this.addEventListener('mouseleave', e =>{
        //   console.log('mouseover')
        //   var images = this.components.alumnistorecard;
        //   var backgrounds = this.firstElementChild;
        //   images.style.transform       =  "none"
        //   backgrounds.style.backgroundPosition =  "initial"
        // })
    }
    get getComponents(){
      var cardH3= document.createElement('h3')
      cardH3.innerHTML = "Alumni Stores"
      var cardH1 = document.createElement('h1')
      cardH1.innerHTML = "Get The Alumni Discount"

      var cardholder = document.createElement('div')
      cardholder.classList.add('cards')
      cardholder.id = this.text + "card"
      cardholder.style.backgroundImage = `url(${this.bg})`
      cardholder.style.backgroundRepeat = `no-repeat`

      var card_text = document.createElement("div")
      card_text.classList.add("card__text") 

      var card_title = document.createElement("a")
      card_title.innerHTML = this.text
      card_title.href = this.link
      card_title.classList.add("card__title")
      card_text.appendChild(card_title)
      return this.components = {
        "h3":cardH3,
        "h1":cardH1,
        "cardholder": cardholder,
        "alumnistorecard":   new AlumniStoreCard(this.image,this.alternative,this.text,this.link,this.bg),
        "card_text": card_text
      }
    }
    static get observedAttributes() {
        return [""]
    }
    calcAngleDegrees(x, y) {
      return Math.atan2(y, x) * 180 / Math.PI;
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
    }
    attributeChangedCallback(prop, oldVal, newVal) {
    }
    render(){
      //this.components.cardholder.appendChild(this.components.h3)
      //this.components.cardholder.appendChild(this.components.h1)
      this.components.cardholder.appendChild(this.components.alumnistorecard)
      
      this.appendChild(this.components.cardholder)
      this.appendChild(this.components.card_text)
      return
    }
    get htmlTemlpate(){
      return`
      <div id="alumnistore" class="cards">
      <h3>Alumni Stores</h3>
      <h1>Get The Alumni Discount</h1>
      <div class="card card__one">
        <div class="card__bg"></div>
        <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png" />
        <div class="card__text">
          <p class="card__title">Princess Mononoke</p>
        </div>
      </div>
      <div class="card card__two">
        <div class="card__bg"></div>
        <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png" />
        <div class="card__text">
          <p class="card__title">Spirited Away</p>
        </div>
      </div>
      <div class="card card__three">
        <div class="card__bg"></div>
        <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" />
        <div class="card__text">
          <p class="card__title">Howl's Moving Castle</p>
        </div>
      </div>
    </div>
    
    <span class="notice">view on desktop for mousemove</span>
    <a class="twitter__link" target="_blank" href="https://twitter.com/intent/tweet?text=Check%20out%20this%203D%20CSS%20depth%20effect%20from%20@dazulu&via=CodePen%20&hashtags=codepen%2cfrontend&url=https://codepen.io/dazulu/details/VVZrQv/"><img class="twitter__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/twitter.svg" /> Share</a>
      `
    }
    disconnectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a" )   
    }
}
customElements.define('la-alumnistore', AlumniStore);