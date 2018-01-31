import test from '../data/data.json'
import template from './test.pug'

export class Test {
  constructor (node) {
    this.node = document.querySelector(node)
    this.fillHtml()
  }

  fillHtml () {
    this.node.innerHTML = template(test)
  }
}
