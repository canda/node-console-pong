var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ctx = require('axel');
var moving_shape_1 = require('./moving_shape');
var top = 0;
var bottom = ctx.rows;
var left = 0;
var right = ctx.cols;
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(position, size, inintialSpeed) {
        _super.call(this, position, size, inintialSpeed);
    }
    Ball.prototype.move = function () {
        _super.prototype.move.call(this);
        // TODO: refactor to a single function
        if (this.position.y < top) {
            this.position.y = this.position.y * (-1);
            this.speed.y = this.speed.y * (-1);
        }
        if (this.position.y + this.size.y > bottom) {
            // Do your maths ;)
            this.position.y = 2 * bottom - 2 * this.size.y - this.position.y;
            this.speed.y = this.speed.y * (-1);
        }
        if (this.position.x < left) {
            this.position.x = this.position.x * (-1);
            this.speed.x = this.speed.x * (-1);
        }
        if (this.position.x + this.size.x > right) {
            // Do your maths ;)
            this.position.x = 2 * right - 2 * this.size.x - this.position.x;
            this.speed.x = this.speed.x * (-1);
        }
    };
    ;
    return Ball;
})(moving_shape_1.MovingShape);
exports.Ball = Ball;
