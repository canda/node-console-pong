var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ctx = require('axel');
var moving_shape_1 = require('./moving_shape');
var edgePositions = {};
edgePositions[0 /* Left */] = 1;
edgePositions[1 /* Right */] = ctx.cols;
var Bar = (function (_super) {
    __extends(Bar, _super);
    function Bar(height, edge, maxSpeed) {
        _super.call(this, {
            x: edgePositions[edge],
            y: (ctx.rows - height) / 2
        }, {
            x: 1,
            y: height
        }, {
            x: 0,
            y: 0
        });
        this.maxSpeed = maxSpeed;
    }
    return Bar;
})(moving_shape_1.MovingShape);
exports.Bar = Bar;
;
