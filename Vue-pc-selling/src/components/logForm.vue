<template>
  <div class="login-form">
    <div class="g-form">
      <div class="g-form-line">
        <span class="g-form-label">用户名：</span>
        <div class="g-form-input">
          <input type="text" v-model="usernameModel" placeholder="请输入用户名">
        </div>
        <span class="g-form-error">{{ userErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <span class="g-form-label">密码：</span>
        <div class="g-form-input">
          <input type="password" v-model="passwordModel" placeholder="请输入密码">
        </div>
        <span class="g-form-error">{{ passwordErrors.errorText }}</span>
      </div>
      <div class="g-form-line">
        <div class="g-form-btn">
          <a class="button" @click="onLogin">登录</a> <span>{{ errorText }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {
        data () {
            return {
                usernameModel: '',
                passwordModel: '',
                errorText: ''
            }
        },
        computed: {
            userErrors () {
                let errorText, status
                if (!/@/g.test(this.usernameModel)) {
                    status = false
                    errorText = '不把包含@'
                } else {
                    status = true
                    errorText = ''
                }
                if(!this.userFlag) {
                    errorText = ''
                    this.userFlag = true
                }
                return {
                    status,
                    errorText
                }
            },
            passwordErrors () {
                let errorText, status
                if (!/^\w{1,6}$/g.test(this.passwordModel)) {
                    status = false
                    errorText = '密码长度应为1~6位'
                } else {
                    status = true
                    errorText = ''
                }
                if(!this.passwordFlag) {
                    errorText = ''
                    this.passwordFlag = true
                }
                return {
                    status,
                    errorText
                }
            }
        },
        methods: {
            onLogin () {
                if(!this.userErrors.status || !this.passwordErrors.status) {
                    this.errorText = '部分选项未通过'
                } else {
                    this.errorText = ''
                    axios.post('api/login')
                    .then((response) => {
                        this.$emit('has-log', response.data)
                    })
                    .catch((error) => {
                        console.log(error)
                    })
                }
            }
        }
    }
</script>

<style scoped>
    .g-form-line { padding: 15px 0;}
    .g-form-label {
        width: 100px;
        font-size: 16px;
        display: inline-block;
    }
    .g-form-input{display: inline-block;}
    .g-form-input input {
        height: 30px;
        width: 200px;
        line-height: 30px;
        vertical-align: middle;
        padding: 0 10px;
        border: 1px solid #ccc;
    }
    .g-form-label {
        width: 100px;
        font-size: 16px;
        display: inline-block;
    }
    .g-form-btn{ padding-left: 105px;}
    .button {
        background: #4fc08d;
        color: #fff;
        display: inline-block;
        padding: 10px 20px;
        cursor: pointer;
    }
    .g-form-error {
        color: red;
        padding-left: 15px;
    }

</style>
