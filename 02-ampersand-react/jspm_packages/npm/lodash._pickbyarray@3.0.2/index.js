/* */ 
(function(process) {
  function pickByArray(object, props) {
    object = toObject(object);
    var index = -1,
        length = props.length,
        result = {};
    while (++index < length) {
      var key = props[index];
      if (key in object) {
        result[key] = object[key];
      }
    }
    return result;
  }
  function toObject(value) {
    return isObject(value) ? value : Object(value);
  }
  function isObject(value) {
    var type = typeof value;
    return !!value && (type == 'object' || type == 'function');
  }
  module.exports = pickByArray;
})(require("process"));
