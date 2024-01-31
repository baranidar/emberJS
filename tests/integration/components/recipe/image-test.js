import { module, test } from 'qunit';
import { setupRenderingTest } from 'chilli-garlic/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recipe/image', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders the given image', async function (assert) {
    await render(hbs`



      <Recipe::Image
        src="/assets/images/MadrasToMiddletown.jpg"
        alt="Madras to Middletown"
      />
    `);

    assert
      .dom('.image img')
      .exists()
      .hasAttribute('src', '/assets/images/MadrasToMiddletown.jpg')
      .hasAttribute('alt', 'Madras to Middletown');
  });

  test('clicking on the component toggles its size', async function (assert) {
    await render(hbs`
      <Recipe::Image
        src="/assets/images/MadrasToMiddletown.jpg"
        alt="Madras to Middletown"
      />
    `);

    assert.dom('button.image').exists();

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');

    await click('button.image');

    assert.dom('.image').hasClass('large');
    assert.dom('.image small').hasText('View Smaller');

    await click('button.image');

    assert.dom('.image').doesNotHaveClass('large');
    assert.dom('.image small').hasText('View Larger');
  });
});
