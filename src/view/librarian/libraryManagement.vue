<template>
  <div class="content-wrapper" style="height:100%;padding-top:44px;">
    <tab style="position:absolute;left:0;top:0;height:44px;width:100%;z-index:100;background:#fff;">
      <tab-item selected @on-item-click="type='totle'">全部({{total}})</tab-item>
      <tab-item @on-item-click="type='lendNum'">借出({{lendNum}})</tab-item>
      <tab-item @on-item-click="type='stockNum'">在库({{stockNum}})</tab-item>
      <tab-item @on-item-click="type='nouseNum'">丢/损({{nouseNum}})</tab-item>
    </tab>
    <section style="height:100%">
      <pull-to @infinite-scroll="getMore">
        <ul class="books-list">
          <li class="clearfix" v-for="item in computedList">
            <div class="fl">
              <p class="book-name">{{item.name}}</p>
              <p class="borrow-time">{{item.bookCode}}</p>
            </div>
            <div class="fr">
              <p class="student-name">{{item[type]}}本</p>
            </div>
          </li>
        </ul>
        <div class="loading-bar">
          <span v-if="haveMore">加载中...</span>
          <span v-else>全部加载完毕</span>
        </div>
      </pull-to>

    </section>
    <!-- <ul class="books-list">
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
    </ul> -->
  </div>
</template>
<script>
import { Tab, TabItem } from 'vux'
import { bookTotal, bookStatis } from '@/api/borrowing'
import PullTo from 'vue-pull-to'
export default {
  components: {
    Tab,
    TabItem,
    PullTo
  },
  data () {
    return {
      tabIndex: 1,
      type: 'total',
      query: {
        pageSize: 40,
        prePage: 1,
        pages: 1
      },
      tableList: [],
      haveMore: false,
      total: 0,
      lendNum: 0,
      nouseNum: 0,
      stockNum: 0
    }
  },
  computed: {
    //根据条件筛选列表
    computedList () {
      if (this.tableList.length) {
        let type = this.type
        return this.tableList.filter(item => {
          return item[type] > 0
        })
      } else {
        return []
      }
    }
  },
  methods: {
    getList () {
      bookStatis(this.query).then((data) => {
        data.list && data.list.length && data.list.forEach(item => {
          item.totle = 0
          item.lendNum && (item.totle += +item.lendNum)
          item.nouseNum && (item.totle += +item.nouseNum)
          item.stockNum && (item.totle += +item.stockNum)
        })
        this.tableList = data.list || []
        this.haveMore = Boolean(data.nextPage)
        this.type = "totle"//初始化页面时触发computed过滤列表
      })
    },
    getTotal () {
      bookTotal().then((data) => {
        this.total = data.totle || 0
        this.lendNum = data.lendNum || 0
        this.nouseNum = data.noUserNum || 0
        this.stockNum = data.stockNum || 0
      })
    },
    getMore (loaded) {
      this.query.prePage++
      this.haveMore && bookStatis(this.query).then((data) => {
        data.list && data.list.length && data.list.forEach(item => {
          item.totle = 0
          item.lendNum && (item.totle += +item.lendNum)
          item.nouseNum && (item.totle += +item.nouseNum)
          item.stockNum && (item.totle += +item.stockNum)
        })
        this.haveMore = Boolean(data.nextPage)
        this.tableList = this.tableList.concat(data.list)
        loaded && loaded('done')
      })
      !this.haveMore && loaded && loaded('done')
    },

  },
  mounted () {
    this.getTotal()
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
.loading-bar {
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #999;
}
</style>
