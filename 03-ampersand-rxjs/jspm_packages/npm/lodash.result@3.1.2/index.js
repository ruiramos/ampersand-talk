/* */ 
(function(process) {
  var baseGet = require("lodash._baseget"),
      baseSlice = require("lodash._baseslice"),
      toPath = require("lodash._topath"),
      isArray = require("lodash.isarray"),
      isFunction = require("lodash.isfunction");
  var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
      reIsPlainProp = /^\w*$/;
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
  function result(object, path, defaultValue) {
    var result = object == null ? undefined : object[path];
    if (result === undefined) {
      if (object != null && !isKey(path, object)) {
        path = toPath(path);
        object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
        result = object == null ? undefined : object[last(path)];
      }
      result = result === undefined ? defaultValue : result;
    }
    return isFunction(result) ? result.call(object) : result;
  }
  module.exports = result;
})(require("process"));
