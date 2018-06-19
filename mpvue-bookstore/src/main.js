import Vue from 'vue'
import App from './App'

Vue.config.productTip = false

const app = new Vue(App)
app.$mount()

export default{
  config: {
    pages: ['^pages/books/main'],
    'window': {
      'backgroundTextStyle': 'light',
      'navigationBarBackgroundColor': '#20B2AA',
      'navigationBarTitleText': 'Mpvue',
      'navigationBarTextStyle': 'light'
    },
    'tabBar': {
      selectedColor: '#20B2AA',
      list: [{
        pagePath: 'pages/books/main',
        text: '图书',
        iconPath: 'static/img/book.png',
        selectedIconPath: 'static/img/book-active.png'
      }, {
        pagePath: 'pages/comments/main',
        text: '评论',
        iconPath: 'static/img/todo.png',
        selectedIconPath: 'static/img/todo-active.png'
      }, {
        pagePath: 'pages/me/main',
        text: '我的',
        iconPath: 'static/img/me.png',
        selectedIconPath: 'static/img/me-active.png'
      }]
    }
  }
}
