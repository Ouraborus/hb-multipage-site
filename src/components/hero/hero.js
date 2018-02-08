import data from '../../data/dataHero.json'
import template from './hero.pug'
import './_hero.scss'

export class Hero {
  constructor (selector) {
    this.node = document.querySelector(selector)

    this.fillHtml(data)
    this.setElements()
  }

  fillHtml () {
    this.node.innerHTML = template(data)
  }
  setElements () {
    return false
  }
}