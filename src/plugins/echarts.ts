// vue-echarts
import ECharts from 'vue-echarts'
import { use } from "echarts/core"
import {
    CanvasRenderer
  } from 'echarts/renderers'
  import {
    BarChart,PieChart
  } from 'echarts/charts'
  import {
    GridComponent,
    TitleComponent,
    TooltipComponent,
    LegendComponent,
  } from 'echarts/components'

  use([
    CanvasRenderer,
    BarChart,PieChart,
    GridComponent,
    LegendComponent,
    TooltipComponent,
    TitleComponent,
  ])

  export const registerEcharts= (app:any)=>{
    app.component('v-chart', ECharts)
  }