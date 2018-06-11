Number.prototype.isFinite = function(){
    return typeof this === "number" && isFinite(this);
}