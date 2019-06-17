<template>
  <view-box>
    <div class="content-wrapper roll-call">
      <group>
        <cell title="上次点名" value="未点名" @click.native=""></cell>
        <cell title="出勤人数/总人数" @click.native="" value="23/26"></cell>
      </group>
      <group title="缺勤小朋友名单">
        <cell title="张三" value="请假"></cell>
        <cell title="李四" value="生病"></cell>
        <cell title="王五" value="请假"></cell>
      </group>
    </div>
    <div class="btn-wrap">
      <x-button type="primary">开始点名</x-button>
    </div>
  </view-box>
</template>
<script>
import { XButton, Cell, Group } from 'vux'
export default {
  components: {
    Cell, Group, XButton
  },
  data () {
    return {

    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.roll-call {
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
