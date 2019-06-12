<template>
  <div>
    <grid :cols="2" :show-lr-borders="true" :show-vertical-dividers="true">
      <grid-item link="">
        <div class="icon-box" style="background-color:#fdb748">
          <svg-icon icon-class="analysis3" />
        </div>
        <div class="title">本班幼儿病假跟踪分析</div>
      </grid-item>
      <grid-item link="">
        <div class="icon-box" style="background-color:#e9878e">
          <svg-icon icon-class="heart" />
        </div>
        <div class="title">本班幼儿近期高发症状分析</div>
      </grid-item>
      <grid-item link="">
        <div class="icon-box" style="background-color:#b68ce4">
          <svg-icon icon-class="analysis" />
        </div>
        <div class="title">本班幼儿过敏史分析</div>
      </grid-item>
      <grid-item link="">
        <div class="icon-box" style="background-color:#fe9290">
          <svg-icon icon-class="illness" />
        </div>
        <div class="title">本班幼儿疾病史分析</div>
      </grid-item>
      <grid-item link="">
        <div class="icon-box" style="background-color:#73a7f4">
          <svg-icon icon-class="temperature" />
        </div>
        <div class="title">本班幼儿疫苗接种分析</div>
      </grid-item>
      <grid-item link="">
        <div class="icon-box" style="background-color:#7bcc49">
          <svg-icon icon-class="analysis2" />
        </div>
        <div class="title">本班幼儿成长发育情况</div>
      </grid-item>
    </grid>
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

    }
  },
  methods: {

  }
}
</script>
<style lang="less" scoped>
.weui-grid {
  text-align: center;
  //  color:#666;
}
.icon-box {
  display: inline-block;
  border-radius: 50%;
  width: 70px;
  height: 70px;
  font-size: 40px;
  text-align: center;
  line-height: 70px;
  vertical-align: middle;
  margin-bottom: 10px;
  svg {
    color: #fff;
  }
}
.title {
  font-size: 14px;
  color: #666;
}
</style>