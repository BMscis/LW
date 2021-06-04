const { ComponentHandler } = require("./components/componentHandler")
var lnk = document.createElement("link")
lnk.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
lnk.rel = "stylesheet"
window.addEventListener("load", e =>{
    var componenthandler = new ComponentHandler()
    document.head.appendChild(lnk)
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