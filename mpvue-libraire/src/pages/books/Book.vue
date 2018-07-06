<template>
  <div>
    <card v-for="book in books" :key="book.id" :book="book"></card>
  </div>
</template>

<script>
import { get } from '@/util'
import Card from '@/components/Card'

export default {
  data () {
    return {
      books: []
    }
  },
  methods: {
    async getList () {
      const books = await get('/weapp/booklist')
      this.books = books.list
    }
  },
  mounted () {
    this.getList()
  },
  components: {
    Card
  }
}
</script>

<style scoped>
</style>
