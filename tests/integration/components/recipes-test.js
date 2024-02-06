import { module, test } from 'qunit';
import { setupRenderingTest } from 'chilli-garlic/tests/helpers';
import { render, fillIn } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recipes', function (hooks) {
  setupRenderingTest(hooks);

  hooks.beforeEach(function () {
    this.setProperties({
      recipes: [
        {
            id: 'fettuccine-with-chili-garlic-sauce',
            title: 'Fettuccine with Chili Garlic Sauce',
            cuisine: 'Italian',
            category: 'Entree',
            rating: 5,
            description: 'Coming soon',
            image: 'http://shakthisfoodadventures.azurewebsites.net/Content/Images/Fettuccine%20CG%20Sauce2.jpg',
        },
        {
            id: 'veggie-bean-burger-with-baked-potato-wedges',
            title: 'Veggie Bean Burger with Baked Potato Wedges',
            cuisine: 'American',
            category: 'Entree',
            rating: 5,
            description: 'Coming soon',
            image: 'http://shakthisfoodadventures.azurewebsites.net/Content/Images/Veggieburger1.jpg',        
        },
        {
            id: 'asian-inspired-kale-and-quinoa-soup-with-garden-veggies',
            title: 'Asian Inspired Kale and Quinoa Soup with Garden Veggies',
            cuisine: 'Asian',
            category: 'Entree',
            rating: 5,
            description: 'Coming soon',
            image: 'http://shakthisfoodadventures.azurewebsites.net/Content/Images/Kale5.jpg',
        },
      ],
    });
});

test('it renders all recipes', async function (assert) {
    await render(hbs`<Recipes @recipes={{this.recipes}} />`);

    assert.dom('.recipes').exists();
    assert.dom('.recipes input').exists();

    assert.dom('.recipes .results').exists();
    assert.dom('.recipes .results li').exists({ count: 3 });

    assert
      .dom('.recipes .results li:nth-of-type(1)')
      .containsText('Fettuccine with Chili Garlic Sauce');

    assert
      .dom('.recipes .results li:nth-of-type(2)')
      .containsText('Veggie Bean Burger with Baked Potato Wedges');

    assert
      .dom('.recipes .results li:nth-of-type(3)')
      .containsText('Asian Inspired Kale and Quinoa Soup with Garden Veggies');
  });

  test('it updates the results according to the search query', async function (assert) {
    await render(hbs`<Recipes @recipes={{this.recipes}} />`);

    assert.dom('.recipes').exists();
    assert.dom('.recipes input').exists();

    await fillIn('.recipes input', 'Fettuccine');

    assert.dom('.recipes .results').exists();
    assert.dom('.recipes .results li').exists({ count: 1 });
    assert.dom('.recipes .results li').containsText('Fettuccine with');

    await fillIn('.recipes input', 'Bean');

    assert.dom('.recipes .results').exists();
    assert.dom('.recipes .results li').exists({ count: 1 });
    assert.dom('.recipes .results li').containsText('Veggie Bean Burger');
    });
});