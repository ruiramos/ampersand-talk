var View = require('ampersand-view');
var templates = require('../templates');


module.exports = View.extend({
    template: templates.includes.person,
    bindings: {
        'model.fullName': '[data-hook~=name]',
        'model.avatar': {
            type: 'attribute',
            hook: 'avatar',
            name: 'src'
        },
        'model.editUrl': {
            type: 'attribute',
            hook: 'action-edit',
            name: 'href'
        },
        'model.viewUrl': {
            type: 'attribute',
            hook: 'name',
            name: 'href'
        },
        'model.selected': {
          type: 'booleanClass',
          name: 'person-selected',
          hook: 'person-container'
        }
    },
    events: {
        'click [data-hook~=action-delete]': 'handleRemoveClick',
        'click [data-hook~=person-container]': 'handleSelectPerson'
    },
    handleRemoveClick: function () {
        this.model.destroy();
        return false;
    },
    handleSelectPerson: function(){
      this.model.toggle('selected');
    }
});
