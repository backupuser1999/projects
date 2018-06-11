Array.prototype.every = function(callbackfn, thisArg){

    var T, k;

    if(this == null){
        throw new TypeError("this is null or not defined");
    }

    var O = Object(this);
    var len = O.length >>> 0;

    if(typeof callbackfn !== "function"){
        throw new TypeError();
    }

    if(arguments.length > 1){
        T = thisArg;
    }

    k = 0;

    while(k < len){

        var kValue;

        if(k in O){
        kValue = O[k];

        var testResult = callbackfn.call(T, kValue, k, O);
        
        if(!testResult){
            return false;
        }
        }
        k++;
    }
    return true;
};