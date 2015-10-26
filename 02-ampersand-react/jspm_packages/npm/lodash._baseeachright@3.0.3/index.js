/* */ 
(function(process) {
  var baseForRight = require("lodash._baseforright"),
      keys = require("lodash.keys");
  var MAX_SAFE_INTEGER = 9007199254740991;
  var baseEachRight = createBaseEach(baseForOwnRight, true);
  function baseForOwnRight(object, iteratee) {
    return baseForRight(object, iteratee, keys);
  }
  function baseProperty(key) {
    return function(object) {
      return object == null ? undefined : object[key];
    };
  }
  function createBaseEach(eachFunc, fromRight) {
    return function(collection, iteratee) {
      var length = collection ? getLength(collection) : 0;
      if (!isLength(length)) {
        return eachFunc(collection, iteratee);
      }
      var index = fromRight ? length : -1,
          iterable = toObject(collection);
      while ((fromRight ? index-- : ++index < length)) {
        if (iteratee(iterable[index], index, iterable) === false) {
          break;
        }
      }
      return collection;
    };
  }
  var getLength = baseProperty('length');
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function toObject(value) {
    return isObject(value) ? value : Object(value);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = baseEachRight;
})(require("process"));
