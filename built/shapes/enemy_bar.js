var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ctx = require('axel');
var bar_1 = require('./bar');
var edgePositions = {};
edgePositions[0 /* Left */] = 1;
edgePositions[1 /* Right */] = ctx.cols;
var EnemyBar = (function (_super) {
    __extends(EnemyBar, _super);
    function EnemyBar(height, maxSpeed) {
        _super.call(this, height, 1 /* Right */, maxSpeed);
    }
    EnemyBar.prototype.follow = function (ballPosition) {
        this.speed.x = 0;
        this.speed.y = 0;
        if (ballPosition.y < this.position.y + (this.size.y / 2)) {
            this.speed.y = this.maxSpeed * (-1);
        }
        if (ballPosition.y > this.position.y + (this.size.y / 2)) {
            this.speed.y = this.maxSpeed;
        }
    };
    return EnemyBar;
})(bar_1.Bar);
exports.EnemyBar = EnemyBar;
;
