#!/usr/bin/node
  // this is for converter
exports.converter = function (base) {
  return function (num) {
    return num.toString(base);
  };
};
