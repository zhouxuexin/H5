<template>
  <view-box>
    <swiper :list="imgList" auto style="width:100%;margin:0 auto;" :aspect-ratio="0.324" :loop="true"
      dots-position="center"></swiper>
    <div class="menu-box">
      <grid :cols="3" :show-lr-borders="true" :show-vertical-dividers="true">
        <grid-item :link="item.url" v-for="(item,index) in menuList" :key="item.id">
          <div class="icon-box" :style="{'background-color':bg_colors[index]}">
            <svg-icon :icon-class="item.iconClass" />
          </div>
          <div class="title">{{item.name}}</div>
        </grid-item>
        <grid-item link="/libraryManagement">
          <div class="icon-box" style="background-color:#7bcc49">
            <svg-icon icon-class="todo" />
          </div>
          <div class="title">图书管理</div>
        </grid-item>
        <grid-item link="/storageBooks">
          <div class="icon-box" style="background-color:#7bcc49">
            <svg-icon icon-class="book" />
          </div>
          <div class="title">图书入库</div>
        </grid-item>
        <grid-item link="/borrowing">
          <div class="icon-box" style="background-color:#7bcc49">
            <svg-icon icon-class="book" />
          </div>
          <div class="title">图书借阅</div>
        </grid-item>
        <!-- <grid-item link="/todoList">
          <div class="icon-box" style="background-color:#fdb748">
            <svg-icon icon-class="todo" />
          </div>
          <div class="title">待办事项</div>
        </grid-item>
        <grid-item link="/healthGuide">
          <div class="icon-box" style="background-color:#7bcc49">
            <svg-icon icon-class="analysis" />
          </div>
          <div class="title">健康指导</div>
        </grid-item>
        <grid-item link="/healthReport">
          <div class="icon-box" style="background-color:#73a7f4">
            <svg-icon icon-class="form" />
          </div>
          <div class="title">健康报表</div>
        </grid-item>
        <grid-item link="">
          <div class="icon-box" style="background-color:#e9878e">
            <svg-icon icon-class="illness" />
          </div>
          <div class="title">病假跟踪</div>
        </grid-item>
        <grid-item link="/dailyExamination">
          <div class="icon-box" style="background-color:#b68ce4">
            <svg-icon icon-class="temperature" />
          </div>
          <div class="title">每日晨检</div>
        </grid-item>
        <grid-item link="rollCall">
          <div class="icon-box" style="background-color:#fdb748">
            <svg-icon icon-class="number" />
          </div>
          <div class="title">班级点名</div>
        </grid-item>
        <grid-item link="/healthCard">
          <div class="icon-box" style="background-color:#7bcc49">
            <svg-icon icon-class="card" />
          </div>
          <div class="title">健康卡</div>
        </grid-item>
        <grid-item link="/myChild">
          <div class="icon-box" style="background-color:#fe9290">
            <svg-icon icon-class="child" />
          </div>
          <div class="title">我的孩子</div>
        </grid-item>
        <grid-item link="/userInfo">
          <div class="icon-box" style="background-color:#6884d1">
            <svg-icon icon-class="mine" />
          </div>
          <div class="title">我的资料</div>
        </grid-item> -->
      </grid>
    </div>
  </view-box>
</template>

<script>

import { Grid, GridItem, Swiper } from 'vux'
import store from '@/store'
export default {
  name: 'Home',
  components: {
    Grid,
    GridItem,
    Swiper,

  },
  computed: {
    menuList () {
      return store.getters.menus
    }
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      bg_colors: ['#fdb748', '#73a7f4', '#e9878e', '#b68ce4', '#fdb748', '#7bcc49', '#fe9290', '#6884d1', '#7bcc49', '#fdb748', '#73a7f4', '#e9878e', '#b68ce4', '#fdb748', '#7bcc49',],
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
      ],

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.menu-box {
  .weui-grid {
    text-align: center;
    //  color:#666;
  }
  .icon-box {
    display: inline-block;
    border-radius: 50%;
    width: 50px;
    height: 50px;
    font-size: 30px;
    text-align: center;
    line-height: 50px;
    vertical-align: middle;
    margin-bottom: 10px;
    svg {
      color: #fff;
    }
  }
  .title {
    font-size: 14px;
    color: #666;
  }
}
</style>
