import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  email: attr('string'),

  responseMessage: '',

  isEmailValid: Ember.computed.match('email', /^.+@.+\..+$/),

  isDisabled: Ember.computed.not('isEmailValid')
});
