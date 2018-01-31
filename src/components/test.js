export class Test {
  constructor (node) {
    this.node = document.querySelector(node)

    this.fillHtml()
  }

  fillHtml () {
    this.node.innerText = 'Test Working!'
  }
}
