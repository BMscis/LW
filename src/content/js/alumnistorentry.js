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
    var componenthandler = new ComponentHandler("ALUMNI STORE")
    document.head.appendChild(lnk)
    document.head.appendChild(lnk2)
    document.head.appendChild(lnk3)
    document.head.appendChild(lnk4)
    document.head.appendChild(lnk5)
    document.body.innerHTML = getBodyStyle()
    document.body.appendChild(componenthandler)
    window.ComponentHandler = componenthandler
})

function getBodyStyle(){
    return `
    <style>
        html{
            height:${window.innerHeight + "px"};
            //width:${window.innerWidth + "px"}
        }
        la-componenthandle{
            height:${window.innerHeight + "px"};
            //width:${window.innerWidth + "px"}
        }
    </style>
    `
}