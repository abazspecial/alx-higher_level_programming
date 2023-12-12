#!/usr/bin/node
class Rectangle {
    // this is the rectangle class
  constructor (w, h) {
    if ((w > 0) && (h > 0)) {
      this.width = w;
      this.height = h;
    }
  }
// for print
  print () {
    for (let i = 0; i < this.height; i++) {
      let s = '';
      for (let j = 0; j < this.width; j++) {
        s += 'X';
      }
      console.log(s);
    }
  }
//  to rotate
  rotate () {
    const aux = this.width;
    this.width = this.height;
    this.height = aux;
  }
// To double
  double () {
    this.width *= 2;
    this.height *= 2;
  }
}

module.exports = Rectangle;
