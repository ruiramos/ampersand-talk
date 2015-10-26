/* */ 
var assert = require("assert");
var next = require("./array-next");
var arr = ['a', 'b', 'c'];
assert.equal(next(arr), 'a');
assert.equal(next(arr, 'a'), 'b');
assert.equal(next(arr, 'c'), 'a');
console.log('passed');
