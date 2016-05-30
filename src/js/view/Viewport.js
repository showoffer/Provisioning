/**
 * Created by alexey.deyko on 30.5.16.
 */
import Backbone from 'backbone';
import viewportTpl from '../templates/viewport.js';

class Viewport extends Backbone.View {
  get el() { console.log('el');return '#app' }
  get tagName() { return 'div' }
  get template() {
    console.log(viewportTpl);
    return viewportTpl
  }
  initialize() {
    console.log('init');
  }
  render() {
    console.log('render');
    this.$el.html(this.template);
    return this;
  }
}

export default Viewport;