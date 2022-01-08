
 export default class Section {
  constructor({ renderer }, selector) {
    this._renderer = renderer,
    this._container = document.querySelector(selector)
  }

  addItem(element) {
    this._container.prepend(element)
  }

  renderItems(items) {
    items.forEach((item) => {
      const renderedItem = this._renderer(item)
      this.addItem(renderedItem)
    })
  }
}