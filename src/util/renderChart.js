import echarts from 'echarts'
import initOption from './initOptions'

const renderCharts = (refs, options) => {
  let chartDom = echarts.init(refs)
  chartDom.setOption(options)
  return chartDom
} 

export const initLineCharts = (titleText, legendData, xAxisData, seriesData, refs) => {
  let lineChartsOptions = Object.assign({}, initOption.initLineChartsOptions)
  lineChartsOptions.title.text = titleText
  lineChartsOptions.legend.data = legendData
  lineChartsOptions.xAxis.data = xAxisData
  lineChartsOptions.series = seriesData
  return renderCharts(refs, lineChartsOptions)
}

export const initBarCharts = (titleText, legendData, xAxisData, seriesData, refs, min, max) => {
  let barChartsOptions = Object.assign({}, initOption.initBarChartOption)
  titleText ? barChartsOptions.title.text = titleText : ''
  legendData ? barChartsOptions.legend.data = legendData : ''
  barChartsOptions.xAxis.data = xAxisData
  barChartsOptions.yAxis.min = min
  barChartsOptions.yAxis.max = max
  barChartsOptions.series[0].data = seriesData
  return renderCharts(refs, barChartsOptions)
}

export const initHuanCharts = (titleText, legendData, xAxisData, seriesData, refs) => {
  let huanChartsOptions = Object.assign({}, initOption.initHuanChartOption)
  titleText ? huanChartsOptions.title.text = titleText : ''
  legendData ? huanChartsOptions.legend.data = legendData : ''
  xAxisData ? huanChartsOptions.xAxis.data = xAxisData : ''
  huanChartsOptions.series[0].data = seriesData
  return renderCharts(refs, huanChartsOptions)
}

export const initMinHuanCharts = (color, seriesData, refs) => {
  let minHuanChartOption = Object.assign({}, initOption.initMinHuanChartOption)
  // titleText ? huanChartsOptions.title.text = titleText : ''
  minHuanChartOption.color[0] = color
  minHuanChartOption.series[0].data = seriesData
  return renderCharts(refs, minHuanChartOption)
}