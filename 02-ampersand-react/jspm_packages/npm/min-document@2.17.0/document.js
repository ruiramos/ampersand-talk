/* */ 
var domWalk = require("dom-walk");
var Comment = require("./dom-comment");
var DOMText = require("./dom-text");
var DOMElement = require("./dom-element");
var DocumentFragment = require("./dom-fragment");
var Event = require("./event");
var dispatchEvent = require("./event/dispatch-event");
var addEventListener = require("./event/add-event-listener");
var removeEventListener = require("./event/remove-event-listener");
module.exports = Document;
function Document() {
  if (!(this instanceof Document)) {
    return new Document();
  }
  this.head = this.createElement("head");
  this.body = this.createElement("body");
  this.documentElement = this.createElement("html");
  this.documentElement.appendChild(this.head);
  this.documentElement.appendChild(this.body);
  this.childNodes = [this.documentElement];
  this.nodeType = 9;
}
var proto = Document.prototype;
proto.createTextNode = function createTextNode(value) {
  return new DOMText(value, this);
};
proto.createElementNS = function createElementNS(namespace, tagName) {
  var ns = namespace === null ? null : String(namespace);
  return new DOMElement(tagName, this, ns);
};
proto.createElement = function createElement(tagName) {
  return new DOMElement(tagName, this);
};
proto.createDocumentFragment = function createDocumentFragment() {
  return new DocumentFragment(this);
};
proto.createEvent = function createEvent(family) {
  return new Event(family);
};
proto.createComment = function createComment(data) {
  return new Comment(data, this);
};
proto.getElementById = function getElementById(id) {
  id = String(id);
  var result = domWalk(this.childNodes, function(node) {
    if (String(node.id) === id) {
      return node;
    }
  });
  return result || null;
};
proto.getElementsByClassName = DOMElement.prototype.getElementsByClassName;
proto.getElementsByTagName = DOMElement.prototype.getElementsByTagName;
proto.removeEventListener = removeEventListener;
proto.addEventListener = addEventListener;
proto.dispatchEvent = dispatchEvent;
