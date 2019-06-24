<template>
  <div class="content-wrapper">
    <ul class="borrow-list">
      <li>
        <p class="time">2019-05-03 14:32</p>
        <p class="book-name">小马过河</p>
        <span class="type-name red">报损</span>
      </li>
      <li>
        <p class="time">2019-05-03 14:32</p>
        <p class="book-name">小马过河</p>
        <span class="type-name">借书</span>
      </li>
      <li>
        <p class="time">2019-05-03 14:32</p>
        <p class="book-name">小马过河</p>
        <span class="type-name blue">还书</span>
      </li>
      <li>
        <p class="time">2019-05-03 14:32</p>
        <p class="book-name">小马过河</p>
        <span class="type-name">借书</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { XButton } from 'vux'
export default {
  components: {
    XButton
  },
  data () {
    return {
      carNumber: ''
    }
  },
  mounted () {
    this.carNumber = this.$route.params.number
  }
}
</script>
<style lang="less" scoped>
.borrow-list {
  li {
    padding: 10px 50px 10px 10px;
    position: relative;
    border-bottom: 1px solid #eaeaea;
    .time {
      color: #333;
    }
    .book-name {
      font-size: 18px;
      color: #666;
      line-height: 36px;
    }
    .type-name {
      position: absolute;
      right: 10px;
      top: 10px;
      color: #67c23a;
      &.red {
        color: #f56c6c;
      }
      &.blue {
        color: #409eff;
      }
    }
  }
}
</style>