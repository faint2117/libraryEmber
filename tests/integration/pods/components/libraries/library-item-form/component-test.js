import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('libraries/library-item-form', 'Integration | Component | libraries/library item form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{libraries/library-item-form}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#libraries/library-item-form}}
      template block text
    {{/libraries/library-item-form}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
