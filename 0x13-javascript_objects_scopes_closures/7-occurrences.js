#!/usr/bin/node
exports.nbOccurences = function (list, searchElement) {
  let nOccurrences = 0;
  // itearate
  for (let i = 0; i < list.length; i++) {
    if (searchElement === list[i]) {
      nOccurrences++;
    }
  }
  return nOccurrences;
};
