<template>
  <div>
    <element-district @change="changeHandler"/>
  </div>
</template>

<script>
import components from './components/index.js'
export default {
  components: {
    ...components
  },
  methods: {
    changeHandler() {
      // console.log(value)
    }
  }
}
</script>

<style>

</style>
