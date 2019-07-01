<template>
  <div class="content-wrapper">
    <ul class="borrow-list">
      <li v-for="item in borrowList" :key="item.id">
        <p class="time">{{item.borrowTime}}</p>
        <p class="book-name">{{item.bookName}}</p>
        <span class="type-name red">{{status[item.status]}}</span>
      </li>
    </ul>
  </div>
</template>
<script>
import { XButton } from 'vux'
import { borrowHistory } from '@/api/borrowing'
export default {
  components: {
    XButton
  },
  data () {
    return {
      status: ['借阅中', '已归还', '丢失', '损坏'],
      query: {
        borrowType: 1,
        borrowNo: '',
        pageSize: 40,
        prePage: 1,
        pages: 1
      },
      borrowList: []
    }
  },
  methods: {
    getDetail () {
      borrowHistory(this.query).then((data) => {
        this.borrowList = data.list
      })
    }
  },
  mounted () {
    this.query.borrowNo = this.$route.query.borrowCode
    this.getDetail()
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