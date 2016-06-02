import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    sendMessage() {
      this.controller.get('model').save().then(() => {
        this.controller.set('model.responseMessage', 'Thank you! We have just send you message');
        this.controller.set('model.emailAdress', '');
        this.controller.set('model.message', '');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
