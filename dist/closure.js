"use strict";
function parentFunc(name) {
    var letter = "Name is";
    function closureFunc() {
        return 'letter' + name;
    }
    return closureFunc;
}
var parentName = parentFunc('Tony');
console.log(parentName);
//# sourceMappingURL=closure.js.map