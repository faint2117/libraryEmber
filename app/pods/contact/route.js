import Ember from 'ember';

export default Ember.Route.extend({

  model() {
    return this.store.createRecord('contact');
  },

  actions: {

    sendMessage() {
      const email = this.controller.get('model.emailAdress');
      const message = this.controller.get('model.message');

      const newInvitation = this.controller.store.createRecord('contact', {
        email: email,
        message: message
      });

      newInvitation.save().then((response) => {
        this.controller.set('responseMessage', 'Thank you! We have just send you message');
        this.controller.set('emailAddress', '');
        this.controller.set('message', '');
        alert(`Sending the message from the following email address is in progress: ${this.controller.get('model.emailAdress')}`);
      });
    },

    willTransition() {
      // rollbackAttributes() removes the record from the store
      // if the model 'isNew'
      this.controller.get('model').rollbackAttributes();
    }
  }

});
