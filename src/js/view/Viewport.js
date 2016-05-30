/**
 * Created by alexey.deyko on 30.5.16.
 */
import Backbone from 'backbone';
import viewportTpl from '../templates/viewport.html';

class Viewport extends Backbone.View {
  get tagName() { return 'div' }
  get template() { return _.template(viewportTpl) }
}

export default Viewport;