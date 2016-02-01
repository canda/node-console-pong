var assert = require('assert');
var ctx = require('axel');
// Shape destructuring
var shape_1 = require('./shape');
describe('Shape', function () {
    beforeEach(function () {
        spyOn(ctx, 'box');
    });
    var shape;
    var position = {
        x: 1,
        y: 2
    };
    var size = {
        x: 3,
        y: 4
    };
    beforeEach(function () {
        shape = new shape_1.Shape(position, size);
    });
    describe('#draw()', function () {
        it('should call ctx.box to draw the shape', function () {
            shape.draw();
            expect(ctx.box).toHaveBeenCalled();
        });
        it('should call ctx.box to draw with size and position parameters', function () {
            shape.draw();
            expect(ctx.box.calls.argsFor(0)).toEqual([position.x, position.y, size.x, size.y]);
        });
    });
});
