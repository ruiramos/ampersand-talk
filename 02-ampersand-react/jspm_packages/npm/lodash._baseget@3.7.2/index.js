/* */ 
(function(process) {
  function baseGet(object, path, pathKey) {
    if (object == null) {
      return ;
    }
    if (pathKey !== undefined && pathKey in toObject(object)) {
      path = [pathKey];
    }
    var index = 0,
        length = path.length;
    while (object != null && index < length) {
      object = object[path[index++]];
    }
    return (index && index == length) ? object : undefined;
  }
  function toObject(value) {
    return isObject(value) ? value : Object(value);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = baseGet;
})(require("process"));
