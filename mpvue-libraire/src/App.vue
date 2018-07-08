<script>
export default {
  async created () {
    // const res = await get('/weapp/demo')
    /* wx.request({
      url: config.host + '/weapp/demo',
      success: (res) => {
        console.log(res)
      }
    }) */
    console.log('mini progress initialize!')
  }
}
</script>
<style>
.text-footer{
  padding-bottom: 15px;
  text-align: center;
  font-size: 12px;
}
.text-primary{
  font-weight:500;
  color:#20B2AA;
}
.rate-color{
  color: darkorange;
}
.btn{
  width: 100%;
  height: 40px;
  line-height: 40px;
  padding-left: 15px;
  margin-bottom: 10px;
  font-size: 16px;
  color: #ffffff;
  background-color: #20B2AA;
  border-radius: 2px;
}
.btn:active{
  background-color: rgb(28, 160, 151);
}
</style>
