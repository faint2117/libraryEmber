import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
  emailAdress: attr('string'),
  message: attr('string'),

  emailIsValid: Ember.computed.match('emailAdress', /^.+@.+\..+$/),

  messageIsValid: Ember.computed.gte('message.length', 5),

  areValid: Ember.computed.and('emailIsValid', 'messageIsValid'),

  isDisabled: Ember.computed.not('areValid')
});
