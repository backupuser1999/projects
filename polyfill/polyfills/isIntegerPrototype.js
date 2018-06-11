Number.prototype.isInteger = function(){
    return typeof this === "number" && isFinite(this) && Math.floor(this) === this;
};
