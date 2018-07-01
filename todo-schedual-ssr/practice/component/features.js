import Vue from 'vue'

const ChildComponent = {
  template: `<div>child component: {{data.value}}</div>`,
  inject: ['grandpa', 'data'],
  mounted () {
    // console.log(this.grandapa, this.data.value)
  }
}

const component = {
  name: 'comp',
  components: {
    ChildComponent
  },
  /* template: `
    <div :style="style">
      <slot name="header"></slot>
      <slot name="body"></slot>
    </div>
  `, */
  template: `
    <div :style="style">
      <slot :value="value" hello="hello"></slot>
      <child-component></child-component>
    </div>
  `,
  data () {
    return {
      style: {
        width: '200px',
        height: '200px',
        border: '1px solid #aaa'
      },
      value: 'component value'
    }
  }
}

new Vue({
  components: {
    CompOne: component
  },
  provide () {
    const data = {}

    Object.defineProperty(data, 'value', {
      get: () => this.value,
      enumerable: true
    })

    return {
      grandpa: this,
      data
    }
  },
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
    console.log(this.$refs.comp.value, this.$refs.ptag)
  },
  template: `
    <div>
      <comp-one ref="comp">
        <p slot-scope="props" ref="ptag">{{props.value}} {{props.hello}} {{value}}</p>
      </comp-one>
      <input type="text" v-model="value">
    </div>
  `
})
