import { module, test } from 'qunit';
import { setupRenderingTest } from 'chilli-garlic/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | vegan', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Vegan 
    src="/assets/images/Vegan.png"
    alt="Vegan?"
    />`
    );
    assert.dom().hasText('');
    debugger;
    assert.dom('.image').exists();
  });
});
