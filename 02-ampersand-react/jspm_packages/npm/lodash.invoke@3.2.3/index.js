/* */ 
(function(process) {
  var baseEach = require("lodash._baseeach"),
      invokePath = require("lodash._invokepath"),
      isArray = require("lodash.isarray"),
      restParam = require("lodash.restparam");
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
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
  function isKey(value, object) {
    var type = typeof value;
    if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
      return true;
    }
    if (isArray(value)) {
      return false;
    }
    var result = !reIsDeepProp.test(value);
    return result || (object != null && value in toObject(object));
  }
  function isLength(value) {
    return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
  }
  function toObject(value) {
    return isObject(value) ? value : Object(value);
  }
  var invoke = restParam(function(collection, path, args) {
    var index = -1,
        isFunc = typeof path == 'function',
        isProp = isKey(path),
        result = isArrayLike(collection) ? Array(collection.length) : [];
    baseEach(collection, function(value) {
      var func = isFunc ? path : ((isProp && value != null) ? value[path] : undefined);
      result[++index] = func ? func.apply(value, args) : invokePath(value, path, args);
    });
    return result;
  });
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = invoke;
})(require("process"));
