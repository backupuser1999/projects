Array.prototype.push = function(){
    for (var i = 0, len = arguments.length; i < len; i++){
      this[this.length] = arguments[i];
      if (Object.prototype.toString.call(this).slice(8, -1).toLowerCase() === "object"){
        this.length += 1;
      }
    }
    return this.length;
  };