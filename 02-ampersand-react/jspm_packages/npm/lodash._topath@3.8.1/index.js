/* */ 
(function(process) {
  var isArray = require("lodash.isarray");
  var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;
  var reEscapeChar = /\\(\\)?/g;
  function baseToString(value) {
    return value == null ? '' : (value + '');
  }
  function toPath(value) {
    if (isArray(value)) {
      return value;
    }
    var result = [];
    baseToString(value).replace(rePropName, function(match, number, quote, string) {
      result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
    });
    return result;
  }
  module.exports = toPath;
})(require("process"));
