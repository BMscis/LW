export class ScrollLedger{
    constructor(){
        this.click = 0
        this.nodeLength = 0
        this.nodes
    }

    toggleScroll(nodeList,direction){
        //console.log(direction)
        //console.log(this.click)
        this.nodes = document.querySelectorAll(nodeList)
        this.nodeLength = this.nodes.length
        switch(direction){
            case "prev":
                this.click -= 1
                break
            case "next":
                this.click +=1
                break
        }
        if(this.click < 0){
            this.click = 0
        }
        if(this.click > this.nodeLength - 1){
            this.click = this.nodeLength - 1 
        }
        // console.log(this.nodes[this.click])
        // console.log(this.click)
        this.nodes[this.click].scrollIntoView(false)
    }
}