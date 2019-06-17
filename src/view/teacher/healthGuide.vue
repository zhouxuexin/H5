<template>
  <div class="content-wrapper">
    <swiper :list="imgList" auto style="width:100%;margin:0 auto;" :aspect-ratio="0.324" :loop="true"
      dots-position="center"></swiper>
    <div class="section-title">
      <svg-icon icon-class="calendar"></svg-icon>
      <span>每日健康指导</span>
    </div>
    <x-table class="table">
      <tbody>
        <tr>
          <td>
            <div class="class-name" style="background-color:#f8c218">小班</div>
            <p class="text">宝宝平时怎么来有效防止龋齿？除开刷牙和涑口之一最实际、最有效的办法外，还需要注意不要吃甜食</p>
          </td>
        </tr>
        <tr>
          <td>
            <div class="class-name" style="background-color:#73a7f4">中班</div>
            <p class="text">宝宝平时怎么来有效防止龋齿？除开刷牙和涑口之一最实际、最有效的办法外，还需要注意不要吃甜食</p>
          </td>
        </tr>
        <tr>
          <td>
            <div class="class-name" style="background-color:#7bcc49">大班</div>
            <p class="text">宝宝平时怎么来有效防止龋齿？除开刷牙和涑口之一最实际、最有效的办法外，还需要注意不要吃甜食</p>
          </td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
import { Swiper, XTable } from 'vux'
export default {
  components: {
    Swiper,
    XTable,
  },
  data () {
    return {
      imgList: [
        {
          url: 'javascript:',
          img: './static/WechatIMG1.jpeg',
          title: ''
        },
        {
          url: 'javascript:',
          img: './static/WechatIMG2.jpeg',
          title: ''
        },
        {
          url: 'javascript:',
          img: './static/WechatIMG3.jpeg',
          title: ''
        }
      ]
    }
  }
}
</script>
<style lang="less" scoped>
.section-title {
  line-height: 32px;
  color: #666;
  font-size: 16px;
  padding: 10px;
  svg {
    font-size: 20px;
    vertical-align: middle;
    color: #333;
    margin-right: 5px;
  }
}
.table {
  td {
    padding: 10px;
    overflow: hidden;
    .class-name {
      float: left;
      border-radius: 50%;
      width: 60px;
      height: 60px;
      text-align: center;
      line-height: 60px;
      background: #ccc;
      margin-right: 10px;
      font-size: 16px;
      color: #fff;
    }
    .text {
      display: -webkit-box;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      -webkit-box-orient: vertical;
      overflow: hidden;
      color: #333;
      line-height: 28px;
    }
  }
}
</style>
