import { module, test } from 'qunit';
import { click, find, visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'chilli-garlic/tests/helpers';

module('Acceptance | chilli garlic', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /', async function (assert) {
    await visit('/');

    assert.strictEqual(currentURL(), '/');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('ChilliGarlic');
    assert.dom('h2').hasText('Welcome to chilli garlic');
    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });

  test('visiting /about', async function (assert) {
    await visit('/about');

    assert.strictEqual(currentURL(), '/about');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('ChilliGarlic');
    assert.dom('h2').hasText('Chilli Garlic');

    assert.dom('.jumbo a.button').hasText('Contact Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/getting-in-touch');
  });

  test('viewing the details of a recipe', async function (assert) {
    await visit('/');
    assert.dom('.recipe').exists({ count: 15 });

    await click('.recipe:first-of-type a');
    assert.strictEqual(
      currentURL(),
      '/recipes/fettuccine-with-chili-garlic-sauce',
    );
  });

  test('visiting /recipes/fettuccine-with-chili-garlic-sauce', async function (assert) {
    await visit('/recipes/fettuccine-with-chili-garlic-sauce');
    assert.strictEqual(
      currentURL(),
      '/recipes/fettuccine-with-chili-garlic-sauce',
    );
    assert.dom('nav').exists();
    assert.dom('h1').containsText('ChilliGarlic');
    assert.dom('.recipe.detailed').exists();
    assert.dom('.share.button').hasText('Share on Twitter');

    let button = find('.share.button');

    let tweetURL = new URL(button.href);
    assert.strictEqual(tweetURL.host, 'twitter.com');

    assert.strictEqual(
      tweetURL.searchParams.get('url'),
      `${window.location.origin}/recipes/fettuccine-with-chili-garlic-sauce`,
    );
  });

  test('visiting /getting-in-touch', async function (assert) {
    await visit('/getting-in-touch');

    assert.strictEqual(currentURL(), '/getting-in-touch');
    assert.dom('nav').exists();
    assert.dom('h1').hasText('ChilliGarlic');
    assert.dom('h2').hasText('Contact Us');

    assert.dom('.jumbo a.button').hasText('About Us');
    await click('.jumbo a.button');

    assert.strictEqual(currentURL(), '/about');
  });
});
