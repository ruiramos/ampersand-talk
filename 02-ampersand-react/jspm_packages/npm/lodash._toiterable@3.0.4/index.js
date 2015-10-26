/* */ 
(function(process) {
  var baseValues = require("lodash._basevalues"),
      keys = require("lodash.keys");
  var MAX_SAFE_INTEGER = 9007199254740991;
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  var getLength = baseProperty('length');
  function isArrayLike(value) {
    return value != null && isLength(getLength(value));
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function toIterable(value) {
    if (value == null) {
      return [];
    }
    if (!isArrayLike(value)) {
      return values(value);
    }
    return isObject(value) ? value : Object(value);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function values(object) {
    return baseValues(object, keys(object));
  }
  module.exports = toIterable;
})(require("process"));
