import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('not-gonna-eat', 'Integration | Component | not gonna eat', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{not-gonna-eat}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#not-gonna-eat}}
      template block text
    {{/not-gonna-eat}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
