var ctx = require('axel');

export interface Point {
  x: number,
  y: number
};

export interface Size {
  x: number,
  y: number
};

export class Shape {
  constructor(public position: Point, public size: Size) {
  }
  draw () : void {
    ctx.box(this.position.x, this.position.y,
        this.size.x, this.size.y);
  };

};
