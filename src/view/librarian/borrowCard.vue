<template>
  <div class="content-wrapper" style="padding-bottom:100px;">
    <section class="clearfix info">
      <div class="fl card-box">
        <p class="card-number">{{query.borrowNo}}</p>
        <p>借阅证号</p>
      </div>
      <div class="fr info-box">
        <p class="name">邓一浩</p>
        <p>小一班</p>
      </div>
    </section>
    <section style="padding:20px;">
      <ul class="borrow-list">
        <li @click="borrowing" v-for="item in borrowLen">
          <svg-icon icon-class="scan"></svg-icon>
          <span>点击借书</span>
        </li>
        <li v-for="item in borrowedList" :key="item.id" class="borrowed" @click="returnBook(item)">
          <span>{{item.bookName}}</span>
        </li>
      </ul>
    </section>
    <div class="btn-wrap">
      <x-button type="primary" @click.native="$router.push({name:'borrowing'})">下一位借阅</x-button>
    </div>
    <div v-transfer-dom>
      <confirm v-model="showConfirm" title="图书信息" @on-confirm="onConfirm" @on-show="onShow">
        <group label-width="3em" label-align="left">
          <x-input title="书名" v-model="query.bookName"></x-input>
          <x-input title="条形码" type="number" v-model="query.bookCode"></x-input>
          <!-- <x-input title="数量" type="number" v-model="query.stockNum"></x-input> -->
        </group>
      </confirm>
    </div>
  </div>
</template>
<script>
import { Confirm, Group, XInput, TransferDomDirective as TransferDom, XButton } from 'vux'
import { borrowingBooks, bookUsed, returnBook } from '@/api/borrowing'
export default {
  components: {
    XButton, Confirm, XInput, Group
  },
  directives: {
    TransferDom
  },
  computed: {
    borrowLen () {
      if (this.borrowedList.length >= 2) {
        return 0
      } else {
        if (!this.borrowedList.length) {
          return 2
        } else {
          return 1
        }
      }
    }
  },
  data () {
    return {
      showConfirm: false,
      carNumber: '',
      query: {
        bookName: "",
        borrowNo: '',
        bookCode: '',
        borrowType: 1,//1学生 2班级
      },
      query2: {
        borrowType: 1,
        borrowNo: ''
      },
      borrowedList: []
    }
  },
  methods: {
    borrowing () {
      this.showConfirm = true
    },
    onConfirm () {
      borrowingBooks(this.query).then(data => {
        this.$vux.toast.show({
          text: data,
          type: 'success'
        })
      })
    },
    onShow () {

    },
    getBorrowed () {
      bookUsed(this.query2).then((data) => {
        this.borrowedList = data
      })
    },
    returnBook (item) {
      let dataOut = {
        bookName: item.bookName,
        borrowNo: item.borrowNo,
        status: item.status,
        borrowType: item.borrowType
      }
      this.$vux.confirm.show({
        title: '提示',
        content: '确定归还此书吗？',
        onCancel: () => { },
        onConfirm: () => {
          returnBook(dataOut).then(() => {
            this.$vux.toast.show({
              text: data,
              type: 'success'
            })
            this.getBorrowed()
          })
        }
      })
    }
  },
  mounted () {
    this.query.borrowNo = this.query2.borrowNo = this.$route.query.borrowCode
    this.getBorrowed()
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
  .borrowed {
    background: #e6a23c;
    color: #fff;
  }
}
.btn-wrap {
  width: 100%;
  padding: 20px;
  height: 80px;
  box-sizing: border-box;
  position: fixed;
  background: #fff;
  left: 0;
  bottom: 0;
}
</style>