import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    firstName: 'Auu',
    lastName: 'yu',
    number: 0,
    fullName: '',
    obj: {
      a: 0
    }
  },
  template: `
  <div>
    <p>Name: {{name}}</p>
    <p>Name: {{getName()}}</p>
    <p>Number: {{number}}</p>
    <p>FullNname: {{fullName}}</p>
    <p><input type='text' v-model="number"></p>
    <p>FirstName<input type='text' v-model="firstName"></p>
    <p>LastName<input type='text' v-model="lastName"></p>
    <p>Obj.a<input type='text' v-model="obj.a"></p>
  </div>
  `,
  watch: {
    /* firstName (newName, oldName) {
      this.fullName = newName + ' ' + this.lastName
    } */
    'obj.a': {
      handler () {
        console.log('obj.a changed')
      },
      immediate: true
      // deep: true
    }
  },
  computed: {
    /* name () {
      console.log('new name')
      return this.firstName + ' ' + this.lastName
    } */
    name: {
      get () {
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.firstName = names[1]
      }
    }
  },
  methods: {
    getName () {
      console.log('getName invoked')
      return this.firstName + ' ' + this.lastName
    }
  }
})
