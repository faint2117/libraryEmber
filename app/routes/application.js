import Ember from 'ember';

export default Ember.Route.extend({
  emailAddress: '',

  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isValid'),

  actions: {

    saveInvitation: function() {
      alert(`Saving of the following email address is in progress: ${this.controller.get('emailAddress')}`);
      this.controller.set('responseMessage', `Thank you! We've just saved your email address: ${this.controller.get('emailAddress')}`);
      this.controller.set('emailAddress', '');
    }
  }
});
