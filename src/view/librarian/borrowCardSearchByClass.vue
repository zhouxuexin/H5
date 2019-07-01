<template>
  <div class="content-wrapper">
    <tab>
      <tab-item selected @on-item-click="tabIndex=1">已开通</tab-item>
      <tab-item @on-item-click="tabIndex=2">未开通</tab-item>
    </tab>
    <search v-model="value" position="absolute" placeholder="请输入小朋友姓名" auto-scroll-to-top
      @on-submit="onSubmit" ref="search"></search>
    <x-table :cell-bordered="false" class="table">
      <thead>
        <tr>
          <th>姓名</th>
          <th>卡号</th>
          <th>借书数量</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>王艺霖</td>
          <td>123456789</td>
          <td>4</td>
          <td>
            <x-button type="primary" mini @click.native="$router.push({name:'borrowCard',query:{borrowCode:'123456789'}})">借阅</x-button>
          </td>
        </tr>

      </tbody>
    </x-table>
  </div>
</template>
<script>
import { Tab, TabItem, Search, XTable, XButton } from 'vux'
export default {
  components: {
    Search, XTable, Tab, TabItem, XButton
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
.table {
  th {
    color: #666;
    padding: 10px;
    &:nth-child(1) {
      // width: 60%;
      text-align: left;
    }
  }
  td {
    padding: 10px;
    &:nth-child(1) {
      // width: 60%;
      text-align: left;
    }
    &:nth-child(2) {
      color: #f56c6c;
    }
    &:nth-child(3) {
      color: #67c23a;
    }
  }
}
</style> 