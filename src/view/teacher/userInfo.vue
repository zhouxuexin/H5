<template>
  <div>
    <group>
      <cell title="我的身份" is-link value="老师"></cell>
    </group>
    <group title="我的孩子">
      <cell title="张三" is-link value="小一班">
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
