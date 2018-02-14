import data from '../../data/dataHero.json'
import template from './decorativeHero.pug'

export class DecorativeHero {
  constructor (selector) {
    this.node = document.querySelector(selector)

    this.fillHtml(data)
  }

  fillHtml () {
    this.node.innerHTML = template(data)
  }
}
