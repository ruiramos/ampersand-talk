import Rx from 'rx';
import View from 'ampersand-view';

const Vectors = [[0, 1], [0, -1], [1, 0], [-1, 0], [1, 1], [-1, -1], [1, -1], [-1, 1]];
const sample = (arr) => arr[Math.floor(arr.length * Math.random())];

var CoolGame = View.extend({
  template: '<body>' +
              '<div data-hook="app-container" class="app-container">' +
                '<label data-hook="x-mouse-coord"></label>, ' +
                '<label data-hook="y-mouse-coord"></label>' +
                '<span data-hook="target-element" class="target"></span>' +
              '</div>' +
            '</body>',

  autoRender: true,

  props: {
    x: ['number', false, 0],
    y: ['number', false, 0],
    target: ['object', false, function(){
      return {x: 300, y: 200};
    }],
    maxDistance: ['number', false, 100]
  },

  derived: {
    distance: {
      deps: ['x', 'y', 'target'],
      fn(){
        return Math.sqrt(Math.pow(this.x - this.target.x, 2) + Math.pow(this.y - this.target.y, 2));
      }
    },
    tooFar: {
      deps: ['distance'],
      fn(){
        return this.distance > this.maxDistance;
      }
    }
  },

  bindings: {
    x: '[data-hook="x-mouse-coord"]',
    y: '[data-hook="y-mouse-coord"]',
    tooFar: {
      type: 'booleanClass',
      hook: 'app-container',
      name: 'way-too-far'
    },
    target: {
      hook: 'target-element',
      type(el, value){
        // moves the target
        el.style.top = value.y + 'px';
        el.style.left = value.x + 'px';
      }
    },
    maxDistance: {
      hook: 'target-element',
      type: function(el, value){
        // updates the radius
        el.style.width = 2 * value + 'px';
        el.style.height = 2 * value + 'px';
        el.style.marginLeft = -value + 'px';
        el.style.marginTop = -value + 'px';
      }
    }
  },

  initialize(){
    var mousemove = Rx.Observable.fromEvent(document, 'mousemove');
    var mousedown = Rx.Observable.fromEvent(document, 'mousedown').map(1);
    var mouseup = Rx.Observable.fromEvent(document, 'mouseup').map(-1);

    // mouse is down stream (down = 1, up = -1)
    var mouseIsDown = mousedown.merge(mouseup).startWith(-1);

    // registers the mouse position
    mousemove
      .subscribe(e => {
        this.set({
          x: e.clientX,
          y: e.clientY
        });
      });

    // moves the target and updates maxDistance (the radius)
    Rx.Observable
      .interval(100)
      .combineLatest(mouseIsDown)
      .subscribe(vals => {
        this.target = this.moveTarget(this.target, vals[0]);
        this.maxDistance = Math.max(this.maxDistance + vals[1], 10)
      })
  },

  moveTarget(oldTarget, val){
    if(!this.direction || val % 25 === 0){
      // change direction everynow and then
      this.direction = sample(Vectors);
    }

    var newPos = {
      x: oldTarget.x + this.direction[0] * 8,
      y: oldTarget.y + this.direction[1] * 8,
    };

    // bounce, BOUNCE
    if(newPos.x > window.innerWidth || newPos.x < 0) this.direction[0] *= -1;
    if(newPos.y > window.innerHeight || newPos.y < 0) this.direction[1] *= -1;

    return newPos;
  }
})

new CoolGame({el: document.body});

