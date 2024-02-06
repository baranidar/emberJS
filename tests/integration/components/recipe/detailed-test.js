import { module, test } from 'qunit';
import { setupRenderingTest } from 'chilli-garlic/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recipe/detailed', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      recipe: {
        id: 'fettuccine-with-chili-garlic-sauce',
        title: 'Fettuccine with Chili Garlic Sauce',
        cuisine: 'Italian',
        category: 'Entree',
        rating: '5',
        description: 'Coming soon',
        image:
          'http://shakthisfoodadventures.azurewebsites.net/Content/Images/Fettuccine%20CG%20Sauce2.jpg',
      },
    });
  });

  test('it renders a header with a share button', async function (assert) {
    await render(hbs`<Recipe::Detailed @recipe={{this.recipe}} />`);

    assert.dom('.jumbo').exists();
    assert.dom('.jumbo h2').containsText('Fettuccine with Chili Garlic Sauce');
    assert.dom('.jumbo a.button').containsText('Share on Twitter');
  });

  test('it renders detailed information about a recipe', async function (assert) {
    await render(hbs`<Recipe::Detailed @recipe={{this.recipe}} />`);

    assert.dom('article').hasClass('recipe');
    assert.dom('article .recipe.cuisine').includesText('Italian');
    assert.dom('article .recipe.category').includesText('Entree');
    assert.dom('article .recipe.rating').includesText('5');
    assert.dom('article .recipe.description').includesText('Coming soon');
    assert.dom('article .vegan').exists();
  });
});
