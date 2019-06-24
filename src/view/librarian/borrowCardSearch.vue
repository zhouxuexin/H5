<template>
  <div class="content-wrapper">
    <search v-model="value" position="absolute" placeholder="请输入小朋友姓名" auto-scroll-to-top
      @on-submit="onSubmit" ref="search"></search>
    <x-table :cell-bordered="false" class="table">
      <thead>
        <tr>
          <th>班级</th>
          <th>未开通</th>
          <th>开通</th>
        </tr>
      </thead>
      <tbody>
        <tr @click="$router.push({name:'borrowCardSearchByClass'})">
          <td>小一班</td>
          <td>0</td>
          <td>26</td>
        </tr>
        <tr @click="$router.push({name:'borrowCardSearchByClass'})">
          <td>小二班</td>
          <td>0</td>
          <td>26</td>
        </tr>
        <tr @click="$router.push({name:'borrowCardSearchByClass'})">
          <td>中一班</td>
          <td>0</td>
          <td>26</td>
        </tr>
        <tr @click="$router.push({name:'borrowCardSearchByClass'})">
          <td>中一班</td>
          <td>0</td>
          <td>26</td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
import { Search, XTable } from 'vux'
export default {
  components: {
    Search, XTable
  },
  data () {
    return {

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
      width: 60%;
      text-align: left;
    }
  }
  td {
    padding: 10px;
    &:nth-child(1) {
      width: 60%;
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