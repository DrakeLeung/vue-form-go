const vueFormGo = {}

vueFormGo.install = Vue => {
  Vue.directive('form-go', {
    bind() {
      this.el.addEventListener('blur', () => {
        this.check()
      })
    },

    check() {
      if (!this.el.checkValidity()) {
        console.log(this.el.validationMessage)
      }
    },
  })
}

export default vueFormGo
