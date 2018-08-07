import Vue from 'vue';
import ElementDistrict from './District.vue';

const components = {
  ElementDistrict
}

Object.keys(components).forEach(name => {
  Vue.component(name, components[name]);
})

export default components;