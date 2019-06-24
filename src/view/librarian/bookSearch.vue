<template>
  <div class="content-wrapper">

    <search v-model="value" position="absolute" placeholder="请输入书名" auto-scroll-to-top @on-submit="onSubmit"
      ref="search"></search>
    <tab>
      <tab-item selected @on-item-click="tabIndex=1">借出</tab-item>
      <tab-item @on-item-click="tabIndex=2">在库</tab-item>
      <tab-item @on-item-click="tabIndex=3">损坏/丢失</tab-item>
    </tab>
    <ul class="list">
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">格林童话</p>
          <p>王乐乐 <span>小一班</span></p>
        </div>
        <div class="fr">
          <p>2018-12-12</p>
          <p>8971246871648</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">格林童话</p>
          <p>王乐乐 <span>小一班</span></p>
        </div>
        <div class="fr">
          <p>2018-12-12</p>
          <p>8971246871648</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">格林童话</p>
          <p>王乐乐 <span>小一班</span></p>
        </div>
        <div class="fr">
          <p>2018-12-12</p>
          <p>8971246871648</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Tab, TabItem, Search, } from 'vux'
export default {
  components: {
    Search, Tab, TabItem
  },
  data () {
    return {
      tabIndex: 1
    }
  },
  methods: {
    onSubmit () {
      alert('点击了搜索')
    }
  }
}
</script>
<style lang="less" scoped>
.list {
  li {
    .book-name {
      color: #666;
      font-size: 18px;
    }
    border-bottom: 1px solid #eaeaea;
    padding: 10px;
    color: #999;
  }
}
</style> 