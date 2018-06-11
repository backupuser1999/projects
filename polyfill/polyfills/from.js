Array.from = (function(){

return function from(arrayLike/*, mapFn, thisArg */){
    var C = this;
    var items = Object(arrayLike);

    if(arrayLike == null){
    throw new TypeError("Array.from requires an array-like object - not null or undefined");
    }

    var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
    var T;
    if(typeof mapFn !== "undefined"){
    
        if(!isCallable(mapFn)){
            throw new TypeError("Array.from: when provided, the second argument must be a function");
        }

        if(arguments.length > 2){
            T = arguments[2];
        }
    }


    var len = items.length;

    var A = isCallable(C) ? Object(new C(len)) : new Array(len);

    var k = 0;

    var kValue;
    while(k < len){
    kValue = items[k];
    if(mapFn){
        A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
    } else {
        A[k] = kValue;
    }
    k += 1;
    }
    A.length = len;
    return A;
};
}());