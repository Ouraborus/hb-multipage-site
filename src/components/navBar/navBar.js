import data from '../../data/data.json'
import template from './navBar.pug'

export class navBar {
  constructor (node) {
    this.node = document.querySelector(node)
    this.fillHtml()
  }

  fillHtml () {
    this.node.innerHTML = template(data)
  }
}
