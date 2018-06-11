Array.prototype.includes = function(value){
 
    var bool = false;
    if(this.indexOf(value) > -1){
        bool = true;
    }

    return bool;
};