/* */ 
"format cjs";
;
(function(factory) {
  var objectTypes = {
    'function': true,
    'object': true
  };
  function checkGlobal(value) {
    return (value && value.Object === Object) ? value : null;
  }
  var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType) ? exports : null;
  var freeModule = (objectTypes[typeof module] && module && !module.nodeType) ? module : null;
  var freeGlobal = checkGlobal(freeExports && freeModule && typeof global === 'object' && global);
  var freeSelf = checkGlobal(objectTypes[typeof self] && self);
  var freeWindow = checkGlobal(objectTypes[typeof window] && window);
  var moduleExports = (freeModule && freeModule.exports === freeExports) ? freeExports : null;
  var thisGlobal = checkGlobal(objectTypes[typeof this] && this);
  var root = freeGlobal || ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) || freeSelf || thisGlobal || Function('return this')();
  if (typeof define === 'function' && define.amd) {
    define(["./rx"], function(Rx, exports) {
      return factory(root, exports, Rx);
    });
  } else if (typeof module === 'object' && module && module.exports === freeExports) {
    module.exports = factory(root, module.exports, require("./rx"));
  } else {
    root.Rx = factory(root, {}, root.Rx);
  }
}.call(this, function(root, exp, Rx, undefined) {
  var Observable = Rx.Observable,
      observableProto = Observable.prototype,
      ObservableBase = Rx.ObservableBase,
      AbstractObserver = Rx.internals.AbstractObserver,
      FlatMapObservable = Rx.FlatMapObservable,
      observableConcat = Observable.concat,
      observableDefer = Observable.defer,
      observableEmpty = Observable.empty,
      disposableEmpty = Rx.Disposable.empty,
      CompositeDisposable = Rx.CompositeDisposable,
      SerialDisposable = Rx.SerialDisposable,
      SingleAssignmentDisposable = Rx.SingleAssignmentDisposable,
      Enumerable = Rx.internals.Enumerable,
      enumerableOf = Enumerable.of,
      currentThreadScheduler = Rx.Scheduler.currentThread,
      AsyncSubject = Rx.AsyncSubject,
      Observer = Rx.Observer,
      inherits = Rx.internals.inherits,
      addProperties = Rx.internals.addProperties,
      helpers = Rx.helpers,
      noop = helpers.noop,
      isPromise = helpers.isPromise,
      isFunction = helpers.isFunction,
      isIterable = Rx.helpers.isIterable,
      isArrayLike = Rx.helpers.isArrayLike,
      isScheduler = Rx.Scheduler.isScheduler,
      observableFromPromise = Observable.fromPromise;
  var errorObj = {e: {}};
  function tryCatcherGen(tryCatchTarget) {
    return function tryCatcher() {
      try {
        return tryCatchTarget.apply(this, arguments);
      } catch (e) {
        errorObj.e = e;
        return errorObj;
      }
    };
  }
  var tryCatch = Rx.internals.tryCatch = function tryCatch(fn) {
    if (!isFunction(fn)) {
      throw new TypeError('fn must be a function');
    }
    return tryCatcherGen(fn);
  };
  function thrower(e) {
    throw e;
  }
  var $iterator$ = (typeof Symbol === 'function' && Symbol.iterator) || '_es6shim_iterator_';
  if (root.Set && typeof new root.Set()['@@iterator'] === 'function') {
    $iterator$ = '@@iterator';
  }
  var doneEnumerator = Rx.doneEnumerator = {
    done: true,
    value: undefined
  };
  var isIterable = Rx.helpers.isIterable = function(o) {
    return o && o[$iterator$] !== undefined;
  };
  var isArrayLike = Rx.helpers.isArrayLike = function(o) {
    return o && o.length !== undefined;
  };
  Rx.helpers.iterator = $iterator$;
  var WhileEnumerable = (function(__super__) {
    inherits(WhileEnumerable, __super__);
    function WhileEnumerable(c, s) {
      this.c = c;
      this.s = s;
    }
    WhileEnumerable.prototype[$iterator$] = function() {
      var self = this;
      return {next: function() {
          return self.c() ? {
            done: false,
            value: self.s
          } : {
            done: true,
            value: void 0
          };
        }};
    };
    return WhileEnumerable;
  }(Enumerable));
  function enumerableWhile(condition, source) {
    return new WhileEnumerable(condition, source);
  }
  observableProto.letBind = observableProto['let'] = function(func) {
    return func(this);
  };
  Observable['if'] = function(condition, thenSource, elseSourceOrScheduler) {
    return observableDefer(function() {
      elseSourceOrScheduler || (elseSourceOrScheduler = observableEmpty());
      isPromise(thenSource) && (thenSource = observableFromPromise(thenSource));
      isPromise(elseSourceOrScheduler) && (elseSourceOrScheduler = observableFromPromise(elseSourceOrScheduler));
      typeof elseSourceOrScheduler.now === 'function' && (elseSourceOrScheduler = observableEmpty(elseSourceOrScheduler));
      return condition() ? thenSource : elseSourceOrScheduler;
    });
  };
  Observable['for'] = Observable.forIn = function(sources, resultSelector, thisArg) {
    return enumerableOf(sources, resultSelector, thisArg).concat();
  };
  var observableWhileDo = Observable['while'] = Observable.whileDo = function(condition, source) {
    isPromise(source) && (source = observableFromPromise(source));
    return enumerableWhile(condition, source).concat();
  };
  observableProto.doWhile = function(condition) {
    return observableConcat([this, observableWhileDo(condition, this)]);
  };
  Observable['case'] = function(selector, sources, defaultSourceOrScheduler) {
    return observableDefer(function() {
      isPromise(defaultSourceOrScheduler) && (defaultSourceOrScheduler = observableFromPromise(defaultSourceOrScheduler));
      defaultSourceOrScheduler || (defaultSourceOrScheduler = observableEmpty());
      isScheduler(defaultSourceOrScheduler) && (defaultSourceOrScheduler = observableEmpty(defaultSourceOrScheduler));
      var result = sources[selector()];
      isPromise(result) && (result = observableFromPromise(result));
      return result || defaultSourceOrScheduler;
    });
  };
  var ExpandObservable = (function(__super__) {
    inherits(ExpandObservable, __super__);
    function ExpandObservable(source, fn, scheduler) {
      this.source = source;
      this._fn = fn;
      this._scheduler = scheduler;
      __super__.call(this);
    }
    function scheduleRecursive(args, recurse) {
      var state = args[0],
          self = args[1];
      var work;
      if (state.q.length > 0) {
        work = state.q.shift();
      } else {
        state.isAcquired = false;
        return ;
      }
      var m1 = new SingleAssignmentDisposable();
      state.d.add(m1);
      m1.setDisposable(work.subscribe(new ExpandObserver(state, self, m1)));
      recurse([state, self]);
    }
    ExpandObservable.prototype._ensureActive = function(state) {
      var isOwner = false;
      if (state.q.length > 0) {
        isOwner = !state.isAcquired;
        state.isAcquired = true;
      }
      isOwner && state.m.setDisposable(this._scheduler.scheduleRecursive([state, this], scheduleRecursive));
    };
    ExpandObservable.prototype.subscribeCore = function(o) {
      var m = new SerialDisposable(),
          d = new CompositeDisposable(m),
          state = {
            q: [],
            m: m,
            d: d,
            activeCount: 0,
            isAcquired: false,
            o: o
          };
      state.q.push(this.source);
      state.activeCount++;
      this._ensureActive(state);
      return d;
    };
    return ExpandObservable;
  }(ObservableBase));
  var ExpandObserver = (function(__super__) {
    inherits(ExpandObserver, __super__);
    function ExpandObserver(state, parent, m1) {
      this._s = state;
      this._p = parent;
      this._m1 = m1;
      __super__.call(this);
    }
    ExpandObserver.prototype.next = function(x) {
      this._s.o.onNext(x);
      var result = tryCatch(this._p._fn)(x);
      if (result === errorObj) {
        return this._s.o.onError(result.e);
      }
      this._s.q.push(result);
      this._s.activeCount++;
      this._p._ensureActive(this._s);
    };
    ExpandObserver.prototype.error = function(e) {
      this._s.o.onError(e);
    };
    ExpandObserver.prototype.completed = function() {
      this._s.d.remove(this._m1);
      this._s.activeCount--;
      this._s.activeCount === 0 && this._s.o.onCompleted();
    };
    return ExpandObserver;
  }(AbstractObserver));
  observableProto.expand = function(selector, scheduler) {
    isScheduler(scheduler) || (scheduler = currentThreadScheduler);
    return new ExpandObservable(this, selector, scheduler);
  };
  function argumentsToArray() {
    var len = arguments.length,
        args = new Array(len);
    for (var i = 0; i < len; i++) {
      args[i] = arguments[i];
    }
    return args;
  }
  var ForkJoinObservable = (function(__super__) {
    inherits(ForkJoinObservable, __super__);
    function ForkJoinObservable(sources, cb) {
      this._sources = sources;
      this._cb = cb;
      __super__.call(this);
    }
    ForkJoinObservable.prototype.subscribeCore = function(o) {
      if (this._sources.length === 0) {
        o.onCompleted();
        return disposableEmpty;
      }
      var count = this._sources.length;
      var state = {
        finished: false,
        hasResults: new Array(count),
        hasCompleted: new Array(count),
        results: new Array(count)
      };
      var subscriptions = new CompositeDisposable();
      for (var i = 0,
          len = this._sources.length; i < len; i++) {
        var source = this._sources[i];
        isPromise(source) && (source = observableFromPromise(source));
        subscriptions.add(source.subscribe(new ForkJoinObserver(o, state, i, this._cb, subscriptions)));
      }
      return subscriptions;
    };
    return ForkJoinObservable;
  }(ObservableBase));
  var ForkJoinObserver = (function(__super__) {
    inherits(ForkJoinObserver, __super__);
    function ForkJoinObserver(o, s, i, cb, subs) {
      this._o = o;
      this._s = s;
      this._i = i;
      this._cb = cb;
      this._subs = subs;
      __super__.call(this);
    }
    ForkJoinObserver.prototype.next = function(x) {
      if (!this._s.finished) {
        this._s.hasResults[this._i] = true;
        this._s.results[this._i] = x;
      }
    };
    ForkJoinObserver.prototype.error = function(e) {
      this._s.finished = true;
      this._o.onError(e);
      this._subs.dispose();
    };
    ForkJoinObserver.prototype.completed = function() {
      if (!this._s.finished) {
        if (!this._s.hasResults[this._i]) {
          return this._o.onCompleted();
        }
        this._s.hasCompleted[this._i] = true;
        for (var i = 0; i < this._s.results.length; i++) {
          if (!this._s.hasCompleted[i]) {
            return ;
          }
        }
        this._s.finished = true;
        var res = tryCatch(this._cb).apply(null, this._s.results);
        if (res === errorObj) {
          return this._o.onError(res.e);
        }
        this._o.onNext(res);
        this._o.onCompleted();
      }
    };
    return ForkJoinObserver;
  }(AbstractObserver));
  Observable.forkJoin = function() {
    var len = arguments.length,
        args = new Array(len);
    for (var i = 0; i < len; i++) {
      args[i] = arguments[i];
    }
    var resultSelector = isFunction(args[len - 1]) ? args.pop() : argumentsToArray;
    Array.isArray(args[0]) && (args = args[0]);
    return new ForkJoinObservable(args, resultSelector);
  };
  observableProto.forkJoin = function() {
    var len = arguments.length,
        args = new Array(len);
    for (var i = 0; i < len; i++) {
      args[i] = arguments[i];
    }
    if (Array.isArray(args[0])) {
      args[0].unshift(this);
    } else {
      args.unshift(this);
    }
    return Observable.forkJoin.apply(null, args);
  };
  observableProto.manySelect = observableProto.extend = function(selector, scheduler) {
    isScheduler(scheduler) || (scheduler = Rx.Scheduler.immediate);
    var source = this;
    return observableDefer(function() {
      var chain;
      return source.map(function(x) {
        var curr = new ChainObservable(x);
        chain && chain.onNext(x);
        chain = curr;
        return curr;
      }).tap(noop, function(e) {
        chain && chain.onError(e);
      }, function() {
        chain && chain.onCompleted();
      }).observeOn(scheduler).map(selector);
    }, source);
  };
  var ChainObservable = (function(__super__) {
    inherits(ChainObservable, __super__);
    function ChainObservable(head) {
      __super__.call(this);
      this.head = head;
      this.tail = new AsyncSubject();
    }
    addProperties(ChainObservable.prototype, Observer, {
      _subscribe: function(o) {
        var g = new CompositeDisposable();
        g.add(currentThreadScheduler.schedule(this, function(_, self) {
          o.onNext(self.head);
          g.add(self.tail.mergeAll().subscribe(o));
        }));
        return g;
      },
      onCompleted: function() {
        this.onNext(Observable.empty());
      },
      onError: function(e) {
        this.onNext(Observable['throw'](e));
      },
      onNext: function(v) {
        this.tail.onNext(v);
        this.tail.onCompleted();
      }
    });
    return ChainObservable;
  }(Observable));
  var SwitchFirstObservable = (function(__super__) {
    inherits(SwitchFirstObservable, __super__);
    function SwitchFirstObservable(source) {
      this.source = source;
      __super__.call(this);
    }
    SwitchFirstObservable.prototype.subscribeCore = function(o) {
      var m = new SingleAssignmentDisposable(),
          g = new CompositeDisposable(),
          state = {
            hasCurrent: false,
            isStopped: false,
            o: o,
            g: g
          };
      g.add(m);
      m.setDisposable(this.source.subscribe(new SwitchFirstObserver(state)));
      return g;
    };
    return SwitchFirstObservable;
  }(ObservableBase));
  var SwitchFirstObserver = (function(__super__) {
    inherits(SwitchFirstObserver, __super__);
    function SwitchFirstObserver(state) {
      this._s = state;
      __super__.call(this);
    }
    SwitchFirstObserver.prototype.next = function(x) {
      if (!this._s.hasCurrent) {
        this._s.hasCurrent = true;
        isPromise(x) && (x = observableFromPromise(x));
        var inner = new SingleAssignmentDisposable();
        this._s.g.add(inner);
        inner.setDisposable(x.subscribe(new InnerObserver(this._s, inner)));
      }
    };
    SwitchFirstObserver.prototype.error = function(e) {
      this._s.o.onError(e);
    };
    SwitchFirstObserver.prototype.completed = function() {
      this._s.isStopped = true;
      !this._s.hasCurrent && this._s.g.length === 1 && this._s.o.onCompleted();
    };
    inherits(InnerObserver, __super__);
    function InnerObserver(state, inner) {
      this._s = state;
      this._i = inner;
      __super__.call(this);
    }
    InnerObserver.prototype.next = function(x) {
      this._s.o.onNext(x);
    };
    InnerObserver.prototype.error = function(e) {
      this._s.o.onError(e);
    };
    InnerObserver.prototype.completed = function() {
      this._s.g.remove(this._i);
      this._s.hasCurrent = false;
      this._s.isStopped && this._s.g.length === 1 && this._s.o.onCompleted();
    };
    return SwitchFirstObserver;
  }(AbstractObserver));
  observableProto.switchFirst = function() {
    return new SwitchFirstObservable(this);
  };
  observableProto.flatMapFirst = observableProto.selectManyFirst = function(selector, resultSelector, thisArg) {
    return new FlatMapObservable(this, selector, resultSelector, thisArg).switchFirst();
  };
  Rx.Observable.prototype.flatMapWithMaxConcurrent = function(limit, selector, resultSelector, thisArg) {
    return new FlatMapObservable(this, selector, resultSelector, thisArg).merge(limit);
  };
  return Rx;
}));
