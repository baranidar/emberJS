import { module, test } from 'qunit';
import { setupRenderingTest } from 'chilli-garlic/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recipe', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders information about a recipe', async function (assert) {
    await render(hbs`<Recipe />`);

    this.setProperties({
      recipe: {
        title: 'Fettuccine with Chili Garlic Sauce',
        cuisine: 'Italian',
        category: 'Entree',
        rating: '5',
        description: 'Coming soon',
        image:
          'http://shakthisfoodadventures.azurewebsites.net/Content/Images/Fettuccine%20CG%20Sauce2.jpg',
      },
    });

    await render(hbs`<Recipe @recipe={{this.recipe}} />`);

    assert.dom('article').hasClass('recipe');
    assert.dom('article h3').hasText('Fettuccine with Chili Garlic Sauce');
    assert.dom('article .recipe.cuisine').includesText('Italian');
    assert.dom('article .recipe.category').includesText('Entree');
    assert.dom('article .recipe.rating').includesText('5');
    assert.dom('article .recipe.description').includesText('Coming soon');
    assert.dom('article .vegan').exists();
  });
});
