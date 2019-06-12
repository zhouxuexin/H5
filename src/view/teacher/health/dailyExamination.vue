<template>
  <div class="report-wrap">
    <group>
      <calendar v-model="date" title="每日晨检报告" disable-past placeholder="placeholder" @on-show="log('show')"
        @on-hide="log('hide')"></calendar>
    </group>
    <p class="report">出勤<i>23</i>人，实际晨检<i>23</i>人，未晨检<i>0</i>人，晨检率<i>100%</i></p>
    <x-table class="table">
      <tbody>
        <tr class="yellow">
          <td>出勤</td>
          <td>缺勤</td>
          <td>出勤率</td>
        </tr>
        <tr>
          <td>23人</td>
          <td>3人</td>
          <td>88.46%</td>
        </tr>
        <tr class="blue">
          <td>晨检</td>
          <td>未晨检</td>
          <td>晨检率</td>
        </tr>
        <tr>
          <td>23人</td>
          <td>0人</td>
          <td>100.00%</td>
        </tr>
      </tbody>
    </x-table>
    <group>
      <cell title="小一班异常症状分布" is-link></cell>
    </group>
    <div>
      <v-chart :data="data">
        <v-scale y :options="yOptions" />
        <v-tooltip disabled />
        <v-pie :radius="0.85" series-field="name" />
        <v-legend :options="legendOptions" />
      </v-chart>
    </div>
  </div>
</template>
<script>
import { Group, Cell, Calendar, XTable, VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale } from 'vux'
const map = {
  '剪指甲': '1人',
  '流鼻涕': '1人',
  '腹泻': '3人',
}
export default {
  components: {
    Calendar, Group, Cell, XTable, VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale
  },
  data () {
    return {
      date: 'TODAY',
      legendOptions: {
        position: 'right',
        itemFormatter (val) {
          return val + '  ' + map[val]
        }
      },
      yOptions: {
        formatter (val) {
          return val * 100 + '%'
        }
      },
      map,
      data: [
        { name: '剪指甲', percent: 0.4, a: '1' },
        { name: '流鼻涕', percent: 0.2, a: '1' },
        { name: '腹泻', percent: 0.18, a: '1' },
      ]
    }
  },
  methods: {
    log () {

    }
  }
}
</script>
<style lang="less" scoped>
.report-wrap {
  .report {
    padding: 10px;
    color: #666;
    i {
      color: #f56c6c;
      padding: 0 2px;
      font-style: nonde;
    }
  }
  .table {
    .yellow {
      td {
        color: #d99292;
        background: #dae8a3;
      }
    }
    .blue {
      td {
        background: #72eebb;
        color: #728cee;
      }
    }
    td {
      color: #666;
      width: 33.3%;
    }
  }
}
</style>