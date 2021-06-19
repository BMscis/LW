(()=>{var e={91:(e,a,n)=>{"use strict";n.r(a),n.d(a,{ComponentHandler:()=>H});class t extends HTMLElement{constructor(){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.setup()}setup(){this.getComponents,this.addEventListener("click",(e=>{this.parentElement.toggleAttribute("overflow")}))}get getComponents(){}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-menubutton",t);class s extends HTMLElement{constructor(e){super(),console.log(`${this.nodeName} has been constructed`),this.components=e.components,this.setup()}setup(){this.getComponents,this.components.menubutton=new t}get getComponents(){var e=document.createElement("div");e.classList.add("backdropdiv"),this.components.div=e}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.appendChild(this.components.menubutton),this.components.div.appendChild(this.components.home),this.components.div.appendChild(this.components.aboutlaa),this.components.div.appendChild(this.components.activities),this.components.div.appendChild(this.components.alumnistories),this.components.div.appendChild(this.components.buttongallery),this.components.div.appendChild(this.components.buttoncontact),this.appendChild(this.components.div)}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-sidebar",s);class c extends HTMLElement{constructor(e,a,n,t,s){super(),console.log(`${this.nodeName} has been constructed`),this.source=e,this.alt=a,this.text=n,this.href=t,this.bg=s,this.components={},this.setup()}setup(){this.getComponents,this.classList.add("card")}get getComponents(){var e=document.createElement("div");e.classList.add("card__bg"),e.style.backgroundImage=`url(${this.bg})`,e.style.backgroundSize="contain",e.style.backgroundRepeat="no-repeat",e.style.backgroundPosition="center";var a=document.createElement("img");a.classList.add("card__img"),a.id=this.text,a.src=this.source,a.alt=this.alt;var n=document.createElement("div");n.classList.add("card__text");var t=document.createElement("a");t.innerHTML=this.text,t.href=this.href,t.classList.add("card__title"),n.appendChild(t),this.components.card_bg=e,this.components.card_img=a,this.components.card_text=n}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.appendChild(this.components.card_bg),this.appendChild(this.components.card_img),this.appendChild(this.components.card_text)}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-alumnistorecard",c);class o extends HTMLElement{constructor(e,a,n,t,s){super(),console.log(`${this.nodeName} has been constructed`),this.image=e,this.alternative=a,this.text=n,this.link=t,this.bg=s,this.components={},this.setup()}setup(){let e;this.getComponents,this.range=40,this.calcValue=(e,a)=>(e/a*this.range-this.range/2).toFixed(1),this.addEventListener("click",(e=>{console.log("CLICK FROM STORE"),window.location=this.components.alumnistorecard.components.card_text.firstElementChild.href})),this.addEventListener("mouseover",(({x:a,y:n})=>{console.log("mouse over");var t=this.components.alumnistorecard.components.card_img,s=this.components.alumnistorecard.components.card_bg;e&&window.cancelAnimationFrame(e),e=window.requestAnimationFrame((()=>{const e=this.calcValue(n,window.innerHeight),c=this.calcValue(a,window.innerWidth);this.firstElementChild.style.transform=`rotateX(${e}deg) rotateY(${c}deg)`,t.style.transform=`\n              translateX(${-c}px) translateY(${e}px) translateZ(50px)\n              rotateX(-${e}deg) rotateY(-${2*c}deg)\n              `,s.style.backgroundPosition=`${.45*c}px ${.45*-e}px`,s.style.backgroundSize="contain"}))}),!1)}get getComponents(){var e=document.createElement("h3");e.innerHTML="Alumni Stores";var a=document.createElement("h1");a.innerHTML="Get The Alumni Discount";var n=document.createElement("div");return n.classList.add("cards"),this.components={h3:e,h1:a,cardholder:n,alumnistorecard:new c(this.image,this.alternative,this.text,this.link,this.bg)}}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.components.cardholder.appendChild(this.components.alumnistorecard),this.appendChild(this.components.cardholder)}get htmlTemlpate(){return'\n      <div id="alumnistore" class="cards">\n      <h3>Alumni Stores</h3>\n      <h1>Get The Alumni Discount</h1>\n      <div class="card card__one">\n        <div class="card__bg"></div>\n        <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_mono.png" />\n        <div class="card__text">\n          <p class="card__title">Princess Mononoke</p>\n        </div>\n      </div>\n      <div class="card card__two">\n        <div class="card__bg"></div>\n        <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_chihiro.png" />\n        <div class="card__text">\n          <p class="card__title">Spirited Away</p>\n        </div>\n      </div>\n      <div class="card card__three">\n        <div class="card__bg"></div>\n        <img class="card__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/3dr_howlcastle.png" />\n        <div class="card__text">\n          <p class="card__title">Howl\'s Moving Castle</p>\n        </div>\n      </div>\n    </div>\n    \n    <span class="notice">view on desktop for mousemove</span>\n    <a class="twitter__link" target="_blank" href="https://twitter.com/intent/tweet?text=Check%20out%20this%203D%20CSS%20depth%20effect%20from%20@dazulu&via=CodePen%20&hashtags=codepen%2cfrontend&url=https://codepen.io/dazulu/details/VVZrQv/"><img class="twitter__icon" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/62105/twitter.svg" /> Share</a>\n      '}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-alumnistore",o);class l extends HTMLElement{constructor(e,a){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.caption=a,this.src=e,this.setup()}setup(){this.getComponents}get getComponents(){this.components.src=this.src,this.components.caption=this.caption}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.appendChild(this.components.src),this.appendChild(this.components.caption)}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-imageroll",l);class i{constructor(){this.click=0,this.nodeLength=0,this.nodes}toggleScroll(e,a){switch(console.log(a),console.log(this.click),this.nodes=document.querySelectorAll(e),this.nodeLength=this.nodes.length,a){case"prev":this.click-=1;break;case"next":this.click+=1}this.click<0&&(this.click=0),this.click>this.nodeLength-1&&(this.click=this.nodeLength-1),console.log(this.nodes[this.click]),console.log(this.click),this.nodes[this.click].scrollIntoView(!1)}}class d extends HTMLElement{constructor(e){super(),console.log(`${this.nodeName} has been constructed`),this.direction=e,this.setup()}static get observedAttributes(){return[""]}get styleTemplate(){return'\n            <style>\n            es-toggle{\n                cursor: pointer;\n                position: absolute;\n                top:50%;\n                transform: scale(var(--ggs,1));\n                border-image-slice: 8;\n                border-image-width: 7px;\n                transition: 0.5s ease;\n                z-index:2;\n            }\n            es-toggle[prev]{\n                transform-origin: right;\n                left:30%;\n            }\n            es-toggle[next]{\n                transform-origin: right;\n                right:30%;\n            }\n            es-toggle::before{\n                content: "";\n                position: absolute;\n                transform: scale(var(--ggs,1)) rotate(45deg);\n                width: calc(78vh * 0.05);\n                height: calc(78vh * 0.05);\n                border-radius: 100px;\n                cursor: pointer;\n                border-image-width: 2px;\n            }\n            es-toggle::after{\n                content: "";\n                box-sizing: border-box;\n                position: absolute;\n                width: calc(78vh * 0.05);\n                height: calc(78vh * 0.05);\n\n                border-radius:25%;\n            }\n\n            es-toggle[prev]::after{\n                border-bottom: 7px inset;\n                border-left: 7px solid white;\n                transform: rotate(45deg);\n            }\n            es-toggle[next]::after{\n                border-bottom: 7px inset;\n                border-right: 7px solid white;\n                transform: rotate(-45deg);\n            }\n\n            es-toggle[hide]{\n                display:none;\n            }\n            es-toggle:hover{\n                transform: scaleY(1.5) scaleX(2);\n            }\n            </style>\n        '}setup(){this.scrolledger=new i,this.addEventListener("click",(e=>{window.ComponentHandler.scrolledger.toggleScroll("la-imageroll",this.direction)}))}resize(){this.render()}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render(),this.setAttribute(this.direction,"")}visibility(){switch(window.Espii.mobile){case!0:case!1:return this.toggleAttribute("hide",!1)}}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}attributeChangedCallback(e,a,n){}render(){return this.innerHTML="\n        "}}customElements.define("es-toggle",d);const r=n.p+"417179598bd3cd17818c6658d484826e.png",h=(n.p,n.p+"7de44d4f59b472c16269ff72a4b158ba.svg"),p=n.p+"1e0b8a6dbf5d06746fd7b6fe2f357671.svg",m=n.p+"97718016000f5817062c39136d3b1e2d.png",u=n.p+"5c030eea7d67d905c0f7dc931d44b7ee.svg",g=n.p+"c4b5246a2776b73d13c546e6b033959c.svg",b=n.p+"de7a18b187eeb2c2b12beff79993f360.svg",v=n.p+"42e1d291a15cda3f8abe01e4bbd20033.svg",C=n.p+"4a15dcbd577b08c2ff3d8a5fac4bb8f4.svg";class f extends HTMLElement{constructor(e=[],a=""){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.renderer=a,this.imageSet=e,this.setup()}setup(){this.getComponents}get getComponents(){for(var e=new d("next"),a=new d("prev"),n=document.createElement("div"),t=0;t<this.imageSet.length;t++){let e=document.createElement("div");e.style.backgroundImage=`url(${this.imageSet[t][0]})`;let a=document.createElement("caption");a.innerHTML=this.imageSet[t][1];let s=new l(e,a);n.appendChild(s)}n.classList.add("imagecontainer"),this.components.imagecontainer=n,this.components.toggleright=e,this.components.toggleleft=a,this.components.one=new o(h,"cognita.png","Cognita","http://cognitaconsultancy.com",p),this.components.two=new o(u,"anatolia.png","Anatolia Consultancy","https://anatoliaconsultancy.business.site",m),this.components.three=new o(b,"lacardLight.png","Light Academy International School","http://lis.sc.ke/nairobi/",g),this.components.four=new o(v,"lacardLight.png","Light Academy Nairobi School","http://lightacademy.ac.ke/nairobi/",C),this.components.five=new o(r,"espiilogo.png","Espii Iterface & Designs","https://bmscis.github.io/components/","")}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render(this.renderer)}attributeChangedCallback(e,a,n){}render(e){switch(e){case"ALUMNI STORES":return this.disconnectedCallback(),this.setAttribute("store",""),this.appendChild(this.components.one),this.appendChild(this.components.two),this.appendChild(this.components.three),this.appendChild(this.components.four),void this.appendChild(this.components.five);case"HOME":return this.disconnectedCallback(),(a=document.createElement("div")).classList.add("centralcarousel"),a.appendChild(this.components.imagecontainer),this.appendChild(a),this.appendChild(this.components.toggleleft),void this.appendChild(this.components.toggleright);default:var a;return(a=document.createElement("div")).classList.add("centralcarousel"),a.appendChild(this.components.imagecontainer),this.appendChild(a),this.appendChild(this.components.toggleleft),void this.appendChild(this.components.toggleright)}}get styledTemplate(){return`\n        <style>\n            la-carousel{\n                width:${window.innerWidth+"px"};\n                height:calc(${window.innerHeight}/0.45)px;\n            }\n        </style>\n        `}disconnectedCallback(){var e=this.childElementCount;for(let a=0;a<e;a++)this.removeChild(this.children[0]);console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-carousel",f);const y=n.p+"de4a91d69535227c26e1ba33ac25945c.svg";class w extends HTMLElement{constructor(){super(),console.log(`${this.nodeName} has been constructed`),this.setup()}setup(){this.getComponents}get getComponents(){}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.innerHTML=`\n        <img src=${y}>\n        `}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-logo",w);class k extends HTMLElement{constructor(e){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.dropdownList=e,this.setup()}setup(){this.getComponents}drop(){this.animate([{transform:"translateY(1045px)"}],{duration:650,fill:"forwards",easing:"cubic-bezier(.39,.11,.61,.84)"})}fold(){this.animate([{transform:"translateY(1020px)"}],{duration:650,fill:"forwards",easing:"cubic-bezier(.39,.11,.61,.84)"})}get getComponents(){this.dropdownList.forEach((e=>{this.components[e]=new E(e,!1,[])}))}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){for(const[e,a]of Object.entries(this.components))this.appendChild(a)}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-menuanchorbuttondropdown",k);class E extends HTMLElement{constructor(e,a,n=[]){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.text=e,this.active=a,this.setupDropdown=!1,this.dropdownList=n,this.setup()}setup(){switch(this.addEventListener("click",(e=>{var a=document.querySelector("la-menuanchorbutton[active]");a.hasAttribute("dropdown")&&a.toggleAttribute("dropdown",!1),this.toggleAttribute("dropdown"),a.getActive,this.setActive=0,this.active=!0,("ALUMNI STORES"===this.text||"HOME"===this.text)&&document.querySelector("la-carousel").render(this.text)})),0==this.dropdownList.length){case!0:this.getComponents;break;case!1:this.setComponents=0}this.getActive}get getActive(){switch(this.active){case!0:return void this.toggleAttribute("active");case!1:return void this.toggleAttribute("active",!1)}}set setActive(e){this.toggleAttribute("active",!0)}get getComponents(){}set setComponents(e){this.setupDropdown=!0;var a=new k(this.dropdownList);this.components.dropdown=a}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){switch(this.setupDropdown){case!0:return this.innerHTML=`\n                <button>${this.text}</button>\n                `,void this.appendChild(this.components.dropdown);case!1:return void(this.innerHTML=`\n                <button>${this.text}</button>\n                `)}}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-menuanchorbutton",E);class N extends HTMLElement{constructor(){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.setup()}setup(){this.getComponents}get getComponents(){var e=new E("HOME",!0,[]),a=new E("ABOUT LAAA",!1,["MISSION AND VISION","CONSTITUTION","PARTNERSHIP","ABOUT US","CLUBS"]),n=new E("ACTIVITIES",!1,["EVENTS","PROJECTS"]),t=new E("ALUMNI STORES",!1,[]),s=new E("GALLERY",!1,[]),c=new E("CONTACT US",!1,[]);this.components.home=e,this.components.aboutlaa=a,this.components.activities=n,this.components.alumnistories=t,this.components.buttongallery=s,this.components.buttoncontact=c}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.appendChild(this.components.home),this.appendChild(this.components.aboutlaa),this.appendChild(this.components.activities),this.appendChild(this.components.alumnistories),this.appendChild(this.components.buttongallery),this.appendChild(this.components.buttoncontact)}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-menuanchor",N);class T extends HTMLElement{constructor(){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.setup()}setup(){this.getComponents}get getComponents(){var e=new w,a=new N;this.components.logo=e,this.components.menuanchor=a}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.appendChild(this.components.logo),this.appendChild(this.components.menuanchor),this.appendChild(document.createElement("div"))}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-mainmenu",T);class S extends HTMLElement{constructor(){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.setup()}setup(){this.getComponents}get getComponents(){}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.innerHTML="\n        "}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-stories",S);const x=n.p+"1d3e986b05ee5c6de7b8cefec4d5bf54.jpg",$=n.p+"ef5ceae525a55b7c4145636b757770b9.jpg",L=n.p+"3ef5cfe676c9e7ca822b9dcf4cc3124c.jpg",A=n.p+"03cdf32eff988759b05af7f9a7f2772e.jpg",_=n.p+"ec4b697291c6f8472d420cdbbf05dc3f.jpg",D=n.p+"506d074bcef189fed06156a3375d5a76.jpg",O=n.p+"45b48bb40708f3e4ecdd874574332b18.jpg";class M extends HTMLElement{constructor(){super(),console.log(`${this.nodeName} has been constructed`),this.components={},this.setup()}setup(){this.getComponents}get getComponents(){}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render()}attributeChangedCallback(e,a,n){}render(){this.innerHTML=`${this.htmlTemplate}\n        `}get htmlTemplate(){return'\n        <div class="route" id="index"></div>\n        <div class="route" id="oct-week-3"></div>\n        <div class="route" id="oct-week-4"></div>\n        <div class="route" id="nov-week-1"></div>\n        <div class="route" id="schedule"></div>\n        <main class="cal-device">\n          <header class="cal-header">\n            <div class="cal-subheader"></div>\n            <div class="cal-bar">\n              <div class="cal-button -left">\n                <i class="fa fa-bars -calendar"></i>\n                <a href="#index" class="fa fa-chevron-left -schedule"></a>\n              </div>\n              <div class="cal-title">\n                <div class="cal-heading -calendar">Calendar</div>\n                <div class="cal-heading -schedule">Wednesday, November 10</div>\n              </div>\n              <div class="cal-button -right">\n                <i class="fa fa-search"></i>\n              </div>\n            </div>\n          </header>\n          <section class="cal-app">\n            <header class="cal-week">\n              <div class="cal-weekday">SUN</div>\n              <div class="cal-weekday">MON</div>\n              <div class="cal-weekday">TUE</div>\n              <div class="cal-weekday">WED</div>\n              <div class="cal-weekday">THU</div>\n              <div class="cal-weekday">FRI</div>\n              <div class="cal-weekday">SAT</div>\n            </header>\n            <div class="cal-scene -calendar">\n              <div class="cal-month -october">\n                <header class="cal-header">\n                  <a class="cal-link" href="#oct-week-1"><span>October</span></a>\n                  <a class="cal-arrow" href="#nov-week-1"><i class="fa fa-chevron-up"></i></a>\n                  <a class="cal-arrow" href="#oct-week-4"><i class="fa fa-chevron-up"></i></a>\n                </header>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a href="#schedule"  class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n              </div>\n              <div class="cal-month -november">\n                <header class="cal-header">\n                  <a class="cal-link" href="#nov-week-1"><span>November</span></a>\n                  <a class="cal-arrow"><i class="fa fa-chevron-up"></i></a>\n                </header>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a href="#schedule" class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a href="#schedule" class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a href="#schedule" class="cal-day"></a>\n                <a href="#schedule" class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n              </div>\n              <div class="cal-month -december">\n                <header class="cal-header">\n                  <a class="cal-link"><span>December</span></a>\n                  <a class="cal-arrow" href="#nov-week-1"><i class="fa fa-chevron-down"></i></a>\n                  <a class="cal-arrow" href="#oct-week-3"><i class="fa fa-chevron-down"></i></a>\n                </header>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a href="#schedule" class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a href="#schedule" class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n              </div>\n              <div class="cal-month -january">\n                <header class="cal-header">\n                  <div class="cal-link"><span>January</span></div>\n                  <a class="cal-arrow" href="#oct-week-4"><i class="fa fa-chevron-down"></i></a>\n                </header>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n                <a class="cal-day"></a>\n              </div>\n            </div>\n            <div class="cal-scene -schedule">\n              <div class="cal-item">\n                <div class="cal-time"><span>08:00</span></div>\n                <div class="cal-task">\n                  <p>wake up</p>\n                </div>\n              </div>\n              <div class="cal-item -long">\n                <div class="cal-time"><span>12:15</span></div>\n                <div class="cal-task">\n                  <p>meeting with the team, discussing the project requirements</p>\n                </div>\n              </div>\n              <div class="cal-item">\n                <div class="cal-time"><span>13:00</span></div>\n                <div class="cal-task">\n                  <p>lunch with Peter</p>\n                  <a><i class="fa fa-map-marker"></i>cafe <q>Petit brasserie</q></a>\n                </div>\n              </div>\n              <div class="cal-item">\n                <div class="cal-time"><span>14:30</span></div>\n                <div class="cal-task">\n                  <p>call with Johnathan and Stevie</p>\n                </div>\n              </div>\n              <div class="cal-item -long">\n                <div class="cal-time"><span>16:45</span></div>\n                <div class="cal-task">\n                  <p>project presentation</p>\n                  <a><i class="fa fa-map-marker"></i>Head Office</a>\n                </div>\n              </div>\n              <div class="cal-item">\n                <div class="cal-time"><span>18:00</span></div>\n                <div class="cal-task">\n                  <p>call with Johnathan and Stevie</p>\n                </div>\n              </div>\n              <div class="cal-item -long">\n                <div class="cal-time"><span>19:00</span></div>\n                <div class="cal-task">\n                  <p>David\'s birthday party</p>\n                  <a><i class="fa fa-map-marker"></i>bar <q>Tailor\'s John</q></a>\n                </div>\n              </div>\n              <div class="cal-item">\n                <div class="cal-time"></div>\n                <div class="cal-task"></div>\n              </div>\n            </div>\n          </section>\n        </main>\n        <div class="meta">\n          <h1>CSS-only Colorful <br>Calendar Concept</h1>\n          <p>\n            Dribbble Rework<br />\n            Original Shot by <a href="https://dribbble.com/shots/2335073-Calendar-App-Animation" target="_blank">Ludmila Shevchenko</a>\n          </p>\n          <p>\n            Click on the arrows (when enabled) and the highlighted date to see the effect.<br>\n            You can also go <strong>back</strong> in your browser to navigate between scenes, or click the left arrow in the schedule view.\n          </p>\n          <p>\n            Works in all modern browsers.\n          </p>\n        </div>\n        '}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-calendar",M);class H extends HTMLElement{constructor(e=""){super(),console.log(`${this.nodeName} has been constructed`),this.renderCarousel=e,this.components={},this.setup()}setup(){this.getComponents,this.scrolledger=new i,window.addEventListener("resize",(e=>{this.checkMainMenu()}))}checkMainMenu(){switch(window.innerWidth<650){case!0:return this.components.mainmenu.replaceChild(this.components.sidebar,this.components.mainmenu.components.menuanchor),void this.setAttribute("mobi","");case!1:return void(this.hasAttribute("mobi")&&(this.components.mainmenu.replaceChild(this.components.mainmenu.components.menuanchor,this.components.sidebar),this.removeAttribute("mobi")))}}get getComponents(){this.components.calendar=new M,this.components.stories=new S,this.components.mainmenu=new T,this.components.carousel=new f([[x,"Annual Gala 2019"],[$,"Annual Gala 2019"],[L,"Football Tournament 2019"],[A,"Football Tournament 2020"],[_,"Iftar 2018"],[D,"IGCSE Reunion"],[O,"Saturday Football Matches"]],this.renderCarousel),this.components.sidebar=new s(this.components.mainmenu.components.menuanchor)}static get observedAttributes(){return[""]}connectedCallback(){console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232"),this.render(),this.checkMainMenu()}attributeChangedCallback(e,a,n){}render(){this.appendChild(this.components.mainmenu),this.appendChild(this.components.carousel),this.appendChild(this.components.calendar)}disconnectedCallback(){console.log(`%c ${this.nodeName} %c has been %c DISCONNECTED`,"color:#cd4cf7","color:black","color:#ef1a1a")}}customElements.define("la-componenthandler",H)}},a={};function n(t){var s=a[t];if(void 0!==s)return s.exports;var c=a[t]={exports:{}};return e[t](c,c.exports,n),c.exports}n.d=(e,a)=>{for(var t in a)n.o(a,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var a=n.g.document;if(!e&&a&&(a.currentScript&&(e=a.currentScript.src),!e)){var t=a.getElementsByTagName("script");t.length&&(e=t[t.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),(()=>{const{ComponentHandler:e}=n(91);var a=document.createElement("link");a.href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css",a.rel="stylesheet",window.addEventListener("load",(n=>{var t=new e("ALUMNI STORES");document.head.appendChild(a),document.body.innerHTML=`\n    <style>\n        html{\n            height:${window.innerHeight+"px"};\n            //width:${window.innerWidth+"px"}\n        }\n        la-componenthandle{\n            height:${window.innerHeight+"px"};\n            //width:${window.innerWidth+"px"}\n        }\n    </style>\n    `,document.body.appendChild(t),window.ComponentHandler=t}))})()})();