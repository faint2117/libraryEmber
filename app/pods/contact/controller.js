import Ember from 'ember';

export default Ember.Controller.extend({
  emailAddress: '',

  emailIsValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),

  message: '',

  messageIsValid: Ember.computed.gte('message.length', 5),

  areValid: Ember.computed.and('emailIsValid', 'messageIsValid'),

  isDisabled: Ember.computed.not('areValid'),

  actions: {

    sendMessage() {
      alert(`Sending the message from the following email address is in progress: ${this.get('emailAddress')}`);
      this.set('responseMessage', 'Thank you! We have just send you message');
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }

});
