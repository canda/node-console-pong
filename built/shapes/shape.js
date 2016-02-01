var ctx = require('axel');
;
;
var Shape = (function () {
    function Shape(position, size) {
        this.position = position;
        this.size = size;
    }
    Shape.prototype.draw = function () {
        ctx.box(Math.round(this.position.x), Math.round(this.position.y), this.size.x, this.size.y);
    };
    ;
    return Shape;
})();
exports.Shape = Shape;
;
