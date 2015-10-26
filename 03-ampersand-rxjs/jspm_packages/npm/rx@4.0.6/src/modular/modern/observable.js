/* */ 
'use strict';
var Observer = require("./observer");
var isFunction = require("./helpers/isFunction");
var AnonymousObservable = require("./observable/anonymousobservable");
function Observable() {}
Observable.create = function(subscribe, parent) {
  return new AnonymousObservable(subscribe, parent);
};
Observable.isObservable = function(o) {
  return o && isFunction(o.subscribe);
};
Observable.prototype.subscribe = function(oOrOnNext, onError, onCompleted) {
  return this._subscribe(typeof oOrOnNext === 'object' ? oOrOnNext : Observer.create(oOrOnNext, onError, onCompleted));
};
Observable.prototype.subscribeOnNext = function(onNext, thisArg) {
  return this._subscribe(Observer.create(typeof thisArg !== 'undefined' ? function(x) {
    onNext.call(thisArg, x);
  } : onNext));
};
Observable.prototype.subscribeOnError = function(onError, thisArg) {
  return this._subscribe(Observer.create(null, typeof thisArg !== 'undefined' ? function(e) {
    onError.call(thisArg, e);
  } : onError));
};
Observable.prototype.subscribeOnCompleted = function(onCompleted, thisArg) {
  return this._subscribe(Observer.create(null, null, typeof thisArg !== 'undefined' ? function() {
    onCompleted.call(thisArg);
  } : onCompleted));
};
module.exports = Observable;
