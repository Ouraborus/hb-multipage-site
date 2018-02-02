import data from '../../data/data.json'
import template from './navBar.pug'

export class NavBar {
  constructor (node) {
    this.node = document.querySelector(node)
    this.fillHtml()
    this.setBtnAnimation()
  }

  fillHtml () {
    this.node.innerHTML = template(data)
  }
  setBtnAnimation () {
    this.node.children[0].addEventListener('click', this.toggleBtn.bind(this))
  }
  toggleBtn () {
    this.node.children[0].classList.toggle('active')
  }
}
