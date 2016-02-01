var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var shape_1 = require('./shape');
var MovingShape = (function (_super) {
    __extends(MovingShape, _super);
    function MovingShape(position, size, inintialSpeed) {
        this.speed = inintialSpeed;
        _super.call(this, position, size);
    }
    MovingShape.prototype.move = function () {
        this.position.x += this.speed.x;
        this.position.y += this.speed.y;
    };
    return MovingShape;
})(shape_1.Shape);
exports.MovingShape = MovingShape;
