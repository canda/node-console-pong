var assert = require('assert');
var ctx = require('axel');
var moving_shape_1 = require('./moving_shape');
describe('MovingShape', function () {
    beforeEach(function () {
        spyOn(ctx, 'box');
    });
    var movingShape;
    var position = {
        x: 1,
        y: 2
    };
    var size = {
        x: 3,
        y: 4
    };
    var speed = {
        x: 5,
        y: -5
    };
    beforeEach(function () {
        movingShape = new moving_shape_1.MovingShape(position, size, speed);
    });
    describe('#move()', function () {
        it('moves the right amount of x and y position', function () {
            movingShape.move();
            expect(movingShape.position.x).toBe(6);
            expect(movingShape.position.y).toBe(-3);
        });
    });
});
