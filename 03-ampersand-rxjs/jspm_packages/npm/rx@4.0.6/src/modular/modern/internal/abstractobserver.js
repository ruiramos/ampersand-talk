/* */ 
var Observer = require("../observer");
var inherits = require("../helpers/inherits");
var notImplemented = require("../helpers/notimplemented");
module.exports = (function(__super__) {
  inherits(AbstractObserver, __super__);
  function AbstractObserver() {
    this.isStopped = false;
    __super__.call(this);
  }
  AbstractObserver.prototype.next = notImplemented;
  AbstractObserver.prototype.error = notImplemented;
  AbstractObserver.prototype.completed = notImplemented;
  AbstractObserver.prototype.onNext = function(value) {
    if (!this.isStopped) {
      this.next(value);
    }
  };
  AbstractObserver.prototype.onError = function(error) {
    if (!this.isStopped) {
      this.isStopped = true;
      this.error(error);
    }
  };
  AbstractObserver.prototype.onCompleted = function() {
    if (!this.isStopped) {
      this.isStopped = true;
      this.completed();
    }
  };
  AbstractObserver.prototype.dispose = function() {
    this.isStopped = true;
  };
  AbstractObserver.prototype.fail = function(e) {
    if (!this.isStopped) {
      this.isStopped = true;
      this.error(e);
      return true;
    }
    return false;
  };
  return AbstractObserver;
}(Observer));
