import Component from '@glimmer/component';

export default class RecipesFilterComponent extends Component {
  get results() {
    let { recipes, query } = this.args;

    if (query) {
      recipes = recipes.filter((recipe) => recipe.title.includes(query));
    }

    return recipes;
  }
}