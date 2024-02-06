import Model, { attr } from '@ember-data/model';

export default class RecipeModel extends Model {
  @attr title;
  @attr cuisine;
  @attr category;
  @attr rating;
  @attr description;
  @attr image;
}
