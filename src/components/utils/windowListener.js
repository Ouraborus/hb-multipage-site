export class WindowListener {
  constructor (callback) {
    this.elements = {}
    this.callback = callback

    this.setVariables()
    this.setListeners()
  }

  setVariables () {
    this.elements.small = window.matchMedia('(min-width: 320px) and (max-width: 639px)')
    this.elements.medium = window.matchMedia('(min-width: 640px) and (max-width: 1023px)')
    this.elements.large = window.matchMedia('(min-width: 1024px)')
    this.elements.current = null
  }

  setListeners () {
    this.elements.small.addListener(this.getSize.bind(this))
    this.elements.medium.addListener(this.getSize.bind(this))
    this.elements.large.addListener(this.getSize.bind(this))
  }

  getSize () {
    const width = window.innerWidth
    if (width > 320 && width < 640 && this.elements.current !== 'small') {
      this.elements.current = 'small'
      this.callback(this.elements.current)
    } else if (width > 639 && width < 1024 && this.elements.current !== 'medium') {
      this.elements.current = 'medium'
      this.callback(this.elements.current)
    } else if (width > 1023 && this.elements.current !== 'large') {
      this.elements.current = 'large'
      this.callback(this.elements.current)
    }
  }
}
