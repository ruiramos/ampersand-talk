/* */ 
(function(process) {
  var baseGet = require("lodash._baseget"),
      baseSlice = require("lodash._baseslice"),
      toPath = require("lodash._topath"),
      isArguments = require("lodash.isarguments"),
      isArray = require("lodash.isarray");
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
  var reIsUint = /^\d+$/;
  var objectProto = Object.prototype;
  var hasOwnProperty = objectProto.hasOwnProperty;
  var MAX_SAFE_INTEGER = 9007199254740991;
  function isIndex(value, length) {
    value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
    length = length == null ? MAX_SAFE_INTEGER : length;
    return value > -1 && value % 1 == 0 && value < length;
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
  function last(array) {
    var length = array ? array.length : 0;
    return length ? array[length - 1] : undefined;
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  function has(object, path) {
    if (object == null) {
      return false;
    }
    var result = hasOwnProperty.call(object, path);
    if (!result && !isKey(path)) {
      path = toPath(path);
      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
      if (object == null) {
        return false;
      }
      path = last(path);
      result = hasOwnProperty.call(object, path);
    }
    return result || (isLength(object.length) && isIndex(path, object.length) && (isArray(object) || isArguments(object)));
  }
  module.exports = has;
})(require("process"));
