var canvas

window.onload = function(){

    let height = 400;
    let width = 400;
    let element = document.getElementById("canvas");

    canvas = new Canvas(element, width, height);

    canvas.rect(99,99, 99,99, "#000", "stroke", new Event("wheel", function(e){ console.log(e.wheelDelta, e.wheelDeltaX, e.wheelDeltaY); }));


    canvas.initializeEvents();
}

function Canvas(element, width, height){

    this.element = element;
    this.width = width;
    this.height = height;
    this.endInit = false;

    this.events = new Array;

    element.width = width;
    element.height = height;

    this.ctx = element.getContext("2d");

}

Canvas.prototype.addEvent = function(x1, y1, x2, y2, type, fnc){

    this.events.push({ x1: x1, x2: x2, y1: y1, y2: y2, type: type, fnc: fnc });

    if(this.endInit){
        this.initializeEvents();
    }
}

Canvas.prototype.initializeEvents = function(){



    let eventTypes = {
        mousedown: new Array,
        mouseup: new Array,
        mousemove: new Array,
        wheel: new Array,
        click: new Array,
        dblclick: new Array
    }

    //cleanup listener
    this.element = removeListenerFromCanvas(this.element);
    this.ctx = this.element.getContext("2d");
    

    for(let i = 0; i < this.events.length; i++){
        let currentEvent = this.events[i];
        eventTypes[currentEvent.type].push(currentEvent);
    }


    for(let key in eventTypes){

        let currentEvents = eventTypes[key];
        if(currentEvents.length > 0){
            this.element.addEventListener(key, function(evt){
                let bd = evt.target.getBoundingClientRect();
                let bl = bd.left;
                let bt = bd.top;
        
                let pos = {
                    x: evt.clientX - bl,
                    y: evt.clientY - bt,
                }
        
                for(let i = 0; i < currentEvents.length; i++){
        
                    let currentEvent = currentEvents[i];
        
                    if(pos.x >= currentEvent.x1 && pos.x <= currentEvent.x2 && pos.y >= currentEvent.y1 && pos.y <= currentEvent.y2){
                        currentEvent.fnc(event);
                    }
        
                }
        
            }
        );

        }

    }
    
    if(this.endInit === false){
        this.endInit = true;
    }

}


function removeListenerFromCanvas(element){
       
    var newCanvas = document.createElement("canvas");
    var context = newCanvas.getContext("2d");

    newCanvas.width = element.width;
    newCanvas.height = element.height;

    context.drawImage(element, 0, 0);
    element.parentNode.replaceChild(newCanvas, element);

    return newCanvas;
}


Canvas.prototype.rect = function(x, y, width, height, color, type, ev){

    this.ctx.beginPath();

    if(type == "fill"){
        this.ctx.fillStyle = color;
    }
    
    if(type == "stroke"){
        this.ctx.strokeStyle = color;
    }
    
    this.ctx.rect(x, y, width, height);

    this.ctx.closePath();

    if(type == "fill"){
        this.ctx.fill();
    }
    
    if(type == "stroke"){
        this.ctx.stroke();
    }

    if(ev){
        this.addEvent(x, y, x + width, y + height, ev.type, ev.fnc);
    }


}

function Event(type, fnc){

    this.type = type;
    this.fnc = fnc;

}