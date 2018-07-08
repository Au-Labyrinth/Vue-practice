<template>
  <div class="comment-list">
    <div class="page-title" v-if="comments.length">
      我的评论
    </div>
    <div class="comment"
         v-for="comment in comments"
         :key="comment.id"
         @click="viewCommentDetail(comment)">
         <div class="user">
           <div>
             <img :src="comment.image"
                  class="avatar"
                  mode="aspectFit">
                {{comment.title}}
           </div>
           <div>
             {{comment.location || '未知地点'}}
             <span class="text-primary">--</span>
             {{comment.phone || '未知型号'}}
           </div>
         </div>
         <div class="content">
           {{ comment.comment }}
         </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['comments', 'type'],
  methods: {
    viewCommentDetail (comment) {
      if (this.type === 'user') {
        wx.navigateTo({
          url: '/pages/detail/main?id=' + comment.bookid
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.comment-list{
  background: #eeeeee;
  font-size: 14px;
  .comment{
    background: #ffffff;
    margin-bottom: 10px;
    padding: 5px 20px;
    .content{
      margin: 10px 0;
    }
    .user{
      display: flex;
      justify-content: space-between;
      .avatar{
        width: 20px;
        height: 20px;
        border-radius: 50%;
      }
    }
  }
}
</style>

