Array.prototype.pop = function(){

    if(this.length == 0){
        return undefined;
    }
    
    return this.splice(this.length -1)[0];
};
  