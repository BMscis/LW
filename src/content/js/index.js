const { ComponentHandler } = require("./components/componentHandler")
var lnk = document.createElement("link")
lnk.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@900&display=swap"
lnk.rel = "stylesheet"
var lnk4 = document.createElement("link")
lnk4.href = "https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
lnk4.rel = "stylesheet"

var lnk5 = document.createElement('link')
lnk5.href = "https://fonts.googleapis.com/icon?family=Material+Icons"
lnk5.rel = "stylesheet"
var lnk2 = document.createElement("link")
lnk2.href = "https://fonts.googleapis.com"
lnk2.rel = "preconnect"

var lnk3 = document.createElement("link")
lnk3.href = "https://fonts.gstatic.com"
lnk3.rel = "preconnect"
lnk3.setAttribute("crossorigin",'')

window.addEventListener("load", e =>{
    var componenthandler = new ComponentHandler()
    document.head.appendChild(lnk)
    document.head.appendChild(lnk2)
    document.head.appendChild(lnk3)
    document.head.appendChild(lnk4)
    document.head.appendChild(lnk5)
    //document.body.innerHTML = getBodyStyle()
    document.body.appendChild(componenthandler)
    window.ComponentHandler = componenthandler

    setTimeout(function(){
            let twitterHref = document.querySelector("#twitter-widget-0")
            twitterHref.style.position = "absolute"
            twitterHref.style.width = "500px"
            twitterHref.style.height = "500px"
            twitterHref.style.overflow = "auto"
            let offsetHeight = twitterHref.offsetHeight
            document.querySelector("#twlabel").style.height = offsetHeight + "px"
            document.querySelector("la-socialpad").style.height = offsetHeight + "px"

            // let fbLabel = document.querySelector("#fblabel")
            // let fbWidth = fbLabel.offsetWidth
            // let fbPageSize = fbPageSet(fbWidth)
            // fbLabel.appendChild(fbPageSize)
            },3500)
})
// window.addEventListener("resize", e =>{
//     console.log("RESIZE")
//     let fbLabel = document.querySelector("#fblabel")
//     fbLabel.removeChild(fbLabel.children[0])
//     let fbWidth = fbLabel.offsetWidth
//     let fbPageSize = fbPageSet(fbWidth)
//     fbLabel.appendChild(fbPageSize)
// })
// function fbPageSet(val){
//     if (val > 500){
//         val = 500
//     }
//     let fbPage = document.createElement("div")
//         fbPage.classList.add("fb-page")
//         fbPage.setAttribute("data-href","https://www.facebook.com/LightAcademyAlumni")
//         fbPage.setAttribute("data-tabs","timeline")
//         fbPage.setAttribute("data-width",`${val}`)
//         fbPage.setAttribute("data-height",`500`)
//         fbPage.setAttribute("data-small-header","true")
//         fbPage.setAttribute("data-add-container-width","true")
//         fbPage.setAttribute("data-hide-cover","true")
//         fbPage.setAttribute("data-hide-cover","true")
//         fbPage.setAttribute("data-show-facepile","false")
//         fbPage.style.position = "relative"
//         fbPage.style.overflow = "auto"

//         return fbPage
// }