<template>
  <div class="home" id="app">
    <span class="main-tit" style="position: absolute; color: #fff; left: calc(50% - 112px); top: 14px;font-size: 16px;font-weight: bold">贵州省工业大数据综合信息平台</span>
    <div class="top-left">
      <div class="words">
        <template v-for="txtDataItem in txtDataLists"> 
          <p class="name">>> {{txtDataItem.name}}</p>
          <div class="value-item">
            <div class="item" v-for="(item, index) in txtDataItem.valueLists" :key="index">
              <span class="tit">{{item.tit}}</span>
              <p class="value">
                <span class="num">{{item.value}}</span>
                <span class="unit">{{item.unit}}</span>
              </p>
            </div>
          </div>
        </template>
      </div>
      <template v-if="windowWidth >= 1920">
      <!-- <p class="chart-tit">>> 电子信息制造业继续保持平稳增长态势</p> -->
      <div id="echarts1" style="width: 400px;height: 136px;"></div>
      <!-- <p class="chart-tit">>> 电子信息制造业主要分行业主营业务收入同比增长</p> -->
      <div id="echarts2" style="width: 400px;height: 136px;"></div>
      </template>
      <template v-else>
      <!-- <p class="chart-tit">>> 电子信息制造业继续保持平稳增长态势</p> -->
      <div id="echarts1" style="width: 400px;height: 136px;transform: scaleX(.7) scaleY(.62) translateX(-74px) translateY(-52px);"></div>
      <!-- <p class="chart-tit">>> 电子信息制造业主要分行业主营业务收入同比增长</p> -->
      <div id="echarts2" style="width: 400px;height: 136px;transform: scaleX(.72) scaleY(.62) translateX(-74px) translateY(-147px);"></div>
      </template>
    </div>
    <div class="bottom-left">
      <p class="title">>>“运用互联网+”发展新就业形态，支持以创业带动就业</p>
      <div class="box" v-if="windowWidth >= 1920" style="width: 400px;">
        <div class="label-box" v-for="(item, index) in textData2">
          <p class="value">
            {{item.value}} <span>万人</span>
          </p>
          <p class="value value2">
            <span>同比增长</span>{{item.value2}}%
          </p>
          <p class="title">{{item.p1}}</p>
          <p class="title">{{item.p2}}</p>
        </div>
        <div class="huan" id="huan1" style="width: 180px;height: 110px"></div>
        <div class="huan" id="huan2" style="width: 180px;height: 110px"></div>
        <div class="huan" id="huan3" style="width: 180px;height: 110px"></div>
        <div class="huan" id="huan4" style="width: 180px;height: 110px"></div>
      </div>
      <div class="box" v-else style="transform: scale(.65) translateX(-125px) translateY(-70px);width: 400px;">
        <div class="label-box" v-for="(item, index) in textData2">
          <p class="value">
            {{item.value}} <span>万人</span>
          </p>
          <p class="value value2">
            <span>同比增长</span>{{item.value2}}%
          </p>
          <p class="title">{{item.p1}}</p>
          <p class="title">{{item.p2}}</p>
        </div>
        <div class="huan" id="huan1" style="width: 180px;height: 110px"></div>
        <div class="huan" id="huan2" style="width: 180px;height: 110px"></div>
        <div class="huan" id="huan3" style="width: 180px;height: 110px"></div>
        <div class="huan" id="huan4" style="width: 180px;height: 110px"></div>
      </div>
    </div>
    <div class="center-top">
      <div class="inner-box">
        <div class="words-box">
          <p class="map-value-item">
            <span class="value" style="color: #fff;font-size: 16px;">贵州省生产总值</span>
          </p>
          <p class="map-value-item">
            <span class="value">10401.39</span>
            <span class="unit">亿元</span>
          </p>
          <p class="map-value-item">
            <span class="value">9.0%</span>
            <span class="unit">同比增长</span>
          </p>
        </div>
        <img class="img" src="./map2.png" alt="" srcset="">
      </div>
    </div>
    <template v-if="windowWidth >= 1920">
      <div class="center-center" >
        <div id="line1" style="width: 840px; height: 190px"></div>
      </div>
      <div class="center-bottom">
        <div id="zhu1" style="width: 840px; height: 190px"></div>
      </div>
      <div class="right-top">
        <div id="konghuan" style="width: 390px; height: 255px" ></div>
      </div>
    </template>
    <template v-else>
      <div class="center-center" style="transform: scale(.72) translateX(-118px) translateY(-29px)">
        <div id="line1" style="width: 840px; height: 190px"></div>
      </div>
      <div class="center-bottom" style="transform: scale(.72) translateX(-118px) translateY(-29px)">
        <div id="zhu1" style="width: 840px; height: 190px"></div>
      </div>
      <div class="right-top" style="transform: scale(0.72) translateX(-52px) translateY(-42px)">
        <div id="konghuan" style="width: 390px; height: 255px" ></div>
      </div>
    </template>
    <div class="right-bottom" v-if="windowWidth >= 1920">
      <div id="echarts3" style="width: 400px;height: 136px;"></div>
      <div id="echarts4" style="width: 400px;height: 136px;"></div>
      <div id="echarts5" style="width: 400px;height: 136px;"></div>
      <div id="echarts6" style="width: 400px;height: 136px;"></div>
    </div>
    <div class="right-bottom" v-else>
      <div id="echarts3" style="width: 400px;height: 136px;transform: scaleX(0.74) scaleY(0.7) translateX(-72px) translateY(-36px);"></div>
      <div id="echarts4" style="width: 400px;height: 136px;transform: scaleX(0.74) scaleY(0.7) translateX(-72px) translateY(-110px);"></div>
      <div id="echarts5" style="width: 400px;height: 136px;transform: scaleX(0.74) scaleY(0.7) translateX(-74px) translateY(-179px);"></div>
      <div id="echarts6" style="width: 400px;height: 136px;transform: scaleX(0.74) scaleY(0.7) translateX(-74px) translateY(-240px);"></div>
    </div>
    <!-- <div id="konghuan" style="width: 300px;height: 300px"></div>
    <div id="huan2" style="width: 300px;height: 300px"></div>
    <div id="zhu1" style="width: 500px; height: 300px"></div> -->
  </div>
