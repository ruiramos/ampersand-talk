System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "optional": [
      "runtime"
    ]
  },
  "paths": {
    "*": "*.js",
    "github:*": "jspm_packages/github/*.js",
    "npm:*": "jspm_packages/npm/*.js"
  }
});

System.config({
  "map": {
    "ampersand-view": "npm:ampersand-view@9.0.0",
    "babel": "npm:babel-core@5.8.29",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "core-js": "npm:core-js@0.9.18",
    "rx": "npm:rx@4.0.6",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:ampersand-class-extend@1.0.2": {
      "lodash.assign": "npm:lodash.assign@3.2.0"
    },
    "npm:ampersand-collection-view@1.4.0": {
      "ampersand-class-extend": "npm:ampersand-class-extend@1.0.2",
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.difference": "npm:lodash.difference@3.2.2",
      "lodash.find": "npm:lodash.find@3.2.1",
      "lodash.invoke": "npm:lodash.invoke@3.2.3",
      "lodash.pick": "npm:lodash.pick@3.1.0"
    },
    "npm:ampersand-dom-bindings@3.7.0": {
      "ampersand-dom": "npm:ampersand-dom@1.4.0",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "is-array": "npm:is-array@1.0.1",
      "key-tree-store": "npm:key-tree-store@1.3.0",
      "lodash.partial": "npm:lodash.partial@3.1.1",
      "matches-selector": "npm:matches-selector@1.0.0"
    },
    "npm:ampersand-dom@1.4.0": {
      "ampersand-version": "npm:ampersand-version@1.0.2"
    },
    "npm:ampersand-events@1.1.1": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.isempty": "npm:lodash.isempty@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.once": "npm:lodash.once@3.0.1",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.0.0"
    },
    "npm:ampersand-state@4.6.0": {
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "array-next": "npm:array-next@0.0.1",
      "key-tree-store": "npm:key-tree-store@1.3.0",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.clone": "npm:lodash.clone@3.0.3",
      "lodash.defaults": "npm:lodash.defaults@3.1.2",
      "lodash.escape": "npm:lodash.escape@3.0.0",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.has": "npm:lodash.has@3.2.1",
      "lodash.includes": "npm:lodash.includes@3.1.3",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isdate": "npm:lodash.isdate@3.0.1",
      "lodash.isempty": "npm:lodash.isempty@3.0.4",
      "lodash.isequal": "npm:lodash.isequal@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.6",
      "lodash.isnull": "npm:lodash.isnull@3.0.0",
      "lodash.isobject": "npm:lodash.isobject@3.0.2",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.isundefined": "npm:lodash.isundefined@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.omit": "npm:lodash.omit@3.1.0",
      "lodash.result": "npm:lodash.result@3.1.2",
      "lodash.union": "npm:lodash.union@3.1.0",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ampersand-version@1.0.2": {
      "find-root": "npm:find-root@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.5"
    },
    "npm:ampersand-view@9.0.0": {
      "ampersand-collection-view": "npm:ampersand-collection-view@1.4.0",
      "ampersand-dom-bindings": "npm:ampersand-dom-bindings@3.7.0",
      "ampersand-state": "npm:ampersand-state@4.6.0",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "component-classes": "npm:component-classes@1.2.4",
      "domify": "npm:domify@1.4.0",
      "events-mixin": "npm:events-mixin@1.3.0",
      "get-object-path": "npm:get-object-path@0.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.flatten": "npm:lodash.flatten@3.0.2",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.invoke": "npm:lodash.invoke@3.2.3",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.last": "npm:lodash.last@3.0.0",
      "lodash.pick": "npm:lodash.pick@3.1.0",
      "lodash.result": "npm:lodash.result@3.1.2",
      "lodash.uniqueid": "npm:lodash.uniqueid@3.0.0",
      "matches-selector": "npm:matches-selector@1.0.0"
    },
    "npm:array-next@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:closest@0.0.1": {
      "matches-selector": "npm:matches-selector@0.0.1"
    },
    "npm:component-classes@1.2.4": {
      "component-indexof": "npm:component-indexof@0.0.3"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:delegate-events@1.1.1": {
      "closest": "npm:closest@0.0.1",
      "component-event": "npm:component-event@0.1.4"
    },
    "npm:events-mixin@1.3.0": {
      "component-event": "npm:component-event@0.1.4",
      "delegate-events": "npm:delegate-events@1.1.1"
    },
    "npm:find-root@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:lodash._baseassign@3.2.0": {
      "lodash._basecopy": "npm:lodash._basecopy@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basecallback@3.3.1": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.pairs": "npm:lodash.pairs@3.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseclone@3.3.0": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basedifference@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._baseeach@3.0.4": {
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseflatten@3.1.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._basefor@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseget@3.7.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseisequal@3.0.7": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.istypedarray": "npm:lodash.istypedarray@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash._basetostring@3.0.1": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseuniq@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._cacheindexof": "npm:lodash._cacheindexof@3.0.2",
      "lodash._createcache": "npm:lodash._createcache@3.1.2"
    },
    "npm:lodash._createassigner@3.1.1": {
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash._createcache@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1"
    },
    "npm:lodash._createwrapper@3.0.7": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._basecreate": "npm:lodash._basecreate@3.0.3",
      "lodash._replaceholders": "npm:lodash._replaceholders@3.0.0"
    },
    "npm:lodash._invokepath@3.7.2": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._pickbyarray@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._pickbycallback@3.0.0": {
      "lodash._basefor": "npm:lodash._basefor@3.0.2",
      "lodash.keysin": "npm:lodash.keysin@3.0.8"
    },
    "npm:lodash._topath@3.8.1": {
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.assign@3.2.0": {
      "lodash._baseassign": "npm:lodash._baseassign@3.2.0",
      "lodash._createassigner": "npm:lodash._createassigner@3.1.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.bind@3.1.0": {
      "lodash._createwrapper": "npm:lodash._createwrapper@3.0.7",
      "lodash._replaceholders": "npm:lodash._replaceholders@3.0.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.clone@3.0.3": {
      "lodash._baseclone": "npm:lodash._baseclone@3.3.0",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.defaults@3.1.2": {
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.difference@3.2.2": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.escape@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:lodash.find@3.2.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basefind": "npm:lodash._basefind@3.0.0",
      "lodash._basefindindex": "npm:lodash._basefindindex@3.6.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.flatten@3.0.2": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.foreach@3.0.3": {
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.has@3.2.1": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.includes@3.1.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.invoke@3.2.3": {
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._invokepath": "npm:lodash._invokepath@3.7.2",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.restparam": "npm:lodash.restparam@3.6.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.isempty@3.0.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.6",
      "lodash.isstring": "npm:lodash.isstring@3.0.1",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.isequal@3.0.4": {
      "lodash._baseisequal": "npm:lodash._baseisequal@3.0.7",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1"
    },
    "npm:lodash.keys@3.1.2": {
      "lodash._getnative": "npm:lodash._getnative@3.9.1",
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.keysin@3.0.8": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.omit@3.1.0": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.2",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.keysin": "npm:lodash.keysin@3.0.8",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.once@3.0.1": {
      "lodash.before": "npm:lodash.before@3.0.3"
    },
    "npm:lodash.pairs@3.0.1": {
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.partial@3.1.1": {
      "lodash._createwrapper": "npm:lodash._createwrapper@3.0.7",
      "lodash._replaceholders": "npm:lodash._replaceholders@3.0.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.pick@3.1.0": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash._pickbyarray": "npm:lodash._pickbyarray@3.0.2",
      "lodash._pickbycallback": "npm:lodash._pickbycallback@3.0.0",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.result@3.1.2": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.union@3.1.0": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._baseuniq": "npm:lodash._baseuniq@3.0.3",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.uniqueid@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:readable-stream@1.0.33": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stream-browserify": "npm:stream-browserify@1.0.0",
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "npm:rx@4.0.6": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

