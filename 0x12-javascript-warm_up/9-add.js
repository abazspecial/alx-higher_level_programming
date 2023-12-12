#!/usr/bin/node
function add (a, b) {
  const c = a + b;
  console.log(c);
}
// output
add(Number(process.argv[2]), Number(process.argv[3]));
