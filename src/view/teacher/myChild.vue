<template>
  <div class="content-wrapper my-child">
    <group>
      <cell title="姓名：张三" value="性别：男"></cell>
      <cell title="出生日期" is-link value="2014-02-07"></cell>
      <cell title="身高" is-link value="113cm"></cell>
      <cell title="体重" is-link value="30kg"></cell>
      <cell title="过敏史" is-link value="无过敏史"></cell>
    </group>
    <group title="疫苗接种情况">
      <cell title="已接种的疫苗" is-link value="5剂">
      </cell>
      <cell title="未接种的疫苗" is-link value="4剂">
      </cell>
    </group>
  </div>
</template>
<script>
import { Group, Cell } from 'vux'
export default {
  components: {
    Group, Cell
  },
  data () {
    return {

    }
  }
}
</script>
<style scoped>
.my-child {
  position: relative;
}
</style>
