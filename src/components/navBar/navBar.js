import data from '../../data/data.json'
import template from './navBar.pug'
import './_navBar.scss'

export class NavBar {
  constructor (selector) {
    this.node = document.querySelector(selector)
    this.elements = {}

    this.fillHtml()
    this.setElements()
    this.setNavAnimation()
    this.setDropDown()
  }

  setElements () {
    this.elements.menu = this.node.querySelector('.navbar__icon')
    this.elements.navbar = this.node.querySelector('.navbar__list')
    this.elements.dropDownElmts = this.node.querySelectorAll('.js-dropdown')
    this.elements.activeElmt = null
  }

  fillHtml () {
    this.node.innerHTML = template(data)
  }
  setNavAnimation () {
    this.elements.menu.addEventListener('click', () => {
      this.toggleElement(this.elements.menu, 'active')
      this.toggleElement(this.elements.navbar, 'navbar__list--active')
      this.toggleElement(document.body, 'navbar__background')
    })
  }
  toggleElement (element, data) {
    element.classList.toggle(data)
  }
  setDropDown () {
    this.elements.dropDownElmts.forEach(element => {
      element.addEventListener('click', () => this.dropDownController(this.elements.activeElmt, element.querySelector('.navbar__dropdown'), 'navbar__dropdown--collapsed'))
    })
  }
  dropDownController (actual, selected, data) {
    if (actual === null || actual === selected) {
      this.elements.activeElmt = selected
      this.elements.activeElmt.classList.toggle(data)
    } else {
      actual.classList.add(data)
      this.elements.activeElmt = selected
      this.elements.activeElmt.classList.remove(data)
    }
  }
}
