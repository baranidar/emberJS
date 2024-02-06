import { module, test } from 'qunit';

import { setupTest } from 'chilli-garlic/tests/helpers';

module('Unit | Model | recipe', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it has the right type', function (assert) {
    let store = this.owner.lookup('service:store');
    let recipe = store.createRecord('recipe', {
      id: 'fettuccine-with-chili-garlic-sauce',
      title: 'Fettuccine with Chili Garlic Sauce',
      cuisine: 'Italian',
      category: 'Entree',
      rating: '5',
      description: 'Coming soon',
      image:
        'http://shakthisfoodadventures.azurewebsites.net/Content/Images/Fettuccine%20CG%20Sauce2.jpg',
    });

    assert.strictEqual(recipe.cuisine, 'Italian');

  });
});
