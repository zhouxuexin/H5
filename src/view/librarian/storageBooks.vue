<template>
  <div class="content-wrapper">
    <section class="sao-box">
      <div class="sao" @click="showConfirm = !showConfirm">
        <svg-icon icon-class="scan"></svg-icon>
        <span>扫码入库</span>
      </div>
    </section>
    <div v-transfer-dom>
      <confirm v-model="showConfirm" title="图书信息" @on-cancel="onCancel" @on-confirm="onConfirm"
        @on-show="onShow" @on-hide="onHide">
        <group label-width="3em" label-align="left">
          <x-input title="书名" v-model="query.name"></x-input>
          <x-input title="条形码" type="number" v-model="query.bookCode"></x-input>
          <x-input title="数量" type="number" v-model="query.stockNum"></x-input>
        </group>
      </confirm>
    </div>
  </div>
</template>
<script>
import { Confirm, Group, XInput, TransferDomDirective as TransferDom } from 'vux'
import { storageBooks } from '@/api/borrowing'
export default {
  directives: {
    TransferDom
  },
  components: {
    Confirm, XInput, Group
  },
  data () {
    return {
      showConfirm: false,
      query: {
        name: '',
        bookCode: '',
        stockNum: 1
      }
    }
  },
  methods: {
    onConfirm () {
      storageBooks(this.query).then((data) => {
        this.$vux.toast.show({
          text: data,
          type: 'success'
        })
      })
    },
    onCancel () {

    },
    onShow () {
      this.query.name = ''
      this.query.bookCode = ''
    },
    onHide () {

    }

  }
}
</script>
<style lang="less" scoped>
.sao-box {
  padding: 20px;
}
.sao {
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
</style>