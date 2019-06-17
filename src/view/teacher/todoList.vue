<template>
  <div class="content-wrapper todo-list">
    <div class="title">今日晨检情况</div>
    <x-table class="table">
      <tbody>
        <tr>
          <td>
            <svg-icon icon-class="boy" style="background:rgb(123, 204, 73);"></svg-icon>
            <span>晨检正常</span>
            <span class="number">16人</span>
          </td>
          <td>
            <svg-icon icon-class="girl" style="background:rgb(182, 140, 228);"></svg-icon>
            <span>晨检异常</span>
            <span class="number">2人</span>
          </td>
        </tr>
        <tr>
          <td>
            <svg-icon icon-class="illness" style="background:rgb(233, 135, 142);"></svg-icon>
            <span>请病假</span>
            <span class="number">1人</span>
          </td>
          <td>
            <svg-icon icon-class="leave" style="background:rgb(115, 167, 244);"></svg-icon>
            <span>请事假</span>
            <span class="number">0人</span>
          </td>
        </tr>
        <tr>
          <td>
            <svg-icon icon-class="heart" style="background:#f24b47;"></svg-icon>
            <span>重点关怀</span>
            <span class="number">4人</span>
          </td>
          <td>
            <svg-icon icon-class="no" style="background:rgb(253, 183, 72);"></svg-icon>
            <span>未晨检</span>
            <span class="number">2人</span>
          </td>
        </tr>
      </tbody>
    </x-table>
    <div class="title">重点健康待办工作</div>
    <x-table class="table">
      <tbody>
        <tr>
          <td>
            <div>
              <span class="name">张三</span>
              <span class="symptom">腹泻</span>
              <p class="tip">今日晨检有异常，请老师多关注孩子的健康状况，给与关怀问候</p>
            </div>
            <div class="btn">
              <x-button mini :gradients="['#FF5E3A', '#FF9500']">关怀问候</x-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span class="name">李四</span>
              <span class="symptom">剪指甲</span>
              <p class="tip">请老师多注意孩子的行为，避免抓伤到其他小朋友</p>
            </div>
            <div class="btn">
              <x-button mini :gradients="['#FF5E3A', '#FF9500']">关怀问候</x-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span class="name">赵武</span>
              <span class="symptom">流鼻涕</span>
              <p class="tip">今日晨检有异常，请老师多关注孩子的健康状况，给与关怀问候</p>
            </div>
            <div class="btn">
              <x-button mini :gradients="['#FF5E3A', '#FF9500']">关怀问候</x-button>
            </div>
          </td>
        </tr>
        <tr>
          <td>
            <div>
              <span class="name">晓晓</span>
              <span class="symptom">感冒</span>
              <p class="tip">今日晨检有异常，请老师多关注孩子的健康状况，给与关怀问候</p>
            </div>
            <div class="btn">
              <x-button mini :gradients="['#FF5E3A', '#FF9500']">关怀问候</x-button>
            </div>
          </td>
        </tr>
      </tbody>
    </x-table>
  </div>
</template>
<script>
import { XTable, XButton } from 'vux'
export default {
  components: {
    XTable,
    XButton
  },
  data () {
    return {

    }
  },
  methods: {

  },
  mounted () {

  }

}
</script>
<style lang="less" scoped>
.todo-list {
  .title {
    padding: 10px;
    font-size: 16px;
    color: #10aeff;
    line-height: 32px;
  }
  .table {
    td {
      overflow: hidden;
      color: #333;
      padding: 15px 10px;
      text-align: left;
      svg {
        font-size: 30px;
        vertical-align: middle;
        padding: 2px;
        border-radius: 50%;
        color: #fff;
      }
      .number {
        float: right;
        color: #999;
      }
      .name {
        font-size: 18px;
        display: inline-block;
        width: 4em;
      }
      .tip {
        line-height: 28px;
        color: #666;
        margin-bottom: 5px;
      }
      .symptom {
        font-size: 18px;
        color: rgb(255, 39, 25);
      }
      .btn {
        text-align: right;
      }
    }
  }
}
</style>