</template>

<script>
// @ is an alias to /src
import echarts from 'echarts'
import { initLineCharts, initBarCharts, initHuanCharts, initMinHuanCharts } from './util/renderChart.js'
import { constants } from 'fs';
import { clearInterval, setInterval } from 'timers';
function initArrs (arr) {
  let arrs = []
  let repeat = '0'.repeat(arr.length)
  arrs.push(repeat.split(''))
  for (var i = 1; i <= 20; i++) {
    let innerarr = []
    arr.forEach(el => {
        innerarr.push((el*i*0.05).toFixed(2))
    })
    arrs.push(innerarr)
  }
  return arrs
}
let echarts1, echarts2, echarts3, echarts4, echarts5, echarts6, konghuan, huan1, huan2, huan3, huan4, zhu1
let echarts1Data= [0, 8, 10],
            echarts2Data= [1.2, 2.9, 0.8], 
            echarts3Data= [1.0, 2.7], 
            echarts4Data= [2.5, 11.3, 9.2, 22.4, 5.3, 0.1, 1.2, 1.5, 0.5], 
            echarts5Data= [1.9, 1.1, 0.1, 3.9, 4.2], 
            echarts6Data= [1, 5, 6.2], 
            // konghuanData= [
            //   { value: 5, name: '煤炭产业增长' },
            //   { value: 19, name: '主营业务增长' },
            //   { value: 42, name: '利润总额增长' },
            //   { value: 91, name: '工业产效率' },
            //   { value: 14, name: '电力产业增长' },
            //   { value: 12, name: '民营经济增长' },
            //   { value: 15, name: '民营工业投资' },
            //   { value: 74, name: '工业总产值占全省' },
            //   { value: 17, name: '技术制造业增长' },
            //   { value: 33, name: '原材料贡献率' }
            // ], 
            huan1Data= [{ value: 3, name: '新增就业' },{ value: 665, name: '' }], 
            huan2Data= [{ value: 6, name: '失业人员再调查' }, { value: 326, name: '' }], 
            huan3Data= [{ value: 2, name: '就业困难人员就业' }, { value: 750, name: '' }], 
            huan4Data= [{ value: 9, name: '农业劳动力' }, { value: 90, name: '' }], 
            zhu1Data= [1.3, 3.3, 0.3, 8.4, 3.9, 7.2, 2.5, 6.1, 5.2, 3.4, 7.4, 3.6, 1.2, 0.5, 6.6],
            textData = [
                {
                    name: '贵州省大数据产业',
                    valueLists: [
                        {
                            tit: '企业达到',
                            value: 8702,
                            unit: '多家'
                        },
                        {
                            tit: '大数据产业',
                            value: 1125,
                            unit: '多亿'
                        },
                        {
                            tit: '电子制造业增长',
                            value: '68.3%',
                            unit: ''
                        }
                    ]
                },
                {
                    name: '贵州省财政收入',
                    valueLists: [
                        {
                            tit: '财政总收入',
                            value: 1674.75,
                            unit: '亿元'
                        },
                        {
                            tit: '同比增长',
                            value: '21.6%',
                            unit: ''
                        },
                        {
                            tit: '同比加快',
                            value: '9.3',
                            unit: '百分点'
                        }
                    ]
                },
                {
                    name: '贵州省市场总量',
                    valueLists: [
                        {
                            tit: '总量263.58万户',
                            value: '4.83%',
                            unit: '同比'
                        },
                        {
                            tit: '注资7.89万亿元',
                            value: '22.8%',
                            unit: '同比'
                        }
                    ]
                },
                {
                    name: '全省规模以上工业增加值同比增长9.6%',
                    valueLists: []
                }
            ],
            textData2 = [
              {
                value: 20,
                value2: 0.1,
                p1: '新增职业',
                p2: ''
              },
              {
                value: 3.1,
                value2: 2.1,
                p1: '失业人员',
                p2: '再就业'
              },
              {
                value: 1.2,
                value2: 2.4,
                p1: '就业困难',
                p2: '人员就业'
              },
              {
                value: 32,
                value2: 2.6,
                p1: '农业劳动力',
                p2: '转移就业'
              }
            ]

