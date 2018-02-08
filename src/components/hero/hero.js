import template from './hero.pug'

export default class Hero {
  constructor (selector, data) {
    this.node = document.querySelector(selector)

    this.fillHtml(data)
    this.setElements()
  }

  fillHtml (data) {
    this.node.innerHTML = template(data)
  }
  setElements () {
    return false
  }
}
