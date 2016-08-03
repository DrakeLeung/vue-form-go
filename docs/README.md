# Docs
*vue-form-go* utilize the HTML5 [form constrant validation](http://www.html5rocks.com/en/tutorials/forms/constraintvalidation/). 

## Getting Start

1. register the plugin

```javascript
import vueFormGo from 'vue-form-go'

Vue.use(vueFormGo)
```

2. apply in component

```html
<form id="demo" v-form-go="myForm">
  <p>
    <input autofocus v-model="model.email"
      v-ctrl-go="email" type="email" required 
    >
    <div v-show="myForm.email.validity.typeMismatch">邮箱格式不正确</div>
    <div v-show="myForm.email.validity.valueMissing">不能为空</div>
  </p>
</form>
```
```javascript
new Vue({
  el: '#demo',
  data: {
    model: {
      email: '',
    },
  },
})
```

## API
### `v-form-go` Directive
You need 2 specify an unique value 4 `v-form-go` directive, which will register to Vue instance, so that you can use it in template. For example:

```html
<form id="demo" v-form-go="myForm">
<div v-show="myForm.email.validity.typeMismatch">邮箱格式不正确</div>
```

Now, You can see that we use `myForm` variable.


### `v-ctrl-go` Directive
Like `v-form-go`, it also needs an unique value, and we can use it like following:

```html
<form id="demo" v-form-go="myForm">
  <p>
    <input autofocus v-model="model.email"
      v-ctrl-go="email" type="email" required 
    >
    <div v-show="myForm.email.validity.typeMismatch">邮箱格式不正确</div>
  </p>
</form>
```
We give a `email` in `v-ctrl-go` directive, so we can access it via `myForm.email`.


### Handle Validation Message
Each `v-ctrl-go` element has a `validity` property to stand for its validity. It has the same interface 2 [validityState](http://devdocs.io/dom/validitystate). 

For instance, if you wanna check `type` match, just access `validity.typeMismatch`.

```html
<div v-show="myForm.email.validity.typeMismatch">邮箱格式不正确</div>
```

The `validity` object will update in each `blur` event.