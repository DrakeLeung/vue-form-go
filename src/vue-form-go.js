const vueFormGo = {}

vueFormGo.install = Vue => {
  let formId = ''

  Vue.directive('form-go', {
    bind() {
      formId = this.expression
      this.vm.$set(formId, {})
    },
  })


  Vue.directive('ctrl-go', {
    bind() {
      this.el.addEventListener('blur', () => {
        this.check()
      })
    },

    check() {
      this.vm.$set(
        `${formId}.${this.expression}`,
        { validity: this.el.validity }
      )
    },
  })
}

export default vueFormGo
