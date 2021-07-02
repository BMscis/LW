export class Calendar extends HTMLElement{
    constructor(){
        super()
        console.log(`${this.nodeName} has been constructed`)
        this.components = {}
        this.setup()
        return
    }
    setup(){
        this.getComponents
    }
    get getComponents(){
        return
    }
    connectedCallback(){
        console.log(`%c ${this.nodeName} %c has been %c CONNECTED`,"color:#cd4cf7","color:black","color:#0ee232" )
        this.render()
        return
    }
    render(){
        this.innerHTML = `${this.htmlTemplate}
        `
        return
    }
    get htmlTemplate(){
        return `
        <div class="route" id="index"></div>
        <div class="route" id="oct-week-3"></div>
        <div class="route" id="oct-week-4"></div>
        <div class="route" id="nov-week-1"></div>
        <div class="route" id="schedule"></div>
        <main class="cal-device">
          <header class="cal-header">
            <div class="cal-subheader"></div>
            <div class="cal-bar">
              <div class="cal-button -left">
                <i class="fa fa-bars -calendar"></i>
                <a href="#index" class="fa fa-chevron-left -schedule"></a>
              </div>
              <div class="cal-title">
                <div class="cal-heading -calendar">Calendar</div>
                <div class="cal-heading -schedule">Wednesday, November 10</div>
              </div>
              <div class="cal-button -right">
                <i class="fa fa-search"></i>
              </div>
            </div>
          </header>
          <section class="cal-app">
            <header class="cal-week">
              <div class="cal-weekday">SUN</div>
              <div class="cal-weekday">MON</div>
              <div class="cal-weekday">TUE</div>
              <div class="cal-weekday">WED</div>
              <div class="cal-weekday">THU</div>
              <div class="cal-weekday">FRI</div>
              <div class="cal-weekday">SAT</div>
            </header>
            <div class="cal-scene -calendar">
              <div class="cal-month -october">
                <header class="cal-header">
                  <a class="cal-link" href="#oct-week-1"><span>October</span></a>
                  <a class="cal-arrow" href="#nov-week-1"><i class="fa fa-chevron-up"></i></a>
                  <a class="cal-arrow" href="#oct-week-4"><i class="fa fa-chevron-up"></i></a>
                </header>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a href="#schedule"  class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
              </div>
              <div class="cal-month -november">
                <header class="cal-header">
                  <a class="cal-link" href="#nov-week-1"><span>November</span></a>
                  <a class="cal-arrow"><i class="fa fa-chevron-up"></i></a>
                </header>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a href="#schedule" class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a href="#schedule" class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a href="#schedule" class="cal-day"></a>
                <a href="#schedule" class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
              </div>
              <div class="cal-month -december">
                <header class="cal-header">
                  <a class="cal-link"><span>December</span></a>
                  <a class="cal-arrow" href="#nov-week-1"><i class="fa fa-chevron-down"></i></a>
                  <a class="cal-arrow" href="#oct-week-3"><i class="fa fa-chevron-down"></i></a>
                </header>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a href="#schedule" class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a href="#schedule" class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
              </div>
              <div class="cal-month -january">
                <header class="cal-header">
                  <div class="cal-link"><span>January</span></div>
                  <a class="cal-arrow" href="#oct-week-4"><i class="fa fa-chevron-down"></i></a>
                </header>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
                <a class="cal-day"></a>
              </div>
            </div>
            <div class="cal-scene -schedule">
              <div class="cal-item">
                <div class="cal-time"><span>08:00</span></div>
                <div class="cal-task">
                  <p>wake up</p>
                </div>
              </div>
              <div class="cal-item -long">
                <div class="cal-time"><span>12:15</span></div>
                <div class="cal-task">
                  <p>meeting with the team, discussing the project requirements</p>
                </div>
              </div>
              <div class="cal-item">
                <div class="cal-time"><span>13:00</span></div>
                <div class="cal-task">
                  <p>lunch with Peter</p>
                  <a><i class="fa fa-map-marker"></i>cafe <q>Petit brasserie</q></a>
                </div>
              </div>
              <div class="cal-item">
                <div class="cal-time"><span>14:30</span></div>
                <div class="cal-task">
                  <p>call with Johnathan and Stevie</p>
                </div>
              </div>
              <div class="cal-item -long">
                <div class="cal-time"><span>16:45</span></div>
                <div class="cal-task">
                  <p>project presentation</p>
                  <a><i class="fa fa-map-marker"></i>Head Office</a>
                </div>
              </div>
              <div class="cal-item">
                <div class="cal-time"><span>18:00</span></div>
                <div class="cal-task">
                  <p>call with Johnathan and Stevie</p>
                </div>
              </div>
              <div class="cal-item -long">
                <div class="cal-time"><span>19:00</span></div>
                <div class="cal-task">
                  <p>David's birthday party</p>
                  <a><i class="fa fa-map-marker"></i>bar <q>Tailor's John</q></a>
                </div>
              </div>
              <div class="cal-item">
                <div class="cal-time"></div>
                <div class="cal-task"></div>
              </div>
            </div>
          </section>
        </main>
        <div class="meta">
          <h1>CSS-only Colorful <br>Calendar Concept</h1>
          <p>
            Dribbble Rework<br />
            Original Shot by <a href="https://dribbble.com/shots/2335073-Calendar-App-Animation" target="_blank">Ludmila Shevchenko</a>
          </p>
          <p>
            Click on the arrows (when enabled) and the highlighted date to see the effect.<br>
            You can also go <strong>back</strong> in your browser to navigate between scenes, or click the left arrow in the schedule view.
          </p>
          <p>
            Works in all modern browsers.
          </p>
        </div>
        `
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
customElements.define('la-calendar', Calendar);