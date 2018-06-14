Array.prototype.getRange = function(start, end){
    return this.slice(start-1, end);
}

Array.prototype.sortObj = function(key){

    var reverse = false;

    if(key.slice(0, 1) == "-"){
        key = key.slice(1);
        reverse = true;
    }

    if(typeof this[0][key] === "string"){

        this.sort(function(a, b){

            var nameA = a[key].toLowerCase();
            var nameB = b[key].toLowerCase();

            if(nameA < nameB){
                return -1;
            } 

            if(nameA > nameB){
                return 1;
            }

            return 0
        });
    }

    if(typeof this[0][key] === "number"){
        this.sort(function (a, b) {
            return a[key] - b[key];
        });
            
    }

    if(reverse === true){
        this.reverse();
    }

    return this;

}