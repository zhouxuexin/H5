<template>
  <div class="content-wrapper">
    <div class="card-wrap">
      <button-tab v-model="index" style="padding:10px;">
        <button-tab-item @on-item-click="tab">我的健康卡</button-tab-item>
        <button-tab-item @on-item-click="tab">本班健康卡</button-tab-item>
      </button-tab>
      <template v-if="index == 0">
        <x-table class="table" :cell-bordered="false">
          <thead>
            <tr>
              <th>姓名（卡号）</th>
              <th>开通时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>季天一(17192212312)</td>
              <td>2018-08-07</td>
            </tr>
            <tr>
              <td>刘自力(171922342312)</td>
              <td>2018-08-07</td>
            </tr>
            <tr>
              <td>刘自力(171922342312)</td>
              <td>2018-08-07</td>
            </tr>
            <tr>
              <td>刘自力(171922342312)</td>
              <td>2018-08-07</td>
            </tr>
            <tr>
              <td>刘自力(171922342312)</td>
              <td>2018-08-07</td>
            </tr>
            <tr>
              <td>刘自力(171922342312)</td>
              <td>2018-08-07</td>
            </tr>
          </tbody>
        </x-table>
      </template>
      <template v-else>
        <x-table class="table" :cell-bordered="false">
          <thead>
            <tr>
              <th>姓名</th>
              <th>关注微信时间</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>季天一</td>
              <td>2018-08-07</td>
            </tr>
            <tr>
              <td>刘自力</td>
              <td>未关注微信</td>
            </tr>
            <tr>
              <td>李小龙</td>
              <td>未关注微信</td>
            </tr>
            <tr>
              <td>王大书</td>
              <td>未关注微信</td>
            </tr>
            <tr>
              <td>秦奋</td>
              <td>未关注微信</td>
            </tr>
            <tr>
              <td>刘洋</td>
              <td>未关注微信</td>
            </tr>
          </tbody>
        </x-table>
      </template>

    </div>
    <div class="btn-wrap">
      <x-button type="primary" v-if="index==0">绑定健康卡</x-button>
      <x-button type="primary" v-else>通知家长关注微信</x-button>
    </div>
  </div>
</template>
<script>
import { XButton, XTable, ButtonTab, ButtonTabItem } from 'vux'
export default {
  components: {
    XButton, ButtonTab, ButtonTabItem, XTable
  },
  data () {
    return {
      index: 0
    }
  },
  methods: {
    tab (value) {
      console.log(value)
    }
  }
}
</script>
<style lang="less" scoped>
.btn-wrap {
  width: 100%;
  padding: 20px;
  height: 80px;
  box-sizing: border-box;
  position: absolute;
  left: 0;
  bottom: 0;
}
.card-wrap {
  position: relative;
  padding-bottom: 100px;

  .table {
    td,
    th {
      color: #666;
      text-align: left;
      padding: 5px 15px;
      width: 50%;
      &:nth-of-type(even) {
        text-align: right;
      }
    }
  }
}
</style>
