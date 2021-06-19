
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
        this.range = 40;
        // const this.calcValue = (a, b) => (((a * 100) / b) * (this.range / 100) -(this.range / 2)).toFixed(1);
        this.calcValue = (a, b) => (a / b * this.range - this.range / 2).toFixed(1); // thanks @alice-mx
    
        let timeout;
        this.addEventListener("click",e =>{
          console.log("CLICK FROM STORE")
          window.location = this.components.alumnistorecard.components.card_text.firstElementChild.href
        })
        this.addEventListener('mouseover', ({ x, y }) => {
          console.log("mouse over")
          var images = this.components.alumnistorecard.components.card_img;
          var backgrounds = this.components.alumnistorecard.components.card_bg;
          if (timeout) {
            window.cancelAnimationFrame(timeout);
          }
    
          timeout = window.requestAnimationFrame(() => {
            const yValue = this.calcValue(y, window.innerHeight);
            const xValue = this.calcValue(x, window.innerWidth);
            
            this.firstElementChild.style.transform = `rotateX(${yValue}deg) rotateY(${xValue}deg)`;
    
            //[].forEach.call(images, image => {
              images.style.transform = `
              translateX(${-xValue}px) translateY(${yValue}px) translateZ(50px)
              rotateX(-${yValue}deg) rotateY(-${xValue * 2}deg)
              `;
            //});
    
            //[].forEach.call(backgrounds, background => {
              backgrounds.style.backgroundPosition = `${xValue * .45}px ${-yValue * .45}px`;
              backgrounds.style.backgroundSize = `contain`;

            //});
          });
        }, false);
    }
    get getComponents(){
      var cardH3= document.createElement('h3')
      cardH3.innerHTML = "Alumni Stores"
      var cardH1 = document.createElement('h1')
      cardH1.innerHTML = "Get The Alumni Discount"

      var cardholder = document.createElement('div')
      cardholder.classList.add('cards')
      return this.components = {
        "h3":cardH3,
        "h1":cardH1,
        "cardholder": cardholder,
        "alumnistorecard":   new AlumniStoreCard(this.image,this.alternative,this.text,this.link,this.bg)
      }
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
      //this.components.cardholder.appendChild(this.components.h3)
      //this.components.cardholder.appendChild(this.components.h1)
      this.components.cardholder.appendChild(this.components.alumnistorecard)

      this.appendChild(this.components.cardholder)
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