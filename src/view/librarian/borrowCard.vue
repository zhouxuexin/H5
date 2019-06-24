<template>
  <div class="content-wrapper" style="padding-bottom:100px;">
    <section class="clearfix info">
      <div class="fl card-box">
        <p class="card-number">{{carNumber}}</p>
        <p>借阅证号</p>
      </div>
      <div class="fr info-box">
        <p class="name">邓一浩</p>
        <p>小一班</p>
      </div>
    </section>
    <section style="padding:20px;">
      <ul class="borrow-list">
        <li>
          <svg-icon icon-class="scan"></svg-icon>
          <span>点击借书</span>
        </li>
        <li>
          <svg-icon icon-class="scan"></svg-icon>
          <span>点击借书</span>
        </li>
      </ul>
    </section>
    <div class="btn-wrap">
      <x-button type="primary" @click.native="$router.push({name:'borrowing'})">下一位借阅</x-button>
    </div>
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
.info {
  text-align: center;
  height: 100px;
  border-bottom: 1px solid #eaeaea;
  color: #666;
  .card-box {
    text-align: center;
    border-right: 1px solid #eaeaea;
    height: 100%;
    width: 70%;
  }
  .card-number {
    font-size: 40px;
    line-height: 60px;
    color: #f56c6c;
  }
  .info-box {
    .name {
      border-bottom: 1px solid #eaeaea;
    }
    width: 30%;
    p {
      height: 50px;
      line-height: 50px;
      color: #333;
      font-size: 18px;
    }
  }
}
.borrow-list {
  width: 100%;
  li {
    height: 120px;
    line-height: 120px;
    // background: #ccc;
    text-align: center;
    margin-bottom: 20px;
    border-radius: 10px;
    font-size: 24px;
    color: #666;
    border: 1px dashed #ccc;
    overflow: hidden;
  }
}
.btn-wrap {
  width: 100%;
  padding: 20px;
  height: 80px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>