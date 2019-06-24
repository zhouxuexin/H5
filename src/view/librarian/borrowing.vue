<template>
  <div class="content-wrapper" style="height:100%;">
    <div class="flex_box">
      <section class="school_name">中国人民大学幼儿园</section>
      <section class="card_num">
        <div class="number">
          <span v-for="item in cardNumber">{{item}}</span>
        </div>
      </section>
      <section class="keyword">
        <grid :cols="3" :show-lr-borders="true" :show-vertical-dividers="true">
          <grid-item v-for="item in numberList" :key="item" @click.native="setNumber(item)"><span
              style="padding:2px;">{{item}}</span></grid-item>
          <grid-item @click.native="cardNumber.pop()">删除</grid-item>
          <grid-item class="btn_item" @click.native="$router.push({name:'borrowCardSearch'})">
            <svg-icon icon-class="certificates"></svg-icon>
            <span>借阅证管理</span>
          </grid-item>
          <grid-item class="btn_item" @click.native="$router.push({name:'bookSearch'})">
            <svg-icon icon-class="search"></svg-icon>
            <span>图书查找</span>
          </grid-item>
          <grid-item class="btn_item" @click.native="">
            <svg-icon icon-class="scan"></svg-icon>
            <span>还书</span>
          </grid-item>
        </grid>
      </section>
    </div>
  </div>
</template>
<script>
import { Grid, GridItem } from 'vux'
export default {
  components: {
    Grid, GridItem
  },
  data () {
    return {
      numberList: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0'],
      cardNumber: []
    }
  },
  watch: {
    cardNumber (val) {
      if (val.length === 4) {
        let number = ''
        val.forEach(item => {
          number += item + ''
        })
        this.$router.push({ name: 'borrowCard', params: { number: number } })
      }
    }
  },
  methods: {
    setNumber (item) {
      if (item != '') {
        if (this.cardNumber.length == 4) {
        } else {
          this.cardNumber.push(item)
        }
      }

    }
  }
}
</script>
<style lang="less" scoped>
.flex_box {
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .school_name {
    height: 100px;
    background: #ccc;
    text-align: center;
    line-height: 100px;
    font-size: 20px;
    color: #fff;
    background: rgb(253, 183, 72);
  }
  .card_num {
    padding: 20px;
    .number {
      background: #f8f8f9;
      width: 100%;
      height: 80px;
      border-radius: 10px;
      text-align: center;
      line-height: 80px;
      // font-weight: bold;
      font-size: 40px;
      span {
        padding: 0 4px;
      }
    }
  }
  .keyword {
    .weui-grid {
      text-align: center;
      color: #666;
      font-size: 16px;
      // padding: 30px 10px;
    }
    .btn_item {
      font-size: 14px;
      color: #f76260;
      padding: 15px 0;
      background: #fdb7482b;
      svg {
        font-size: 16px;
      }
    }
  }
}
</style>
