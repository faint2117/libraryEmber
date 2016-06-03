import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('libraries/library-item', 'Integration | Component | libraries/library item', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{libraries/library-item}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#libraries/library-item}}
      template block text
    {{/libraries/library-item}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
