import Vue from 'vue'

const component = {
  props: ['prop1'],
  name: 'comp',
  /*  template: `
    <div :style="style">
      <slot></slot>
    </div>
  `, */
  render (createElement) {
    return createElement('div', {
      style: this.style
      /* on: {
        click: () => { this.$emit('click') }
      } */
    }, [
      this.$slots.header,
      this.prop1
    ])
  },
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
  el: '#root',
  data () {
    return {
      value: '123'
    }
  },
  mounted () {
  },
  methods: {
    handleClick () {
      console.log('clicked')
    }
  },
  /* template: `
    <comp-one ref="comp">
      <span ref="span">{{value}}</span>
    </comp-one>
  `, */
  render (createElement) {
    return createElement(
      'comp-one',
      {
        ref: 'comp',
        props: {
          prop1: this.value
        },
        /* on: {
          click: this.handleClick
        }, */
        nativeOn: {
          click: this.handleClick
        }
      },
      [
        createElement('span', {
          ref: 'span',
          slot: 'header',
          attrs: {
            id: 'testId'
          },
          domProps: {
            innerHTML: '<span>aaa</span>'
          }
        }, this.value)
      ])
  }
})
