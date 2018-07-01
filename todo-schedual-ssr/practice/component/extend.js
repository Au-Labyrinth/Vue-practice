import Vue from 'vue'

const component = {
  props: {
    active: Boolean,
    propOne: String
  },
  template: `
    <div>
      <input type="text" v-model="text">
      <span @click="handleChange">{{propOne}}</span>
      <span v-show="active">see me if active</span>
    </div>
  `,
  data () {
    return {
      text: 0
    }
  },
  mounted () {
    console.log('comp mounted!')
  },
  methods: {
    handleChange () {
      this.$emit('change')
    }
  }
}

const parent = new Vue({
  name: 'parent'
})

const component2 = {
  extends: component,
  data () {
    return {
      text: 1
    }
  },
  mounted () {
    console.log(this.$parent.$options.name)
    this.$parent.text = '123456'
  }
}

// const CompVue = Vue.extend(component)

/* new CompVue({
  el: '#root',
  mounted () {
    console.log('Instance mounted!')
  },
  propsData: {
    propOne: 'xxx'
  },
  data: {
    text: '123'
  }
}) */

new Vue({
  parent: parent,
  name: 'Root',
  el: '#root',
  data: {
    text: 1212
  },
  components: {
    Comp: component2
  },
  mounted () {
    console.log(this.$parent.$options.name)
  },
  template: `
  <div>
    <span>{{text}}</span>
    <comp></comp>
  </div>
  `
})
