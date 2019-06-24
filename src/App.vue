<template>
  <div id="app" style="height:100%;color:#333;">
    <x-header :left-options="{backText: ''}" v-if="!isLogin" style="background:#fff;">
      {{title}}
      <a slot="right" href="javascript:;" @click="rightClick">{{rightTitle}}</a>
    </x-header>
    <view-box :style="{height:calcHeight}">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </view-box>
  </div>
</template>

<script>
import { XHeader, ViewBox } from 'vux'
export default {
  name: 'app',
  components: {
    XHeader, ViewBox
  },
  data () {
    return {
      transitionName: 'slide-right',
      title: '',
      isLogin: false,
      rightTitle: '',
      rightPath: ''
    }
  },
  computed: {
    calcHeight () {
      return this.isLogin ? '100%' : 'calc(100% - 46px)'
    }
  },
  methods: {
    rightClick () {
      this.rightPath && this.$router.push({ name: this.rightPath })
    }
  },
  watch: {
    '$route' (to, from) {
      const toDepth = to.meta.index
      const fromDepth = from.meta.index
      this.isLogin = to.path === '/login'
      this.title = to.meta.title ? to.meta.title : ''
      this.rightTitle = to.meta.rightTitle ? to.meta.rightTitle : ''
      this.rightPath = to.meta.rightPath ? to.meta.rightPath : ''
      this.transitionName = toDepth < fromDepth ? 'vux-pop-out' : 'vux-pop-in'
      this.$vux.loading.hide()
    }
  }
}
</script>

<style lang="less">
@import "~vux/src/styles/reset.less";
html,
body {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
.vux-header {
  position: fixed;
  left: 0;
  top: 0;
  z-index: 100;
  width: 100%;
  border-bottom: 1px solid #eaeaea;
  div.vux-header-left {
    .left-arrow {
      &:before {
        border-color: #666;
      }
    }
  }
  h1.vux-header-title {
    color: #333;
  }
  div.vux-header-right a {
    color: #666;
  }
}

.weui-tab .weui-tab__panel {
  padding-bottom: 0;
}
.vux-pop-out-enter-active,
.vux-pop-out-leave-active,
.vux-pop-in-enter-active,
.vux-pop-in-leave-active {
  will-change: transform;
  transition: all 0.5s;
  min-height: 100%;
  top: 0;
  left: 0;
  position: absolute;
  backface-visibility: hidden;
  perspective: 1000;
}
.vux-pop-out-enter {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
.vux-pop-out-leave-active {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-enter {
  opacity: 0;
  transform: translate3d(100%, 0, 0);
}
.vux-pop-in-leave-active {
  opacity: 0;
  transform: translate3d(-100%, 0, 0);
}
body {
  background-color: #fff;
}
</style>
