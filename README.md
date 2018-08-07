# element-district
适用于element-ui的省市区联动插件

## 使用方法

### umd引入
```html
<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <!-- import CSS -->
  <link rel="stylesheet" href="https://unpkg.com/element-ui/lib/theme-chalk/index.css">
</head>
<body>
  <div id="app">
    <element-district @change="changeHandler"/>
  </div>
</body>
  <!-- import Vue before Element -->
  <script src="https://unpkg.com/vue/dist/vue.js"></script>
  <!-- import JavaScript -->
  <script src="https://unpkg.com/element-ui/lib/index.js"></script>
  <script src="https://unpkg.com/element-district@0.1.1/dist/element-district.umd.min.js"></script>
  <script>
    new Vue({
      el: '#app',
      data: function() {
        return { visible: false }
      },
      methods: {
        changeHandler() {
          // console.log(value)
        }
      }
    })
  </script>
</html>
```

### npm引入 【建议】
> npm i --save element-district

```js
// main.js
import Vue from 'vue'
import { Cascader } from "element-ui";
import 'element-ui/lib/theme-chalk/index.css';
import 'element-district'
import App from './App.vue'

Vue.config.productionTip = false

Vue.use(Cascader);

new Vue({
  render: h => h(App)
}).$mount('#app')


// App.vue
<template>
  <div>
    <element-district @change="changeHandler"/>
  </div>
</template>

<script>

export default {
  methods: {
    changeHandler(value) {
      console.log(value)
    }
  }
}
</script>

```