<template>
  <div class="content-wrapper">
    <div class="app-content">
      <div class="logo">
        <svg-icon icon-class="logo" class="logo-icon" />
      </div>
      <h3 class="title">欢迎登录智能幼儿园</h3>
      <group label-width="4em" label-margin-right="2em" label-align="right">
        <x-input title="用户名" required v-model="dataOut.userName" ref="user" :is-type="UserName"
          placeholder="请输入用户名" class="user" @on-change="changeInput">
        </x-input>
        <x-input title="密码" required type="password" :is-type="Password" ref="psd" v-model="dataOut.password"
          placeholder="请输入密码" @on-change="changeInput">
        </x-input>
      </group>
      <x-button class="login-btn" type="primary" @click.native="onSubmit" :disabled="disabled">登录</x-button>
    </div>
  </div>
</template>
<script>
import { Group, XButton, XInput } from 'vux'
import { login } from '@/api/user'
import { setToken } from '@/utils/auth'
export default {
  components: {
    Group, XButton, XInput
  },
  data () {
    return {
      disabled: true,
      UserName: (value) => {
        return {
          valid: value !== '',
          msg: '请输入用户名'
        }
      },
      Password: (value) => {
        return {
          valid: value !== '',
          msg: '请输入密码'
        }
      },
      dataOut: {
        userName: '',
        password: ''
      },
      redirect: undefined
    }
  },
  watch: {
    $route: {
      handler: function (route) {
        this.redirect = route.query && route.query.redirect
      },
      immediate: true
    }
  },
  methods: {
    changeInput () {
      if (this.$refs.user.valid && this.$refs.psd.valid) {
        this.disabled = false;
      } else {
        this.disabled = true;
      }
    },
    onSubmit (e) {
      if (this.dataOut.userName && this.dataOut.password) {
        // login(this.dataOut).then((data) => {
        //   console.log(data)
        //   setToken(data.token)
        //   this.$router.push({ path: '/' })
        // })
        this.$store.dispatch('user/login', this.dataOut).then(() => {
          this.$router.push({ path: this.redirect || '/' })
        }).catch(() => {
        })
      }

    }
  }
}
</script>
<style lang="less" scoped>
.app-content {
  padding: 20px;
  .logo {
    display: flex;
    justify-content: center;
    text-align: center;
    line-height: 100px;
    color: #1afa29;
    font-size: 100px;
    padding: 20px;
    svg {
      display: inline-block;
    }
  }
  .title {
    color: #666;
    text-align: center;
  }
  .weui-cell {
    padding: 18px 15px;
  }
  .login-btn {
    margin-top: 40px;
  }
  .weui-btn {
    font-size: 20px;
  }
}
</style>
