var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ctx = require('axel');
var moving_shape_1 = require('./moving_shape');
var edges = {
    x: {
        min: 0,
        max: ctx.cols
    },
    y: {
        min: 0,
        max: ctx.rows
    }
};
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(position, size, initialSpeed) {
        _super.call(this, position, size, initialSpeed);
    }
    Ball.prototype.bounce = function (axis) {
        // TODO: refactor to a single function if possible
        if (this.position[axis] < edges[axis].min) {
            this.position[axis] = this.position[axis] * (-1);
            this.speed[axis] = this.speed[axis] * (-1);
        }
        if (this.position[axis] + this.size[axis] > edges[axis].max) {
            // Do your maths ;)
            this.position[axis] = 2 * edges[axis].max - 2 * this.size[axis] - this.position[axis];
            this.speed[axis] = this.speed[axis] * (-1);
        }
    };
    Ball.prototype.move = function () {
        _super.prototype.move.call(this);
        this.bounce('x');
        this.bounce('y');
    };
    ;
    return Ball;
})(moving_shape_1.MovingShape);
exports.Ball = Ball;
