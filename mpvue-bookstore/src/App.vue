<script>
import { get } from './utils'
import config from './config'
import qcloud from 'wafer2-client-sdk'

export default {
  async created () {
    const res = await get('/weapp/demo')
    console.log(123, res)

    qcloud.setLoginUrl(config.loginUrl)
    qcloud.login({
      success: function (userInfo) {
        console.log('登录成功', userInfo)
      },
      fail: function (err) {
        console.log('登录失败', err)
      }
    })
  }
}
</script>
