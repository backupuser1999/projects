String.prototype.anchor = function(name){
    return "<a name=\""  + name + "\">" + this + "</a>";
};