"use strict";
var Startup = /** @class */ (function () {
    function Startup() {
    }
    Startup.main = function () {
        console.log('Hellow World');
        return 0;
    };
    return Startup;
}());
function parentFunc(name) {
    var letter = "Name is";
    function closureFunc() {
        return 'letter' + name;
    }
    return closureFunc;
}
var parentName = parentFunc('Tony');
console.log(parentName);
//# sourceMappingURL=out.js.map