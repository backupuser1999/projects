Number.prototype.isSafeInteger = function(){
    return Number.isInteger(this) && Math.abs(this) <= Number.MAX_SAFE_INTEGER;
};