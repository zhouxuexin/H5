<template>
  <view-box>
    <div class="content-wrapper report-wrap">
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
        <e-chart :options="pie" ref="pie" autoresize></e-chart>
      </div>
    </div>
  </view-box>
</template>
<script>
import { Group, Cell, Calendar, XTable, VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale } from 'vux'
import ECharts from 'vue-echarts'
import 'echarts/lib/chart/pie'
import 'echarts/lib/component/tooltip'
import 'echarts/lib/component/title'
export default {
  components: {
    Calendar, Group, Cell, XTable, VChart, VLine, VArea, VTooltip, VLegend, VBar, VPie, VScale, 'e-chart': ECharts
  },
  data () {
    return {
      date: 'TODAY',
      pie: {
        title: {
          text: '小一班异常症状分布',
          x: 'center',
          top: '30'
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          orient: 'vertical',
          left: '10',
          data: ['剪指甲', '流鼻涕', '腹泻',]
        },
        series: [
          {
            name: '点击查看',
            type: 'pie',
            radius: '55%',
            center: ['50%', '60%'],
            data: [
              { value: 1, name: '剪指甲' },
              { value: 3, name: '流鼻涕' },
              { value: 1, name: '腹泻' }
            ],
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }

    }
  },
  methods: {
    log () {

    },
  },
  mounted () {
  }
}
</script>
<style lang="less" scoped>
.echarts {
  width: 100%;
}
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