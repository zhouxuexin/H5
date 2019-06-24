<template>
  <div class="content-wrapper">
    <tab>
      <tab-item selected @on-item-click="tabIndex=1">全部(100)</tab-item>
      <tab-item @on-item-click="tabIndex=2">借出(40)</tab-item>
      <tab-item @on-item-click="tabIndex=3">在库(43)</tab-item>
      <tab-item @on-item-click="tabIndex=4">未还(15)</tab-item>
      <tab-item @on-item-click="tabIndex=5">丢/损(2)</tab-item>
    </tab>
    <ul class="books-list" v-if="tabIndex!=4">
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
        </div>
        <div class="fr">
          <p class="student-name">10本</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
        </div>
        <div class="fr">
          <p class="student-name">10本</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
        </div>
        <div class="fr">
          <p class="student-name">10本</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
        </div>
        <div class="fr">
          <p class="student-name">10本</p>
        </div>
      </li>
    </ul>
    <ul class="books-list" v-if="tabIndex==4">
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
          <p class="borrow-time">到期时间 2019-06-24</p>
        </div>
        <div class="fr">
          <p class="student-name">王静</p>
          <p class="borrowed-time">2天</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
          <p class="borrow-time">到期时间 2019-06-24</p>
        </div>
        <div class="fr">
          <p class="student-name">王静</p>
          <p class="borrowed-time">2天</p>
        </div>
      </li>
      <li class="clearfix">
        <div class="fl">
          <p class="book-name">安徒生童话</p>
          <p class="borrow-time">到期时间 2019-06-24</p>
        </div>
        <div class="fr">
          <p class="student-name">王静</p>
          <p class="borrowed-time">2天</p>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import { bookStatis } from '@/api/borrowing'
export default {
  components: {
    Tab,
    TabItem
  },
  data () {
    return {
      tabIndex: 1
    }
  },
  methods: {
    getList () {
      bookStatis().then((data) => {
        console.log(data)
      })
    }
  },
  mounted () {
    this.getList()
  }
}
</script>
<style lang="less" scoped>
.books-list {
  padding: 10px;
  li {
    padding: 10px;
    border-bottom: 1px solid #eaeaea;
    line-height: 30px;
    color: #666;
    .book-name {
      font-size: 18px;
    }
    .borrow-time {
      color: #999;
    }
    .student-name {
      font-size: 18px;
    }
    .borrowed-time {
      color: #f56c6c;
    }
  }
}
</style>
