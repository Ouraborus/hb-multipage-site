import data from '../../data/data.json'
import template from './navBar.pug'

export class NavBar {
  constructor (node) {
    this.node = document.querySelector(node)
    this.elements = {}

    this.fillHtml()
    this.setElements()
    this.setNavAnimation()
    this.setDropDown()
  }

  setElements () {
    this.elements.menu = this.node.children[0]
    this.elements.navbar = this.node.children[2]
    this.elements.dropDownElmts = this.node.querySelectorAll('.js-dropdown')
    this.elements.activeElmt = undefined
  }

  fillHtml () {
    this.node.innerHTML = template(data)
  }
  setNavAnimation () {
    this.elements.menu.addEventListener('click', () => {
      this.toggleElmt(this.elements.menu, 'active')
      this.toggleElmt(this.elements.navbar, 'navbar__list--active')
      this.toggleElmt(document.body, 'navbar__background')
    })
  }
  toggleElmt (element, data) {
    element.classList.toggle(data)
  }
  setDropDown () {
    this.elements.dropDownElmts.forEach(element => {
      element.addEventListener('click', () => this.dropDownController(this.elements.activeElmt, element.querySelector('.navbar__dropdown'), 'navbar__dropdown--collapsed'))
    })
  }
  dropDownController (actual, selected, data) {
    if (actual === undefined || actual === selected) {
      this.elements.activeElmt = selected
      this.elements.activeElmt.classList.toggle(data)
    } else {
      actual.classList.add(data)
      this.elements.activeElmt = selected
      this.elements.activeElmt.classList.remove(data)
    }
  }
}
