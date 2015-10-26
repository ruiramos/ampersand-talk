System.config({
  "baseURL": "/",
  "transpiler": "babel",
  "babelOptions": {
    "blacklist": [],
    "stage": 0,
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
    "ampersand-collection": "npm:ampersand-collection@1.5.0",
    "ampersand-events": "npm:ampersand-events@1.1.1",
    "ampersand-model": "npm:ampersand-model@6.0.2",
    "ampersand-rest-collection": "npm:ampersand-rest-collection@5.0.0",
    "babel": "npm:babel-core@5.8.29",
    "babel-runtime": "npm:babel-runtime@5.8.29",
    "core-js": "npm:core-js@0.9.18",
    "fetch-jsonp": "npm:fetch-jsonp@0.9.2",
    "react": "npm:react@0.14.0",
    "react-dom": "npm:react-dom@0.14.0",
    "github:jspm/nodelibs-assert@0.1.0": {
      "assert": "npm:assert@1.3.0"
    },
    "github:jspm/nodelibs-buffer@0.1.0": {
      "buffer": "npm:buffer@3.5.1"
    },
    "github:jspm/nodelibs-constants@0.1.0": {
      "constants-browserify": "npm:constants-browserify@0.0.1"
    },
    "github:jspm/nodelibs-crypto@0.1.0": {
      "crypto-browserify": "npm:crypto-browserify@3.10.0"
    },
    "github:jspm/nodelibs-domain@0.1.0": {
      "domain-browser": "npm:domain-browser@1.1.4"
    },
    "github:jspm/nodelibs-events@0.1.1": {
      "events": "npm:events@1.0.2"
    },
    "github:jspm/nodelibs-http@1.7.1": {
      "Base64": "npm:Base64@0.2.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-https@0.1.0": {
      "https-browserify": "npm:https-browserify@0.0.0"
    },
    "github:jspm/nodelibs-net@0.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "timers": "github:jspm/nodelibs-timers@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "github:jspm/nodelibs-path@0.1.0": {
      "path-browserify": "npm:path-browserify@0.0.0"
    },
    "github:jspm/nodelibs-process@0.1.2": {
      "process": "npm:process@0.11.2"
    },
    "github:jspm/nodelibs-punycode@0.1.0": {
      "punycode": "npm:punycode@1.3.2"
    },
    "github:jspm/nodelibs-querystring@0.1.0": {
      "querystring": "npm:querystring@0.2.0"
    },
    "github:jspm/nodelibs-stream@0.1.0": {
      "stream-browserify": "npm:stream-browserify@1.0.0"
    },
    "github:jspm/nodelibs-string_decoder@0.1.0": {
      "string_decoder": "npm:string_decoder@0.10.31"
    },
    "github:jspm/nodelibs-timers@0.1.0": {
      "timers-browserify": "npm:timers-browserify@1.4.1"
    },
    "github:jspm/nodelibs-url@0.1.0": {
      "url": "npm:url@0.10.3"
    },
    "github:jspm/nodelibs-util@0.1.0": {
      "util": "npm:util@0.10.3"
    },
    "github:jspm/nodelibs-vm@0.1.0": {
      "vm-browserify": "npm:vm-browserify@0.0.4"
    },
    "github:jspm/nodelibs-zlib@0.1.0": {
      "browserify-zlib": "npm:browserify-zlib@0.1.4"
    },
    "npm:amdefine@1.0.0": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "module": "github:jspm/nodelibs-module@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:ampersand-class-extend@1.0.2": {
      "lodash.assign": "npm:lodash.assign@3.2.0"
    },
    "npm:ampersand-collection-lodash-mixin@2.0.1": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.countby": "npm:lodash.countby@3.1.1",
      "lodash.difference": "npm:lodash.difference@3.2.2",
      "lodash.drop": "npm:lodash.drop@3.0.0",
      "lodash.every": "npm:lodash.every@3.2.3",
      "lodash.filter": "npm:lodash.filter@3.1.1",
      "lodash.find": "npm:lodash.find@3.2.1",
      "lodash.foreach": "npm:lodash.foreach@3.0.3",
      "lodash.groupby": "npm:lodash.groupby@3.1.1",
      "lodash.includes": "npm:lodash.includes@3.1.3",
      "lodash.indexby": "npm:lodash.indexby@3.1.1",
      "lodash.indexof": "npm:lodash.indexof@3.0.3",
      "lodash.initial": "npm:lodash.initial@3.0.0",
      "lodash.invoke": "npm:lodash.invoke@3.2.3",
      "lodash.isempty": "npm:lodash.isempty@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.6",
      "lodash.lastindexof": "npm:lodash.lastindexof@3.0.2",
      "lodash.map": "npm:lodash.map@3.1.4",
      "lodash.max": "npm:lodash.max@3.4.0",
      "lodash.min": "npm:lodash.min@3.4.0",
      "lodash.partition": "npm:lodash.partition@3.1.1",
      "lodash.reduce": "npm:lodash.reduce@3.1.2",
      "lodash.reduceright": "npm:lodash.reduceright@3.1.2",
      "lodash.reject": "npm:lodash.reject@3.1.1",
      "lodash.rest": "npm:lodash.rest@3.0.0",
      "lodash.sample": "npm:lodash.sample@3.1.0",
      "lodash.shuffle": "npm:lodash.shuffle@3.1.0",
      "lodash.some": "npm:lodash.some@3.2.3",
      "lodash.sortby": "npm:lodash.sortby@3.1.5",
      "lodash.take": "npm:lodash.take@3.0.0",
      "lodash.without": "npm:lodash.without@3.2.1"
    },
    "npm:ampersand-collection-rest-mixin@5.0.0": {
      "ampersand-sync": "npm:ampersand-sync@4.0.2",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0"
    },
    "npm:ampersand-collection@1.5.0": {
      "ampersand-class-extend": "npm:ampersand-class-extend@1.0.2",
      "ampersand-events": "npm:ampersand-events@1.1.1",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.bind": "npm:lodash.bind@3.1.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
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
    "npm:ampersand-model@6.0.2": {
      "ampersand-state": "npm:ampersand-state@4.6.0",
      "ampersand-sync": "npm:ampersand-sync@4.0.2",
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.clone": "npm:lodash.clone@3.0.3",
      "lodash.isobject": "npm:lodash.isobject@3.0.2",
      "lodash.result": "npm:lodash.result@3.1.2"
    },
    "npm:ampersand-rest-collection@5.0.0": {
      "ampersand-collection": "npm:ampersand-collection@1.5.0",
      "ampersand-collection-lodash-mixin": "npm:ampersand-collection-lodash-mixin@2.0.1",
      "ampersand-collection-rest-mixin": "npm:ampersand-collection-rest-mixin@5.0.0",
      "ampersand-version": "npm:ampersand-version@1.0.2"
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
    "npm:ampersand-sync@4.0.2": {
      "ampersand-version": "npm:ampersand-version@1.0.2",
      "lodash.assign": "npm:lodash.assign@3.2.0",
      "lodash.defaults": "npm:lodash.defaults@3.1.2",
      "lodash.includes": "npm:lodash.includes@3.1.3",
      "lodash.result": "npm:lodash.result@3.1.2",
      "media-type": "npm:media-type@0.3.0",
      "qs": "npm:qs@4.0.0",
      "request": "npm:request@2.65.0",
      "xhr": "npm:xhr@2.1.0"
    },
    "npm:ampersand-version@1.0.2": {
      "find-root": "npm:find-root@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "through2": "npm:through2@0.6.5"
    },
    "npm:array-next@0.0.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:asap@2.0.3": {
      "domain": "github:jspm/nodelibs-domain@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:asn1.js@2.2.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0",
      "vm": "github:jspm/nodelibs-vm@0.1.0"
    },
    "npm:asn1@0.1.11": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "sys": "github:jspm/nodelibs-util@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert-plus@0.1.5": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:assert@1.3.0": {
      "util": "npm:util@0.10.3"
    },
    "npm:async@1.5.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:aws-sign2@0.6.0": {
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:babel-runtime@5.8.29": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:bl@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "readable-stream": "npm:readable-stream@2.0.3",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:boom@2.10.0": {
      "hoek": "npm:hoek@2.16.3",
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:browserify-aes@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "buffer-xor": "npm:buffer-xor@1.0.3",
      "cipher-base": "npm:cipher-base@1.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:browserify-cipher@1.0.0": {
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "browserify-des": "npm:browserify-des@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0"
    },
    "npm:browserify-des@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "des.js": "npm:des.js@1.0.0",
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:browserify-rsa@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "constants": "github:jspm/nodelibs-constants@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:browserify-sign@3.0.8": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0",
      "inherits": "npm:inherits@2.0.1",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:browserify-zlib@0.1.4": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "pako": "npm:pako@0.2.8",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:buffer-xor@1.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:buffer@3.5.1": {
      "base64-js": "npm:base64-js@0.0.8",
      "ieee754": "npm:ieee754@1.1.6",
      "is-array": "npm:is-array@1.0.1"
    },
    "npm:chalk@1.1.1": {
      "ansi-styles": "npm:ansi-styles@2.1.0",
      "escape-string-regexp": "npm:escape-string-regexp@1.0.3",
      "has-ansi": "npm:has-ansi@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "strip-ansi": "npm:strip-ansi@3.0.0",
      "supports-color": "npm:supports-color@2.0.0"
    },
    "npm:cipher-base@1.0.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0"
    },
    "npm:combined-stream@1.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "delayed-stream": "npm:delayed-stream@1.0.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:commander@2.9.0": {
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "graceful-readlink": "npm:graceful-readlink@1.0.1",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:constants-browserify@0.0.1": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@0.9.18": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-js@1.2.3": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:core-util-is@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:create-ecdh@2.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "elliptic": "npm:elliptic@3.1.0"
    },
    "npm:create-hash@1.1.2": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "cipher-base": "npm:cipher-base@1.0.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "ripemd160": "npm:ripemd160@1.0.1",
      "sha.js": "npm:sha.js@2.4.4"
    },
    "npm:create-hmac@1.1.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:cryptiles@2.0.5": {
      "boom": "npm:boom@2.10.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:crypto-browserify@3.10.0": {
      "browserify-cipher": "npm:browserify-cipher@1.0.0",
      "browserify-sign": "npm:browserify-sign@3.0.8",
      "create-ecdh": "npm:create-ecdh@2.0.2",
      "create-hash": "npm:create-hash@1.1.2",
      "create-hmac": "npm:create-hmac@1.1.4",
      "diffie-hellman": "npm:diffie-hellman@3.0.2",
      "inherits": "npm:inherits@2.0.1",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "public-encrypt": "npm:public-encrypt@2.0.1",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:ctype@0.5.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:delayed-stream@1.0.0": {
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:des.js@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "inherits": "npm:inherits@2.0.1",
      "minimalistic-assert": "npm:minimalistic-assert@1.0.0"
    },
    "npm:diffie-hellman@3.0.2": {
      "bn.js": "npm:bn.js@2.2.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "miller-rabin": "npm:miller-rabin@2.0.1",
      "randombytes": "npm:randombytes@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:domain-browser@1.1.4": {
      "events": "github:jspm/nodelibs-events@0.1.1"
    },
    "npm:elliptic@3.1.0": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5",
      "hash.js": "npm:hash.js@1.0.3",
      "inherits": "npm:inherits@2.0.1",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:envify@3.4.0": {
      "jstransform": "npm:jstransform@10.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "through": "npm:through@2.3.8"
    },
    "npm:es6-promise@2.3.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:esprima-fb@13001.1001.0-dev-harmony-fb": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:evp_bytestokey@1.0.0": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0"
    },
    "npm:fbjs@0.3.2": {
      "core-js": "npm:core-js@1.2.3",
      "loose-envify": "npm:loose-envify@1.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "promise": "npm:promise@7.0.4",
      "ua-parser-js": "npm:ua-parser-js@0.7.9",
      "whatwg-fetch": "npm:whatwg-fetch@0.9.0"
    },
    "npm:fetch-jsonp@0.9.2": {
      "es6-promise": "npm:es6-promise@2.3.0"
    },
    "npm:find-root@0.1.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:for-each@0.3.2": {
      "is-function": "npm:is-function@1.0.1"
    },
    "npm:forever-agent@0.6.1": {
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:form-data@1.0.0-rc3": {
      "async": "npm:async@1.5.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "mime-types": "npm:mime-types@2.1.7",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-function@2.0.0": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:generate-object-property@1.2.0": {
      "is-property": "npm:is-property@1.0.2"
    },
    "npm:global@4.3.0": {
      "min-document": "npm:min-document@2.17.0",
      "process": "npm:process@0.5.2"
    },
    "npm:graceful-readlink@1.0.1": {
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:har-validator@2.0.2": {
      "chalk": "npm:chalk@1.1.1",
      "commander": "npm:commander@2.9.0",
      "is-my-json-valid": "npm:is-my-json-valid@2.12.2",
      "pinkie-promise": "npm:pinkie-promise@1.0.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:has-ansi@2.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:hash.js@1.0.3": {
      "inherits": "npm:inherits@2.0.1"
    },
    "npm:hawk@3.1.0": {
      "boom": "npm:boom@2.10.0",
      "cryptiles": "npm:cryptiles@2.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "sntp": "npm:sntp@1.0.9",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0"
    },
    "npm:hoek@2.16.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:http-signature@0.11.0": {
      "asn1": "npm:asn1@0.1.11",
      "assert-plus": "npm:assert-plus@0.1.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "ctype": "npm:ctype@0.5.3",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:https-browserify@0.0.0": {
      "http": "github:jspm/nodelibs-http@1.7.1"
    },
    "npm:inherits@2.0.1": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:is-function@1.0.1": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:is-my-json-valid@2.12.2": {
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "generate-function": "npm:generate-function@2.0.0",
      "generate-object-property": "npm:generate-object-property@1.2.0",
      "jsonpointer": "npm:jsonpointer@2.0.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:isstream@0.1.2": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:jsonpointer@2.0.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:jstransform@10.1.0": {
      "base62": "npm:base62@0.1.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "esprima-fb": "npm:esprima-fb@13001.1001.0-dev-harmony-fb",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "source-map": "npm:source-map@0.1.31"
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
    "npm:lodash._baseeachright@3.0.3": {
      "lodash._baseforright": "npm:lodash._baseforright@3.0.2",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._basefilter@3.0.0": {
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4"
    },
    "npm:lodash._baseflatten@3.1.4": {
      "lodash.isarguments": "npm:lodash.isarguments@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash._basefor@3.0.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash._baseforright@3.0.2": {
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
    "npm:lodash._binaryindex@3.0.1": {
      "lodash._binaryindexby": "npm:lodash._binaryindexby@3.0.3"
    },
    "npm:lodash._createaggregator@3.0.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
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
    "npm:lodash._toiterable@3.0.4": {
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
    "npm:lodash.countby@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
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
    "npm:lodash.drop@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.escape@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:lodash.every@3.2.3": {
      "lodash._arrayevery": "npm:lodash._arrayevery@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.filter@3.1.1": {
      "lodash._arrayfilter": "npm:lodash._arrayfilter@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._basefilter": "npm:lodash._basefilter@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.find@3.2.1": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basefind": "npm:lodash._basefind@3.0.0",
      "lodash._basefindindex": "npm:lodash._basefindindex@3.6.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.foreach@3.0.3": {
      "lodash._arrayeach": "npm:lodash._arrayeach@3.0.0",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._bindcallback": "npm:lodash._bindcallback@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4"
    },
    "npm:lodash.groupby@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
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
    "npm:lodash.indexby@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.indexof@3.0.3": {
      "lodash._baseindexof": "npm:lodash._baseindexof@3.1.0",
      "lodash._binaryindex": "npm:lodash._binaryindex@3.0.1"
    },
    "npm:lodash.initial@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
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
    "npm:lodash.lastindexof@3.0.2": {
      "lodash._binaryindex": "npm:lodash._binaryindex@3.0.1"
    },
    "npm:lodash.map@3.1.4": {
      "lodash._arraymap": "npm:lodash._arraymap@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.max@3.4.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.4",
      "lodash.gt": "npm:lodash.gt@3.9.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.min@3.4.0": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.4",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2",
      "lodash.lt": "npm:lodash.lt@3.9.0"
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
    "npm:lodash.partition@3.1.1": {
      "lodash._createaggregator": "npm:lodash._createaggregator@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.reduce@3.1.2": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basereduce": "npm:lodash._basereduce@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.reduceright@3.1.2": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeachright": "npm:lodash._baseeachright@3.0.3",
      "lodash._basereduce": "npm:lodash._basereduce@3.0.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.reject@3.1.1": {
      "lodash._arrayfilter": "npm:lodash._arrayfilter@3.0.0",
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._basefilter": "npm:lodash._basefilter@3.0.0",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.rest@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.result@3.1.2": {
      "lodash._baseget": "npm:lodash._baseget@3.7.2",
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._topath": "npm:lodash._topath@3.8.1",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.isfunction": "npm:lodash.isfunction@3.0.6",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:lodash.sample@3.1.0": {
      "lodash._baserandom": "npm:lodash._baserandom@3.0.1",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash._toiterable": "npm:lodash._toiterable@3.0.4",
      "lodash.toarray": "npm:lodash.toarray@3.0.2",
      "lodash.values": "npm:lodash.values@3.0.0"
    },
    "npm:lodash.shuffle@3.1.0": {
      "lodash.sample": "npm:lodash.sample@3.1.0"
    },
    "npm:lodash.some@3.2.3": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.sortby@3.1.5": {
      "lodash._basecallback": "npm:lodash._basecallback@3.3.1",
      "lodash._basecompareascending": "npm:lodash._basecompareascending@3.0.2",
      "lodash._baseeach": "npm:lodash._baseeach@3.0.4",
      "lodash._basesortby": "npm:lodash._basesortby@3.0.0",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9",
      "lodash.isarray": "npm:lodash.isarray@3.0.4",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.take@3.0.0": {
      "lodash._baseslice": "npm:lodash._baseslice@3.0.3",
      "lodash._isiterateecall": "npm:lodash._isiterateecall@3.0.9"
    },
    "npm:lodash.toarray@3.0.2": {
      "lodash._arraycopy": "npm:lodash._arraycopy@3.0.0",
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.union@3.1.0": {
      "lodash._baseflatten": "npm:lodash._baseflatten@3.1.4",
      "lodash._baseuniq": "npm:lodash._baseuniq@3.0.3",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:lodash.uniqueid@3.0.0": {
      "lodash._basetostring": "npm:lodash._basetostring@3.0.1"
    },
    "npm:lodash.values@3.0.0": {
      "lodash._basevalues": "npm:lodash._basevalues@3.0.0",
      "lodash.keys": "npm:lodash.keys@3.1.2"
    },
    "npm:lodash.without@3.2.1": {
      "lodash._basedifference": "npm:lodash._basedifference@3.0.3",
      "lodash.restparam": "npm:lodash.restparam@3.6.1"
    },
    "npm:loose-envify@1.1.0": {
      "js-tokens": "npm:js-tokens@1.0.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:miller-rabin@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "brorand": "npm:brorand@1.0.5"
    },
    "npm:mime-db@1.19.0": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:mime-types@2.1.7": {
      "mime-db": "npm:mime-db@1.19.0",
      "path": "github:jspm/nodelibs-path@0.1.0"
    },
    "npm:min-document@2.17.0": {
      "dom-walk": "npm:dom-walk@0.1.1"
    },
    "npm:node-uuid@1.4.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:oauth-sign@0.8.0": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0"
    },
    "npm:pako@0.2.8": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:parse-asn1@3.0.2": {
      "asn1.js": "npm:asn1.js@2.2.1",
      "browserify-aes": "npm:browserify-aes@1.0.5",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "evp_bytestokey": "npm:evp_bytestokey@1.0.0",
      "pbkdf2": "npm:pbkdf2@3.0.4",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:parse-headers@2.0.0": {
      "for-each": "npm:for-each@0.3.2",
      "trim": "npm:trim@0.0.1"
    },
    "npm:path-browserify@0.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:pbkdf2@3.0.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "child_process": "github:jspm/nodelibs-child_process@0.1.0",
      "create-hmac": "npm:create-hmac@1.1.4",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:pinkie-promise@1.0.0": {
      "pinkie": "npm:pinkie@1.0.0"
    },
    "npm:process-nextick-args@1.0.3": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:process@0.11.2": {
      "assert": "github:jspm/nodelibs-assert@0.1.0"
    },
    "npm:promise@7.0.4": {
      "asap": "npm:asap@2.0.3",
      "fs": "github:jspm/nodelibs-fs@0.1.2"
    },
    "npm:public-encrypt@2.0.1": {
      "bn.js": "npm:bn.js@2.2.0",
      "browserify-rsa": "npm:browserify-rsa@2.0.1",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "create-hash": "npm:create-hash@1.1.2",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "parse-asn1": "npm:parse-asn1@3.0.2",
      "randombytes": "npm:randombytes@2.0.1"
    },
    "npm:punycode@1.3.2": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:randombytes@2.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:react-dom@0.14.0": {
      "react": "npm:react@0.14.0"
    },
    "npm:react@0.14.0": {
      "envify": "npm:envify@3.4.0",
      "fbjs": "npm:fbjs@0.3.2",
      "process": "github:jspm/nodelibs-process@0.1.2"
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
    "npm:readable-stream@2.0.3": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "core-util-is": "npm:core-util-is@1.0.1",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "isarray": "npm:isarray@0.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "process-nextick-args": "npm:process-nextick-args@1.0.3",
      "string_decoder": "npm:string_decoder@0.10.31",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "util-deprecate": "npm:util-deprecate@1.0.2"
    },
    "npm:request@2.65.0": {
      "aws-sign2": "npm:aws-sign2@0.6.0",
      "bl": "npm:bl@1.0.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "caseless": "npm:caseless@0.11.0",
      "combined-stream": "npm:combined-stream@1.0.5",
      "crypto": "github:jspm/nodelibs-crypto@0.1.0",
      "extend": "npm:extend@3.0.0",
      "forever-agent": "npm:forever-agent@0.6.1",
      "form-data": "npm:form-data@1.0.0-rc3",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "har-validator": "npm:har-validator@2.0.2",
      "hawk": "npm:hawk@3.1.0",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "http-signature": "npm:http-signature@0.11.0",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "isstream": "npm:isstream@0.1.2",
      "json-stringify-safe": "npm:json-stringify-safe@5.0.1",
      "mime-types": "npm:mime-types@2.1.7",
      "node-uuid": "npm:node-uuid@1.4.3",
      "oauth-sign": "npm:oauth-sign@0.8.0",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "qs": "npm:qs@5.2.0",
      "querystring": "github:jspm/nodelibs-querystring@0.1.0",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "stringstream": "npm:stringstream@0.0.5",
      "tough-cookie": "npm:tough-cookie@2.2.0",
      "tunnel-agent": "npm:tunnel-agent@0.4.1",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:ripemd160@1.0.1": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sha.js@2.4.4": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:sntp@1.0.9": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "dgram": "github:jspm/nodelibs-dgram@0.1.0",
      "dns": "github:jspm/nodelibs-dns@0.1.0",
      "hoek": "npm:hoek@2.16.3",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:source-map@0.1.31": {
      "amdefine": "npm:amdefine@1.0.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "path": "github:jspm/nodelibs-path@0.1.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:stream-browserify@1.0.0": {
      "events": "github:jspm/nodelibs-events@0.1.1",
      "inherits": "npm:inherits@2.0.1",
      "readable-stream": "npm:readable-stream@1.0.33"
    },
    "npm:string_decoder@0.10.31": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0"
    },
    "npm:stringstream@0.0.5": {
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "fs": "github:jspm/nodelibs-fs@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0",
      "string_decoder": "github:jspm/nodelibs-string_decoder@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "zlib": "github:jspm/nodelibs-zlib@0.1.0"
    },
    "npm:strip-ansi@3.0.0": {
      "ansi-regex": "npm:ansi-regex@2.0.0"
    },
    "npm:supports-color@2.0.0": {
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:through2@0.6.5": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "readable-stream": "npm:readable-stream@1.0.33",
      "util": "github:jspm/nodelibs-util@0.1.0",
      "xtend": "npm:xtend@4.0.0"
    },
    "npm:through@2.3.8": {
      "process": "github:jspm/nodelibs-process@0.1.2",
      "stream": "github:jspm/nodelibs-stream@0.1.0"
    },
    "npm:timers-browserify@1.4.1": {
      "process": "npm:process@0.11.2"
    },
    "npm:tough-cookie@2.2.0": {
      "net": "github:jspm/nodelibs-net@0.1.2",
      "punycode": "github:jspm/nodelibs-punycode@0.1.0",
      "systemjs-json": "github:systemjs/plugin-json@0.1.0",
      "url": "github:jspm/nodelibs-url@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:tunnel-agent@0.4.1": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "buffer": "github:jspm/nodelibs-buffer@0.1.0",
      "events": "github:jspm/nodelibs-events@0.1.1",
      "http": "github:jspm/nodelibs-http@1.7.1",
      "https": "github:jspm/nodelibs-https@0.1.0",
      "net": "github:jspm/nodelibs-net@0.1.2",
      "process": "github:jspm/nodelibs-process@0.1.2",
      "tls": "github:jspm/nodelibs-tls@0.1.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:ua-parser-js@0.7.9": {
      "systemjs-json": "github:systemjs/plugin-json@0.1.0"
    },
    "npm:url@0.10.3": {
      "assert": "github:jspm/nodelibs-assert@0.1.0",
      "punycode": "npm:punycode@1.3.2",
      "querystring": "npm:querystring@0.2.0",
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util-deprecate@1.0.2": {
      "util": "github:jspm/nodelibs-util@0.1.0"
    },
    "npm:util@0.10.3": {
      "inherits": "npm:inherits@2.0.1",
      "process": "github:jspm/nodelibs-process@0.1.2"
    },
    "npm:vm-browserify@0.0.4": {
      "indexof": "npm:indexof@0.0.1"
    },
    "npm:xhr@2.1.0": {
      "global": "npm:global@4.3.0",
      "once": "npm:once@1.1.1",
      "parse-headers": "npm:parse-headers@2.0.0",
      "process": "github:jspm/nodelibs-process@0.1.2"
    }
  }
});

