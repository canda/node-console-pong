// Uses AXEL's node module 
var ctx = require('axel');
import {Ball} from './shapes/ball';

var ball = new Ball({
  x: ctx.cols / 2,
  y: ctx.rows / 2
}, {
  x: 2,
  y: 1
}, {
  x: 0.6,
  y: 0.3
});

// console.log(ball.position);
// console.log('ctx.cols', ctx.cols)
// console.log('ctx.rows', ctx.rows)

var drawBall = (): void => {
  // Clear the terminal/screen/console 
  ctx.clear();
  // Green box 
  ctx.bg(0, 255, 0);
  ball.move();
  ball.draw();
  ctx.cursor.restore();
  // console.log(ball.position);
};

setInterval(drawBall, 100);

