<template>
  <view-box>
    <div class="content-wrapper user-info">
      <group>
        <cell title="我的身份" is-link value="老师"></cell>
      </group>
      <group title="我的孩子">
        <cell title="张三" is-link value="小一班">
        </cell>
      </group>
    </div>
    <div class="btn-wrap">
      <x-button type="warn" @click.native="loginOut">退出登录</x-button>
    </div>
  </view-box>
</template>
<script>
import { Group, Cell, XButton } from 'vux'
import { removeToken } from '@/utils/auth'
import { getInfo } from '@/api/user'
export default {
  components: {
    Group, Cell, XButton
  },
  data () {
    return {

    }
  },
  methods: {
    loginOut () {
      this.$vux.confirm.show({
        title: '提示',
        content: '确定要退出登录吗？',
        onConfirm: () => {
          removeToken()
          this.$router.push({ name: 'login' })
        }
      })

    }
  },
  mounted () {
    getInfo()
  }
}
</script>
<style lang="less" scoped>
.user-info {
  position: relative;
  padding-bottom: 100px;
}
.btn-wrap {
  width: 100%;
  padding: 20px;
  height: 80px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
</style>
