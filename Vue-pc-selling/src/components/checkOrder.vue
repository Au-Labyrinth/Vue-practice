<template>
    <div>
        <this-dialog :is-show="isShowCheckDialog" @on-close="checkStatus"> 
            请检查你的支付状态!
            <div class="button" @click="checkStatus">支付成功</div>
            <div class="button" @click="checkStatus">支付失败</div>
        </this-dialog>
        <this-dialog :is-show="isShowSuccessDialog" @on-close="toOrderList">购买成功!</this-dialog>
        <this-dialog :is-show="isShowFailDialog" @on-close='toOrderList'>购买失败!</this-dialog @click="">
    </div>
</template>

<script>
    import axios from 'axios'
    import Dialog from './base/dialog'
    export default {
        components: {
            thisDialog: Dialog
        },
        props: {
            isShowCheckDialog: {
                type: Boolean,
                default: false
            },
            orderId: {
                type: [String, Number]
            }
        },
        data () {
            return {
                isShowSuccessDialog: false,
                isShowFailDialog: false
            }
        },
        methods: {
            checkStatus () {
                axios.post('/api/checkOrder', {
                    orderId: this.orderId
                })
                .then((response) => {
                    this.isShowSuccessDialog = true
                    this.$emit('on-close-check-dialog')
                }, (err) => {
                    this.isShowFailDialog = true
                    this.$emit('on-close-check-dialog')
                })
            },
            closeDtoOrderListalog () {
                this.isShowSuccessDialog = false
                this.isShowFailDialog = false
            },
            toOrderList () {
                this.$router.push({path: '/orderList'})
            }
        }
    }
</script>

<style scoped>

</style>
