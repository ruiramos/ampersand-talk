# ampersand-collection-underscore-mixin

A mixin for extending ampersand-collection with underscore methods.

### Deprecation Notice
As of [`v4.0.0`](https://github.com/AmpersandJS/ampersand-rest-collection/pull/23) this is no longer mixed in to `ampersand-rest-collection`. Instead it uses [`ampersand-collection-lodash-mixin`](https://www.npmjs.com/package/ampersand-collection-lodash-mixin) to match all other core module's move to using lodash. We no longer recommend using this module individually, and if you are we recommend converting to the lodash mixin.

## install

```
npm install ampersand-collection-underscore-mixin
```

## example

```javascript
var Collection = require('ampersand-collection');
var underscoreMixin = require('ampersand-collection-underscore-mixin');


module.exports = Collection.extend(underscoreMixin, {
    sampleMethod: function () {
        // now we've got underscore methods 
        // we can call that are applied to models
        // in the collection.
        this.filter( ... );
        this.some( ... );
        this.each( ... )
    }
});
```

## credits

All credit for underscore and this approach in backbone goes to Jeremy Ashkenas and the rest of the Backbone and Underscore authors.

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter.

## license

MIT

