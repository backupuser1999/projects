(function(){

    

    function js(name){

        var s = document.createElement("script");

        s.src = "./polyfills/" + name + ".js";

        document.getElementsByTagName("head")[0].appendChild(s);

    }

    function iterate(){

        var requiredPolyFills = new Array;
        
        
        function arp(a){
            requiredPolyFills.push(a);
        }

        if(typeof isCallable != "function"){ arp("isCallable"); }

        //number
        if(!Number.isFinite){ arp("isFinite"); }
        if(!Number.prototype.isFinite){ arp("isFinitePrototype"); }

        if(!Number.isNaN){ arp("isNan"); }
        if(!Number.prototype.isNaN){ arp("isNaNPrototype"); }

        if(!Number.isSafeInteger ){ arp("isSafeInteger"); }
        if(!Number.prototype.isSafeInteger ){ arp("isSafeIntegerPrototype"); }

        if(!Number.isInteger){ arp("isInteger"); }
        if(!Number.prototype.isInteger){ arp("isIntegerPrototype"); }

        if(!Number.parseFloat){ arp("parseFloat"); }
        if(!Number.prototype.parseFloat){ arp("parseFloatPrototype"); }

        if(!Number.parseInt){ arp("parseInt"); }
        if(!Number.prototype.parseInt){ arp("parseIntPrototype"); }


        //array
        if(!Array.prototype.indexOf){ arp("indexOf"); }
        if(!Array.prototype.includes){ arp("includes"); }
        if(!Array.isArray){ arp("isArray"); }
        if(!Array.from){ arp("from"); }
        if(!Array.prototype.pop){ arp("popPrototype") }
        if(!Array.prototype.push){ arp("pushPrototype") }
        if(!Array.prototype.forEach){ arp("forEachPrototype") }
        if(!Array.prototype.every){ arp("everyPrototype") }
        if(!Array.prototype.some){ arp("somePrototype") }
        if(!Array.prototype.find){ arp("findPrototype") }
        if(!Array.prototype.findIndex){ arp("findIndexPrototype") }
        if(!Array.prototype.map){ arp("mapPrototype") }

        //string
        if(!String.prototype.trim){ arp("trimPrototype"); }
        if(!String.prototype.blink){ arp("blinkPrototype"); }
        if(!String.prototype.bold){ arp("boldPrototype"); }
        if(!String.prototype.italics){ arp("italicsPrototype"); }
        if(!String.prototype.strike){ arp("strikePrototype"); }
        if(!String.prototype.anchor){ arp("anchorPrototype"); }
        if(!String.prototype.sub){ arp("subPrototype"); }
        if(!String.prototype.sup){ arp("supPrototype"); }
        if(!String.prototype.small){ arp("smallPrototype"); }
        if(!String.prototype.big){ arp("bigPrototype"); }
        if(!String.prototype.fontsize){ arp("fontsizePrototype"); }
        if(!String.prototype.fontcolor){ arp("fontcolorPrototype"); }
        if(!String.prototype.link){ arp("linkPrototype"); }
        if(!String.prototype.fixed){ arp("fixedPrototype"); }
        if(!String.prototype.trimEnd){ arp("trimEndPrototype"); }
        if(!String.prototype.trimStart){ arp("trimStartPrototype"); }
        if(!String.prototype.trimLeft){ arp("trimLeftPrototype"); }
        if(!String.prototype.trimRight){ arp("trimRightPrototype"); }
        if(!String.prototype.repeat){ arp("repeatPrototype"); }
        if(!String.prototype.padStart){ arp("padStartPrototype"); }
        if(!String.prototype.padEnd){ arp("padEndPrototype"); }
        if(!String.prototype.startsWith){ arp("startsWithPrototype"); }
        if(!String.prototype.endsWith){ arp("endsWithPrototype"); }


        /// strike bold i  element   HTML5 detection

        return requiredPolyFills;

    }

    var requiredPolyFills = iterate();

    console.log(requiredPolyFills);
  
    for(var i = 0; i < requiredPolyFills.length; i++){
        js(requiredPolyFills[i]);
    }

})();