let beishu = 1
let echarts1o = {intervalName: null, beishu: 1}
let echarts2o = {intervalName: null, beishu: 1}
let echarts3o = {intervalName: null, beishu: 1} 
let echarts4o = {intervalName: null, beishu: 1}
let echarts5o = {intervalName: null, beishu: 1}
let echarts6o = {intervalName: null, beishu: 1}
let konghuano = {intervalName: null, beishu: 1}
let huan1o = {intervalName: null, beishu: 1}
let huan2o = {intervalName: null, beishu: 1}
let huan3o = {intervalName: null, beishu: 1}
let huan4o = {intervalName: null, beishu: 1}
let zhu1o = {intervalName: null, beishu: 1}

let zhu1arr = [7.3, 7.3, 10.3, 11.3, 13.5, 17.7, 17.3, 16.4, 15.5, 77.1, 17.2, 13.1, 13.1, 20.5, 10]
let zhu1arrs = initArrs(zhu1arr)
export default {
    name: 'home',
    data() {
        return {
            txtDataLists: [
                {
                    name: '贵州省大数据产业',
                    valueLists: [
                        {
                            tit: '企业达到',
                            value: 8900,
                            unit: '多家'
                        },
                        {
                            tit: '大数据产业',
                            value: 1265,
                            unit: '多亿'
                        },
                        {
                            tit: '电子制造业增长',
                            value: '88.73%',
                            unit: ''
                        }
                    ]
                },
                {
                    name: '贵州省财政收入',
                    valueLists: [
                        {
                            tit: '财政总收入',
                            value: 1874.75,
                            unit: '亿元'
                        },
                        {
                            tit: '同比增长',
                            value: '21.6%',
                            unit: ''
                        },
                        {
                            tit: '同比加快',
                            value: '9.3',
                            unit: '百分点'
                        }
                    ]
                },
                {
                    name: '贵州省市场总量',
                    valueLists: [
                        {
                            tit: '总量263.58万户',
                            value: '7.83%',
                            unit: '同比'
                        },
                        {
                            tit: '注资7.89万亿元',
                            value: '26.8%',
                            unit: '同比'
                        }
                    ]
                },
                {
                    name: '全省规模以上工业增加值同比增长9.6%',
                    valueLists: []
                }
            ],
            echarts1Data: [12.4, 8.1, 19.7],
            echarts2Data: [10.9, 6.9, 6.8], 
            echarts3Data: [8.0, 10.7], 
            echarts4Data: [13.5, 21.3, 19.1, 86.3, 35.1, 2.0, 4.2, 6.5, 10.5], 
            echarts5Data: [4.9, 4.1, 4.1, 10.9, 9.0], 
            echarts6Data: [5, 20, 36], 
            konghuanData: [
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
            ], 
            huan1Data: [{ value: 335, name: '新增就业' },{ value: 665, name: '' }], 
            huan2Data: [{ value: 674, name: '失业人员再调查' }, { value: 326, name: '' }], 
            huan3Data: [{ value: 250, name: '就业困难人员就业' }, { value: 750, name: '' }], 
            huan4Data: [{ value: 300, name: '农业劳动力' }, { value: 700, name: '' }], 
            zhu1Data: [7.3, 7.3, 10.3, 11.3, 13.5, 17.7, 17.3, 16.4, 15.5, 77.1, 17.2, 13.1, 13.1, 20.5, 10],
            textData2: [
              {
                value: 47.22,
                value2: 1.2,
                p1: '新增职业',
                p2: ''
              },
              {
                value: 10.82,
                value2: 8.6,
                p1: '失业人员',
                p2: '再就业'
              },
              {
                value: 5.59,
                value2: 4.7,
                p1: '就业困难',
                p2: '人员就业'
              },
              {
                value: 6.8,
                value2: 4.3,
                p1: '农业劳动力',
                p2: '转移就业'
              }
            ],
            windowWidth: 1920
        }
    },
    created() {
      this.windowWidth = window.screen.width
      
    },
    mounted() {
        let that = this

        this.$nextTick(() => {
          echarts1 = initBarCharts('>>电子信息制造业继续保持平稳增长态势', '', ['增加值', '主营业务收入', '固定资产投资'], [0,0,0],document.getElementById('echarts1'), 0, 40)

          
          echarts2 = initBarCharts('>>电子信息制造业主要分行业主营业务收入同比增长', '', ['通信设备制造业', '电子元件/电子材料', '计算机制造业'], [0, 0, 0],document.getElementById('echarts2'), 0 , 30)


          echarts3 = initBarCharts('>>工业增加值比上年增加9.5%', '', ['国有控股企业增长', '非公有控股企业增长'], [0, 0],document.getElementById('echarts3'), 0, 40)


          echarts4 = initBarCharts('>>制造业比上年增长11.8%', '', ['酒', '医药', '汽车', '计算机', '电器机械', '烟草', '化学原料', '非金', '有色金'], [0,0,0,0,0,0,0,0,0],document.getElementById('echarts4'), 0, 100)


          echarts5 = initBarCharts('>>采矿业比上年增长1.5%', '', ['煤炭开采', '洗选业', '黑色金属', '有色金属', '非金属'], [0,0,0,0,0],document.getElementById('echarts5'), 0, 12)

          

          echarts6 = initBarCharts('>>电力燃气和水的生产和供应比上年增长14.3%', '', ['电力值', '燃气生产/供应业', '水生产'], [0,0,0],document.getElementById('echarts6'), 0, 40)


          konghuan = initHuanCharts('>>工业经济运行实现“四稳三好四新”', '', '',this.konghuanData,document.getElementById('konghuan'))

          // this.updateHuanData(konghuan, konghuanData, 10, 100, this.konghuanData)
          huan1 = initMinHuanCharts('#1687ef', [{ value: 335, name: '新增就业' },
                                        { value: 665, name: '' }],document.getElementById('huan1'))
          this.updateHuanData(huan1, huan1Data, 10, 100, this.huan1Data)
          huan2 = initMinHuanCharts('#ea5f1b', [{ value: 674, name: '失业人员再调查' },
                                        { value: 326, name: '' }],document.getElementById('huan2'))
          this.updateHuanData(huan2, huan2Data, 10, 100, this.huan2Data)
          huan3 = initMinHuanCharts('#27b8bd', [{ value: 250, name: '就业困难人员就业' },
                                        { value: 750, name: '' }],document.getElementById('huan3'))
          this.updateHuanData(huan3, huan3Data, 10, 100, this.huan3Data)
          huan4 = initMinHuanCharts('#1687ef', [{ value: 910, name: '农业劳动力' },
                                        { value: 90, name: '' }],document.getElementById('huan4'))
          this.updateHuanData(huan4, huan4Data, 10, 100, this.huan4Data)
 

          initLineCharts('>>贵州规模以上工业增加值同比增长8.7%', [
                      '贵州',
                      '全国'
                  ], [
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
                  ], [
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
              ],document.getElementById('line1'))
    
          zhu1 = echarts.init(document.getElementById('zhu1'))
          let zhuSetOption = {
              title: {
                  text: '>>工业领域细分行业增长情况',
                  textStyle: {
                    color: '#fff',
                    fontSize: 14
                  },
                  top: 8,
                  left: 8
              },
              color: ['#1576d1'],
              tooltip : {
                  trigger: 'axis',
                  axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                      type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                  }
              },
              grid: {
                  left: '3%',
                  right: '0%',
                  bottom: '3%',
                  containLabel: true
              },
              xAxis : [
                  {
                      type : 'category',
                      data : ['煤炭开采', '洗选业', '电力', '烟草制品业', '酒/饮料/茶', '计算机', '电子设备', '集成电路', '滚动轴承', '橡胶轮胎', '平板玻璃', '钢材', '有色金属', '塑料'],
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
                  }
              ],
              yAxis : [
                  {
                      type : 'value',
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
                      nameGap: 10,
                      min: 0,
                      max: 100,
                      name: '同比（%）',
                      nameTextStyle: {
                        color: '#fff',
                        padding: [14, 0, 0, 0]
                      }
                  }
              ],
              series : [
                  {
                      name:'工业领域细分行业增长情况',
                      type:'bar',
                      barWidth: '60%',
                      data:[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                      label: {
                        show: false,
                        position: 'top',
                        color: '#fff',
                        formatter: '{c}%'
                      },
                  }
              ]
          }
          zhu1.setOption(zhuSetOption)
          that.updateZhuData(zhu1, zhu1arrs)
          that.updateZhuData(echarts1, initArrs(this.echarts1Data))
          that.updateZhuData(echarts2, initArrs(this.echarts2Data))
          that.updateZhuData(echarts3, initArrs(this.echarts3Data))
          that.updateZhuData(echarts4, initArrs(this.echarts4Data))
          that.updateZhuData(echarts5, initArrs(this.echarts5Data))
          that.updateZhuData(echarts6, initArrs(this.echarts6Data))

          setInterval(() => {
            that.updateZhuData(zhu1, zhu1arrs)
            that.updateZhuData(echarts1, initArrs(that.echarts1Data))
            that.updateZhuData(echarts2, initArrs(that.echarts2Data))
            that.updateZhuData(echarts3, initArrs(that.echarts3Data))
            that.updateZhuData(echarts4, initArrs(that.echarts4Data))
            that.updateZhuData(echarts5, initArrs(that.echarts5Data))
            that.updateZhuData(echarts6, initArrs(that.echarts6Data))
          }, 1000 * 19);

          this.updataTxt(textData, this.txtDataLists)
          // this.updataTxt2(textData2, this.textData2)
        })
        setInterval(() => {
          window.location.reload()
        }, 1000 * 60 * 20)
    },
    methods: {
      random(lower, upper) {
        return Math.floor(Math.random() * (upper - lower)) + lower
      },
      updateData (refs, data, maxData) {
        setInterval(() => {
          data = data.map((x, index) => {
            let currentRandom = x + this.random(1,2)
            return currentRandom <= maxData[index] ? currentRandom : maxData[index]
          })
          refs.setOption({
            series: [{
                data: data
            }]
          })
        }, 5000)
      },
      updateZhuData (refs, arrs) {
        let index = 0
        let data = []
        let labelShow = false
        let timer = setInterval(() => {
          // data = data.map((x, index) => {
          //   let currentRandom = x + this.random(1,2)
          //   return currentRandom <= maxData[index] ? currentRandom : maxData[index]
          // })
          if (index >= 21) {
            clearInterval(timer)
            return
          }
          if (index === 20) {
            labelShow = true
          }
          data = [].concat(arrs[index])
          refs.setOption({
            series: [{
                data: data,
                label: {
                  show: labelShow
                }
            }]
          })
          index++
        }, 200)
      },
      updateHuanData (refs, data, min, max, maxData) {
        setInterval(() => {
          data.forEach((el,index) => {
            let currentRandom =  el.value + this.random(min, max)
            currentRandom <= maxData[index].value ? el.value = currentRandom : el.value = maxData[index].value
          })
          refs.setOption({
            series: [{
                data: data
            }]
          })
        }, 2000)
      },
      updataTxt (data, maxData) {
        setInterval(() => {
          data.forEach((el,index) => {
            el.valueLists.forEach((innerEl, innerIndex) => {
              let currentRandom =  parseFloat(innerEl.value) + this.random(1, 10)
              currentRandom <= maxData[index].valueLists[innerIndex].value && typeof innerEl.value === 'number' ? innerEl.value = currentRandom : innerEl.value = maxData[index].valueLists[innerIndex].value
            })
          })
          this.txtDataLists = [].concat(data)
        }, 2000)
      },
      updataTxt2 (data, maxData) {
        setInterval(() => {
          data.forEach((el,index) => {
            let currentRandom =  el.value + this.random(0, 1)
            // let currentRandom2=  el.value2 + this.random(0, 1)
            currentRandom <= maxData[index].value ? el.value = currentRandom : el.value = maxData[index].value
            // currentRandom2 <= maxData[index].value2 ? el.value2 = currentRandom2: el.value2 = maxData[index].value2
          })
          this.textData2 = [].concat(data)
        }, 2000)
      }
    }
}
</script>
<style lang="stylus" scoped>
@import './assets/styles.sass'
</style>