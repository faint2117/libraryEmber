import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('invitation');
  },

  actions: {

    saveInvitation() {
      this.controller.get('model').save().then((response) => {
        this.controller.set('model.responseMessage', `Thank you! We saved your email address with the following id: ${response.get('id')}`);
        this.controller.set('model.email', '');
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }
});
