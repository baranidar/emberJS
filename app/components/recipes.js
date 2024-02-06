import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';

export default class RecipesComponent extends Component {
  @tracked query = '';
}