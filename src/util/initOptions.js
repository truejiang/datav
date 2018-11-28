let initLineChartsOptions = {
  title: {
      text: '>>贵州规模以上工业增加值同比增长8.7%',
      textStyle: {
        color: '#fff',
        fontSize: 14
      },
      top: 8,
      left: 8
  },
  legend: {
      data: [
          '贵州',
          '全国'
      ],
      right: 0,
      textStyle: {
        color: '#fff'
      },
      top: 8
  },
  color: ['#ea5f1b', '#23a2a9'],
  tooltip: {
      trigger: 'axis'
  },
  grid: {
      left: '2%',
      right: '0%',
      bottom: '0%',
      containLabel: true
  },
  xAxis: {
      type: 'category',
      boundaryGap: false,
      data: [
          '2017.1-10月',
          '2017.1-11月',
          '2017.1-12月',
          '2018.1-2月',
          '2018.1-3月',
          '2018.1-4月',
          '2018.1-5月',
          '2018.1-6月',
          '2018.1-7月',
          '2018.1-8月',
          '2018.1-9月',
          '2018.1-10月',
      ],
      axisLine: {
          lineStyle: {
              color: '#092a5c',
              width: 1
          }
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          color: '#fff',
          interval: 0
      }
  },
  yAxis: {
      type: 'value',
      axisLine: {
          show: false
      },
      splitLine: {
          lineStyle: {
              color: '#092a5c',
              width: 1
          }
      },
      axisLabel: {
          color: '#fff'
      },
      splitNumber: 5,
      nameGap: 25
  },
  series: [
      {
          name: '贵州',
          type: 'line',
          stack: '总量',
          data: [9.1, 9.1, 9.3, 9.9, 9.6, 9.6, 9.6, 9.1, 8.9, 8.6, 8.5, 8.6]
      },
      {
          name: '全国',
          type: 'line',
          stack: '总量',
          data: [6.7, 6.7, 6.6, 6.6, 7.2, 6.8, 6.9, 6.7, 6.6, 6.5, 6.4, 6.5]
      }
  ]
}

let initBarChartOption = {
  title: {
    text: '',
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    top: 8,
    left: 8
  },
  grid: {
      bottom: 30,
      top: 45
  },
  xAxis: {
      data: ['增加值', '主营业务收入', '固定资产投资'],
      nameTextStyle: {
          color: ['#fff']
      },
      axisLine: {
          lineStyle: {
              color: '#092a5c',
              width: 1
          }
      },
      axisTick: {
          show: false
      },
      axisLabel: {
          color: '#fff',
          interval: 0
      }
  },
  color: ['#1576d1', '#c9541d'],
  yAxis: {
      axisLine: {
          show: false
      },
      splitLine: {
          lineStyle: {
              color: '#092a5c',
              width: 1
          }
      },
      axisLabel: {
          color: '#fff'
      },
      splitNumber: 5
  },
  series: [
      {
          type: 'bar',
          data: [0, 0, 10],
          label: {
              show: false,
              position: 'top',
              color: '#fff'
          },
          barWidth: '50%',
          color: function(params) {
              var colors = ['#1576d1', '#c9541d']
              return colors[params.dataIndex % 2]
          }
      }
  ]
}

let initHuanChartOption = {
  title: {
    text: '>>工业经济运行实现“四稳三好四新”',
    textStyle: {
      color: '#fff',
      fontSize: 14
    },
    top: 8,
    left: 8
  },
  tooltip: {
      trigger: 'item',
      formatter: '{b}: {c} ({d}%)'
  },
  color: [
      '#8ee265',
      '#66b440',
      '#40b44e',
      '#5dd441',
      '#27b8bd',
      '#dbb443',
      '#ea5f1b',
      '#4569b2',
      '#2a4e98',
      '#1687ef'
  ],
  series: [
      {
          name: '增长率',
          type: 'pie',
          radius: ['40%', '55%'],
          center: ['50%', '60%'],
          label: {
              normal: {
                  color: '#27b8bd',
                  formatter: '{b|{b}:}{per|{d}%}  ',
                  rich: {
                      a: {
                          color: '#999',
                          lineHeight: 22,
                          align: 'center'
                      }
                  }
              }
          },
          data: [
              { value: 75, name: '煤炭产业增长' },
              { value: 129, name: '主营业务增长' },
              { value: 452, name: '利润总额增长' },
              { value: 971, name: '工业产效率' },
              { value: 154, name: '电力产业增长' },
              { value: 128, name: '民营经济增长' },
              { value: 151, name: '民营工业投资' },
              { value: 784, name: '工业总产值占全省' },
              { value: 127, name: '技术制造业增长' },
              { value: 353, name: '原材料贡献率' }
          ]
      }
  ]
}

let initMinHuanChartOption = {
  color: ['#1687ef', '#172852'],
  series: [
      {
          type: 'pie',
          radius: ['80%', '92%'],
          hoverAnimation: false,
          label: {
              normal: {
                  show: false,
                  position: 'center',
                  formatter: function(params) {
                      if (params.name) {
                          return `${
                              params.value
                          }万人\n\n同比增长${
                              params.percent
                          }%\n\n${params.name}`
                      }
                  }
              }
          },
          labelLine: {
              normal: {
                  show: true
              }
          },
          data: [
              { value: 335, name: '直接访问' },
              { value: 665, name: '' }
          ]
      }
  ]
}

const initOption = {
  initLineChartsOptions,
  initBarChartOption,
  initHuanChartOption,
  initMinHuanChartOption
}

export default initOption