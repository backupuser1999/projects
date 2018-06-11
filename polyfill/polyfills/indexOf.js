Array.prototype.indexOf = function indexOf(member, startFrom){
    
    if(this == null){
        throw new TypeError("Array.prototype.indexOf() - can't convert `" + this + "` to object");
    }
    
    var index = isFinite(startFrom) ? Math.floor(startFrom) : 0;
    var that = this instanceof Object ? this : new Object(this);
    var length = isFinite(that.length) ? Math.floor(that.length) : 0;

    if(index >= length){
        return -1;
    }

    if(index < 0){
        index = Math.max(length + index, 0);
    }

    if(member === undefined){
        do {
            if(index in that && that[index] === undefined){
               return index;
            }
        } while(++index < length);
    } else {
        do {
            if(that[index] === member){
                return index;
            }
        } while(++index < length);
    }

    return -1;
};