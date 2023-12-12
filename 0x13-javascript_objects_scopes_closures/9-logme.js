#!/usr/bin/node
let narg = 0;
  // this is for logme
exports.logMe = function (item) {
  console.log(narg + ': ' + item);
  narg++;
};
