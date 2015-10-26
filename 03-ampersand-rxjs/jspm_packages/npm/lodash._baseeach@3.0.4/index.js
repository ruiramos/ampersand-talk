/* */ 
(function(process) {
  var keys = require("lodash.keys");
  var MAX_SAFE_INTEGER = 9007199254740991;
  var baseEach = createBaseEach(baseForOwn);
  var baseFor = createBaseFor();
  function baseForOwn(object, iteratee) {
    return baseFor(object, iteratee, keys);
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
  function createBaseFor(fromRight) {
    return function(object, iteratee, keysFunc) {
      var iterable = toObject(object),
          props = keysFunc(object),
          length = props.length,
          index = fromRight ? length : -1;
      while ((fromRight ? index-- : ++index < length)) {
        var key = props[index];
        if (iteratee(iterable[key], key, iterable) === false) {
          break;
        }
      }
      return object;
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
  module.exports = baseEach;
})(require("process"));
