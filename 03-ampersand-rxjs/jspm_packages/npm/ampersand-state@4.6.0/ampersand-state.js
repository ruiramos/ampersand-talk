/* */ 
(function(process) {
  var uniqueId = require("lodash.uniqueid");
  var assign = require("lodash.assign");
  var omit = require("lodash.omit");
  var escape = require("lodash.escape");
  var forEach = require("lodash.foreach");
  var includes = require("lodash.includes");
  var isString = require("lodash.isstring");
  var isObject = require("lodash.isobject");
  var isArray = require("lodash.isarray");
  var isDate = require("lodash.isdate");
  var isUndefined = require("lodash.isundefined");
  var isFunction = require("lodash.isfunction");
  var isNull = require("lodash.isnull");
  var isEmpty = require("lodash.isempty");
  var isEqual = require("lodash.isequal");
  var clone = require("lodash.clone");
  var has = require("lodash.has");
  var result = require("lodash.result");
  var keys = require("lodash.keys");
  var bind = require("lodash.bind");
  var defaults = require("lodash.defaults");
  var union = require("lodash.union");
  var Events = require("ampersand-events");
  var KeyTree = require("key-tree-store");
  var arrayNext = require("array-next");
  var changeRE = /^change:/;
  function Base(attrs, options) {
    options || (options = {});
    this.cid || (this.cid = uniqueId('state'));
    this._events = {};
    this._values = {};
    this._definition = Object.create(this._definition);
    if (options.parse)
      attrs = this.parse(attrs, options);
    this.parent = options.parent;
    this.collection = options.collection;
    this._keyTree = new KeyTree();
    this._initCollections();
    this._initChildren();
    this._cache = {};
    this._previousAttributes = {};
    if (attrs)
      this.set(attrs, assign({
        silent: true,
        initial: true
      }, options));
    this._changed = {};
    if (this._derived)
      this._initDerived();
    if (options.init !== false)
      this.initialize.apply(this, arguments);
  }
  assign(Base.prototype, Events, {
    extraProperties: 'ignore',
    idAttribute: 'id',
    namespaceAttribute: 'namespace',
    typeAttribute: 'modelType',
    initialize: function() {
      return this;
    },
    getId: function() {
      return this[this.idAttribute];
    },
    getNamespace: function() {
      return this[this.namespaceAttribute];
    },
    getType: function() {
      return this[this.typeAttribute];
    },
    isNew: function() {
      return this.getId() == null;
    },
    escape: function(attr) {
      return escape(this.get(attr));
    },
    isValid: function(options) {
      return this._validate({}, assign(options || {}, {validate: true}));
    },
    parse: function(resp, options) {
      return resp;
    },
    serialize: function(options) {
      var attrOpts = assign({props: true}, options);
      var res = this.getAttributes(attrOpts, true);
      forEach(this._children, function(value, key) {
        res[key] = this[key].serialize();
      }, this);
      forEach(this._collections, function(value, key) {
        res[key] = this[key].serialize();
      }, this);
      return res;
    },
    set: function(key, value, options) {
      var self = this;
      var extraProperties = this.extraProperties;
      var changing,
          changes,
          newType,
          newVal,
          def,
          cast,
          err,
          attr,
          attrs,
          dataType,
          silent,
          unset,
          currentVal,
          initial,
          hasChanged,
          isEqual;
      if (isObject(key) || key === null) {
        attrs = key;
        options = value;
      } else {
        attrs = {};
        attrs[key] = value;
      }
      options = options || {};
      if (!this._validate(attrs, options))
        return false;
      unset = options.unset;
      silent = options.silent;
      initial = options.initial;
      changes = [];
      changing = this._changing;
      this._changing = true;
      if (!changing) {
        this._previousAttributes = this.attributes;
        this._changed = {};
      }
      for (attr in attrs) {
        newVal = attrs[attr];
        newType = typeof newVal;
        currentVal = this._values[attr];
        def = this._definition[attr];
        if (!def) {
          if (this._children[attr] || this._collections[attr]) {
            this[attr].set(newVal, options);
            continue;
          } else if (extraProperties === 'ignore') {
            continue;
          } else if (extraProperties === 'reject') {
            throw new TypeError('No "' + attr + '" property defined on ' + (this.type || 'this') + ' model and extraProperties not set to "ignore" or "allow"');
          } else if (extraProperties === 'allow') {
            def = this._createPropertyDefinition(attr, 'any');
          } else if (extraProperties) {
            throw new TypeError('Invalid value for extraProperties: "' + extraProperties + '"');
          }
        }
        isEqual = this._getCompareForType(def.type);
        dataType = this._dataTypes[def.type];
        if (dataType && dataType.set) {
          cast = dataType.set(newVal);
          newVal = cast.val;
          newType = cast.type;
        }
        if (def.test) {
          err = def.test.call(this, newVal, newType);
          if (err) {
            throw new TypeError('Property \'' + attr + '\' failed validation with error: ' + err);
          }
        }
        if (isUndefined(newVal) && def.required) {
          throw new TypeError('Required property \'' + attr + '\' must be of type ' + def.type + '. Tried to set ' + newVal);
        }
        if (isNull(newVal) && def.required && !def.allowNull) {
          throw new TypeError('Property \'' + attr + '\' must be of type ' + def.type + ' (cannot be null). Tried to set ' + newVal);
        }
        if ((def.type && def.type !== 'any' && def.type !== newType) && !isNull(newVal) && !isUndefined(newVal)) {
          throw new TypeError('Property \'' + attr + '\' must be of type ' + def.type + '. Tried to set ' + newVal);
        }
        if (def.values && !includes(def.values, newVal)) {
          throw new TypeError('Property \'' + attr + '\' must be one of values: ' + def.values.join(', ') + '. Tried to set ' + newVal);
        }
        hasChanged = !isEqual(currentVal, newVal, attr);
        if (def.setOnce && currentVal !== undefined && hasChanged && !initial) {
          throw new TypeError('Property \'' + attr + '\' can only be set once.');
        }
        if (hasChanged) {
          changes.push({
            prev: currentVal,
            val: newVal,
            key: attr
          });
          self._changed[attr] = newVal;
        } else {
          delete self._changed[attr];
        }
      }
      forEach(changes, function(change) {
        self._previousAttributes[change.key] = change.prev;
        if (unset) {
          delete self._values[change.key];
        } else {
          self._values[change.key] = change.val;
        }
      });
      if (!silent && changes.length)
        self._pending = true;
      if (!silent) {
        forEach(changes, function(change) {
          self.trigger('change:' + change.key, self, change.val, options);
        });
      }
      if (changing)
        return this;
      if (!silent) {
        while (this._pending) {
          this._pending = false;
          this.trigger('change', this, options);
        }
      }
      this._pending = false;
      this._changing = false;
      return this;
    },
    get: function(attr) {
      return this[attr];
    },
    toggle: function(property) {
      var def = this._definition[property];
      if (def.type === 'boolean') {
        this[property] = !this[property];
      } else if (def && def.values) {
        this[property] = arrayNext(def.values, this[property]);
      } else {
        throw new TypeError('Can only toggle properties that are type `boolean` or have `values` array.');
      }
      return this;
    },
    previousAttributes: function() {
      return clone(this._previousAttributes);
    },
    hasChanged: function(attr) {
      if (attr == null)
        return !isEmpty(this._changed);
      return has(this._changed, attr);
    },
    changedAttributes: function(diff) {
      if (!diff)
        return this.hasChanged() ? clone(this._changed) : false;
      var val,
          changed = false;
      var old = this._changing ? this._previousAttributes : this.attributes;
      var def,
          isEqual;
      for (var attr in diff) {
        def = this._definition[attr];
        if (!def)
          continue;
        isEqual = this._getCompareForType(def.type);
        if (isEqual(old[attr], (val = diff[attr])))
          continue;
        (changed || (changed = {}))[attr] = val;
      }
      return changed;
    },
    toJSON: function() {
      return this.serialize();
    },
    unset: function(attrs, options) {
      attrs = Array.isArray(attrs) ? attrs : [attrs];
      forEach(attrs, function(key) {
        var def = this._definition[key];
        var val;
        if (def.required) {
          val = result(def, 'default');
          return this.set(key, val, options);
        } else {
          return this.set(key, val, assign({}, options, {unset: true}));
        }
      }, this);
    },
    clear: function(options) {
      var self = this;
      forEach(keys(this.attributes), function(key) {
        self.unset(key, options);
      });
      return this;
    },
    previous: function(attr) {
      if (attr == null || !Object.keys(this._previousAttributes).length)
        return null;
      return this._previousAttributes[attr];
    },
    _getDefaultForType: function(type) {
      var dataType = this._dataTypes[type];
      return dataType && dataType['default'];
    },
    _getCompareForType: function(type) {
      var dataType = this._dataTypes[type];
      if (dataType && dataType.compare)
        return bind(dataType.compare, this);
      return isEqual;
    },
    _validate: function(attrs, options) {
      if (!options.validate || !this.validate)
        return true;
      attrs = assign({}, this.attributes, attrs);
      var error = this.validationError = this.validate(attrs, options) || null;
      if (!error)
        return true;
      this.trigger('invalid', this, error, assign(options || {}, {validationError: error}));
      return false;
    },
    _createPropertyDefinition: function(name, desc, isSession) {
      return createPropertyDefinition(this, name, desc, isSession);
    },
    _ensureValidType: function(type) {
      return includes(['string', 'number', 'boolean', 'array', 'object', 'date', 'any'].concat(keys(this._dataTypes)), type) ? type : undefined;
    },
    getAttributes: function(options, raw) {
      options || (options = {});
      defaults(options, {
        session: false,
        props: false,
        derived: false
      });
      var res = {};
      var val,
          item,
          def;
      for (item in this._definition) {
        def = this._definition[item];
        if ((options.session && def.session) || (options.props && !def.session)) {
          val = (raw) ? this._values[item] : this[item];
          if (typeof val === 'undefined')
            val = result(def, 'default');
          if (typeof val !== 'undefined')
            res[item] = val;
        }
      }
      if (options.derived) {
        for (item in this._derived)
          res[item] = this[item];
      }
      return res;
    },
    _initDerived: function() {
      var self = this;
      forEach(this._derived, function(value, name) {
        var def = self._derived[name];
        def.deps = def.depList;
        var update = function(options) {
          options = options || {};
          var newVal = def.fn.call(self);
          if (self._cache[name] !== newVal || !def.cache) {
            if (def.cache) {
              self._previousAttributes[name] = self._cache[name];
            }
            self._cache[name] = newVal;
            self.trigger('change:' + name, self, self._cache[name]);
          }
        };
        def.deps.forEach(function(propString) {
          self._keyTree.add(propString, update);
        });
      });
      this.on('all', function(eventName) {
        if (changeRE.test(eventName)) {
          self._keyTree.get(eventName.split(':')[1]).forEach(function(fn) {
            fn();
          });
        }
      }, this);
    },
    _getDerivedProperty: function(name, flushCache) {
      if (this._derived[name].cache) {
        if (flushCache || !this._cache.hasOwnProperty(name)) {
          this._cache[name] = this._derived[name].fn.apply(this);
        }
        return this._cache[name];
      } else {
        return this._derived[name].fn.apply(this);
      }
    },
    _initCollections: function() {
      var coll;
      if (!this._collections)
        return ;
      for (coll in this._collections) {
        this._safeSet(coll, new this._collections[coll](null, {parent: this}));
      }
    },
    _initChildren: function() {
      var child;
      if (!this._children)
        return ;
      for (child in this._children) {
        this._safeSet(child, new this._children[child]({}, {parent: this}));
        this.listenTo(this[child], 'all', this._getEventBubblingHandler(child));
      }
    },
    _getEventBubblingHandler: function(propertyName) {
      return bind(function(name, model, newValue) {
        if (changeRE.test(name)) {
          this.trigger('change:' + propertyName + '.' + name.split(':')[1], model, newValue);
        } else if (name === 'change') {
          this.trigger('change', this);
        }
      }, this);
    },
    _verifyRequired: function() {
      var attrs = this.attributes;
      for (var def in this._definition) {
        if (this._definition[def].required && typeof attrs[def] === 'undefined') {
          return false;
        }
      }
      return true;
    },
    _safeSet: function safeSet(property, value) {
      if (property in this) {
        throw new Error('Encountered namespace collision while setting instance property `' + property + '`');
      }
      this[property] = value;
      return this;
    }
  });
  Object.defineProperties(Base.prototype, {
    attributes: {get: function() {
        return this.getAttributes({
          props: true,
          session: true
        });
      }},
    all: {get: function() {
        return this.getAttributes({
          session: true,
          props: true,
          derived: true
        });
      }},
    isState: {
      get: function() {
        return true;
      },
      set: function() {}
    }
  });
  function createPropertyDefinition(object, name, desc, isSession) {
    var def = object._definition[name] = {};
    var type,
        descArray;
    if (isString(desc)) {
      type = object._ensureValidType(desc);
      if (type)
        def.type = type;
    } else {
      if (isArray(desc)) {
        descArray = desc;
        desc = {
          type: descArray[0],
          required: descArray[1],
          'default': descArray[2]
        };
      }
      type = object._ensureValidType(desc.type);
      if (type)
        def.type = type;
      if (desc.required)
        def.required = true;
      if (desc['default'] && typeof desc['default'] === 'object') {
        throw new TypeError('The default value for ' + name + ' cannot be an object/array, must be a value or a function which returns a value/object/array');
      }
      def['default'] = desc['default'];
      def.allowNull = desc.allowNull ? desc.allowNull : false;
      if (desc.setOnce)
        def.setOnce = true;
      if (def.required && isUndefined(def['default']) && !def.setOnce)
        def['default'] = object._getDefaultForType(type);
      def.test = desc.test;
      def.values = desc.values;
    }
    if (isSession)
      def.session = true;
    Object.defineProperty(object, name, {
      set: function(val) {
        this.set(name, val);
      },
      get: function() {
        if (!this._values) {
          throw Error('You may be trying to `extend` a state object with "' + name + '" which has been defined in `props` on the object being extended');
        }
        var value = this._values[name];
        var typeDef = this._dataTypes[def.type];
        if (typeof value !== 'undefined') {
          if (typeDef && typeDef.get) {
            value = typeDef.get(value);
          }
          return value;
        }
        value = result(def, 'default');
        this._values[name] = value;
        return value;
      }
    });
    return def;
  }
  function createDerivedProperty(modelProto, name, definition) {
    var def = modelProto._derived[name] = {
      fn: isFunction(definition) ? definition : definition.fn,
      cache: (definition.cache !== false),
      depList: definition.deps || []
    };
    forEach(def.depList, function(dep) {
      modelProto._deps[dep] = union(modelProto._deps[dep] || [], [name]);
    });
    Object.defineProperty(modelProto, name, {
      get: function() {
        return this._getDerivedProperty(name);
      },
      set: function() {
        throw new TypeError('"' + name + '" is a derived property, it can\'t be set directly.');
      }
    });
  }
  var dataTypes = {
    string: {'default': function() {
        return '';
      }},
    date: {
      set: function(newVal) {
        var newType;
        if (newVal == null) {
          newType = typeof null;
        } else if (!isDate(newVal)) {
          try {
            var dateVal = new Date(newVal).valueOf();
            if (isNaN(dateVal)) {
              dateVal = new Date(parseInt(newVal, 10)).valueOf();
              if (isNaN(dateVal))
                throw TypeError;
            }
            newVal = dateVal;
            newType = 'date';
          } catch (e) {
            newType = typeof newVal;
          }
        } else {
          newType = 'date';
          newVal = newVal.valueOf();
        }
        return {
          val: newVal,
          type: newType
        };
      },
      get: function(val) {
        if (val == null) {
          return val;
        }
        return new Date(val);
      },
      'default': function() {
        return new Date();
      }
    },
    array: {
      set: function(newVal) {
        return {
          val: newVal,
          type: isArray(newVal) ? 'array' : typeof newVal
        };
      },
      'default': function() {
        return [];
      }
    },
    object: {
      set: function(newVal) {
        var newType = typeof newVal;
        if (newType !== 'object' && isUndefined(newVal)) {
          newVal = null;
          newType = 'object';
        }
        return {
          val: newVal,
          type: newType
        };
      },
      'default': function() {
        return {};
      }
    },
    state: {
      set: function(newVal) {
        var isInstance = newVal instanceof Base || (newVal && newVal.isState);
        if (isInstance) {
          return {
            val: newVal,
            type: 'state'
          };
        } else {
          return {
            val: newVal,
            type: typeof newVal
          };
        }
      },
      compare: function(currentVal, newVal, attributeName) {
        var isSame = currentVal === newVal;
        if (!isSame) {
          if (currentVal) {
            this.stopListening(currentVal);
          }
          if (newVal != null) {
            this.listenTo(newVal, 'all', this._getEventBubblingHandler(attributeName));
          }
        }
        return isSame;
      }
    }
  };
  function extend(protoProps) {
    var parent = this;
    var child;
    var args = [].slice.call(arguments);
    if (protoProps && protoProps.hasOwnProperty('constructor')) {
      child = protoProps.constructor;
    } else {
      child = function() {
        return parent.apply(this, arguments);
      };
    }
    assign(child, parent);
    var Surrogate = function() {
      this.constructor = child;
    };
    Surrogate.prototype = parent.prototype;
    child.prototype = new Surrogate();
    child.prototype._derived = assign({}, parent.prototype._derived);
    child.prototype._deps = assign({}, parent.prototype._deps);
    child.prototype._definition = assign({}, parent.prototype._definition);
    child.prototype._collections = assign({}, parent.prototype._collections);
    child.prototype._children = assign({}, parent.prototype._children);
    child.prototype._dataTypes = assign({}, parent.prototype._dataTypes || dataTypes);
    if (protoProps) {
      var omitFromExtend = ['dataTypes', 'props', 'session', 'derived', 'collections', 'children'];
      args.forEach(function processArg(def) {
        if (def.dataTypes) {
          forEach(def.dataTypes, function(def, name) {
            child.prototype._dataTypes[name] = def;
          });
        }
        if (def.props) {
          forEach(def.props, function(def, name) {
            createPropertyDefinition(child.prototype, name, def);
          });
        }
        if (def.session) {
          forEach(def.session, function(def, name) {
            createPropertyDefinition(child.prototype, name, def, true);
          });
        }
        if (def.derived) {
          forEach(def.derived, function(def, name) {
            createDerivedProperty(child.prototype, name, def);
          });
        }
        if (def.collections) {
          forEach(def.collections, function(constructor, name) {
            child.prototype._collections[name] = constructor;
          });
        }
        if (def.children) {
          forEach(def.children, function(constructor, name) {
            child.prototype._children[name] = constructor;
          });
        }
        assign(child.prototype, omit(def, omitFromExtend));
      });
    }
    child.__super__ = parent.prototype;
    return child;
  }
  Base.extend = extend;
  module.exports = Base;
})(require("process"));
