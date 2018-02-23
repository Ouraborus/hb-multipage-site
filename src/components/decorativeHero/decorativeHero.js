import data from '../../data/data.json'
import template from './decorativeHero.pug'
/* eslint-disable */
import { WindowListener } from '../utils/windowListener.js'

export class DecorativeHero {
  constructor (selector) {
    this.node = document.querySelector(selector)
    new WindowListener(this.setBackground.bind(this))
    this.fillHtml()
    this.background = this.node.querySelector('.decorative-hero__img')
  }

  fillHtml () {
    this.node.innerHTML = template(data.decorativeHero)
  }
  setBackground(size){
    this.background.setAttribute("style",`background-image: url(${data.decorativeHero.images[size].url});`)
  }
}
