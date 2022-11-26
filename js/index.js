(function(){
   // 获取到故障设别监控和异常设被监控完成Tab切换
var choseTab=document.getElementsByClassName('choseTab')
//choseTab[0]故障设备监控  choseTab[1]异常设备监控
// console.log(choseTab)

// 获取到故障设别监控和异常设被监控下面的部分
var showTab=document.getElementsByClassName('showTab')
// showTab[0]默认显示的   showTab[1]默认隐藏的 
// console.log(showTab)

  for(i=0;i<choseTab.length;i++){
    choseTab[i].setAttribute('index',i)
    choseTab[i].onclick=function(){
        var index=this.getAttribute('index')
        // console.log(index)

        for(var j=0;j<choseTab.length;j++){
            choseTab[j].classList.remove('active')
            choseTab[index].classList.add('active')
        }

        for(var k=0;k<showTab.length;k++){
            showTab[k].style.display='none'
            showTab[index].style.display='block'
        }
    }
  }
})();


// 饼图
(function () {
  var myChart = echarts.init(document.querySelector('.pie'));
  var option = {
      color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
      tooltip: {
          // item 表述 鼠标到饼图的每一项内容的时候 触发提示信息
          trigger: 'item',
          // a:series 选项下面的name
          // b:  series下面data中的name
          // c:  series下面data中的value
          // d:  当前value 占所以内容的比例
          formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      series: [
          {
              name: '老陈学员分布',
              // pie 饼图  
              type: 'pie',
              // 百分比 具体指都可以  百分比加一号
              // 1：内圆的半径  2 外圆的半径
              radius: ['10%', '49%'],
              // 设置水平方向  垂直方法  50% 居中
              center: ['50%', '50%'],
              roseType: 'radius',
              itemStyle: {
                  borderRadius: 5
              },
              label: {
                  fontSize: 10
              },
              labelLine: {
                  length: 4,
                  length2: 8
              },
              data: [
                  { value: 20, name: '云南' },
                  { value: 26, name: '北京' },
                  { value: 24, name: '山东' },
                  { value: 25, name: '河北' },
                  { value: 20, name: '江苏' },
                  { value: 25, name: '浙江' },
                  { value: 30, name: '四川' },
                  { value: 42, name: '河南' }
              ]
          }
      ]
  };

  myChart.setOption(option);


  // 解决echarts设置option后 ，图标特别小的情况
  //页面加载的时候 调用echarts实例对象的reszie（）方法
  // 必须使用时间监听
  window.addEventListener('load', function () {
      myChart.resize();
  });

  // 当屏幕重置大小的时候 继续调用echarts的重置大小方法
  // 自动适应当前屏幕
  window.addEventListener('resize', function () {
      myChart.resize();
  })

})();



// 柱状图
(function(){

  var item={
      name:'',
      value:1200,
      // 柱子颜色
      itemStyle:{
        color: '#254065'
      },
        // 鼠标经过柱子时的颜色
    emphasis: {
      itemStyle: {
        color: '#254065'
      }
    },
    // 工具提示隐藏  当tooltio中的trigger为item时生效
    tooltip: {
      extraCssText: 'opacity:0'
    },
  }
var myChart = echarts.init(document.getElementsByClassName('bar')[0]);
var option = {
      // 修改柱子的颜色为渐变色
  color: new echarts.graphic.LinearGradient(
    // (x1,y2) 点到点 (x2,y2) 之间进行渐变
    0, 0, 0, 1,
    [
         { offset: 0, color: '#00fffb' }, // 0 起始颜色
         { offset: 1, color: '#0061ce' }  // 1 结束颜色
   ]
),
    tooltip: {
      trigger: 'item',
      axisPointer: {
        type: 'shadow'
      }
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
      // 是否显示网格
      show:true,
      // 四条边框的颜色
      borderColor: 'rgba(0, 240, 255, 0.3)',
    },
    xAxis: [
      
      {

        type: 'category',
        data: ['郑州', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'], 
        // 刻度设置
        axisTick: {
        // true意思：图形和刻度居中中间
           // false意思：图形在刻度之间
          alignWithLabel: false,
          // 不显示刻度
          show:false,
        },
        // 设置x坐标轴的颜色
        axisLine:{
          lineStyle:{
              color:'rgba(0, 240, 255, 0.3)',
              // width:8,  x轴线的粗细
              // opcity: 0,   如果不想显示x轴线 则改为 0
             },
        },
            // x轴文字的颜色
        axisLabel: {
          color: '#71f2fb'
       },
      },
    ],
    yAxis: [
      {
        type: 'value',

        axisTick:{
          show:false,
        },
        axisLabel:{
          color: '#71f2fb'
        },
       // y轴 分割线的样式 
       splitLine: {
        lineStyle: {
            color: 'rgba(0, 240, 255, 0.3)'
        }
     }   
      }
    ],
    series: [
      {
        name: 'Direct',
        type: 'bar',
        barWidth: '60%',
        data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
      }
    ]
  };
myChart.setOption(option)
  // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
 window.addEventListener('load',function(){
        myChart.resize()
 })
 window.addEventListener('resize',function(){
    myChart.resize()
})
})();


// 右边部分订单量
(function(){
var index=0
var timer;  
  // 获取到360 90 30 24 
   var timeTab=document.getElementsByClassName('filter')[0].children
   console.log(timeTab)

  //  获取到订单的数量
  var orderData=document.getElementsByClassName('orderData')
  console.log(orderData)

   for(var i=0;i<timeTab.length;i++){
    timeTab[i].setAttribute('index',i)
    timeTab[i].onclick=function(){
        index=this.getAttribute('index')
      //  console.log(index)
      for(var j=0;j<timeTab.length;j++){
        timeTab[j].classList.remove('active')
        timeTab[index].classList.add('active')
      }

      for(var k=0;k<orderData.length;k++){
        // console.log(orderDataHidden(k))
        orderData[k].classList.add('orderDataHidden')
        orderData[index].classList.remove('orderDataHidden')
      }

    }
   }

   function autoCheck(){
    timer=setInterval(function(){
      index++;
       if (index>=timeTab.length) {
         index=0
       }
       timeTab[index].click()
    },1500)
   }
   autoCheck();
})();


(function(){
var index=0
var timer;  
// 右边部分订单量
  // 获取到360 90 30 24 
   var timeTab=document.getElementsByClassName('filter')[0].children
   console.log(timeTab)

  //  获取到订单的数量
  var orderData=document.getElementsByClassName('orderData')
  console.log(orderData)

   for(var i=0;i<timeTab.length;i++){
    timeTab[i].setAttribute('index',i)
    timeTab[i].onclick=function(){
        index=this.getAttribute('index')
      //  console.log(index)
      for(var j=0;j<timeTab.length;j++){
        timeTab[j].classList.remove('active')
        timeTab[index].classList.add('active')
      }

      for(var k=0;k<orderData.length;k++){
        // console.log(orderDataHidden(k))
        orderData[k].classList.add('orderDataHidden')
        orderData[index].classList.remove('orderDataHidden')
      }

    }
   }

   function autoCheck(){
    timer=setInterval(function(){
      index++;
       if (index>=timeTab.length) {
         index=0
       }
       timeTab[index].click()
    },1500)
   }
   autoCheck()
})();


// 折线图
(function(){
   //准备的销售数据
   var data = {
    year: [
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
    ],
    quarter: [
        [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
        [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
    ],
    month: [
        [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
        [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
    ],
    week: [
        [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
        [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
    ]
}
   var myChart=echarts.init(document.getElementsByClassName('sline')[0])
   var option = {
    color: ['#00f2f1', '#ed3f35'],
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['预期销售额', '实际销售额'],
      textStyle:{

        color: '#4c9bfd' // 图例文字颜色
      },

      right:'10%',
    },
    grid: {
      top:'20%',
      left: '3%',
      right: '4%',
      bottom: '3%',
      containLabel: true,
       // 是否显示网格
       show:true,
       // 四条边框的颜色
       borderColor: '#012f4a',
    },
   
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12'],
      axisTick:{
        show:false
      },
      // 剔除x轴的坐标线
      axisLine:{
        show:false
      },
      splitLine: {
        lineStyle: {
            color: '#012f4a' // 分割线颜色
        }
    }
    },
    // 字体颜色
    axisLabel:{
      color:'#4c9bfd'
    },
    yAxis: [
      {
      type: 'value',
      axisLabel: {
        color: '#4c9bfd' // 文字颜色
    },
      // y轴 分割线的样式 
     splitLine: {
                lineStyle: {
                    color: '#012f4a' // 分割线颜色
                }
            }
    },
    ],
    series: [
      {
        name: '预期销售额',
        type: 'line',
        stack: 'Total',
        data:  [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        smooth:true,
          
        
      },
      {
        name: '实际销售额',
        type: 'line',
        stack: 'Total',
        data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],  
        smooth:true,
      },
    ]
  };

  myChart.setOption(option)
  // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
 window.addEventListener('load',function(){
        myChart.resize();
 })
 window.addEventListener('resize',function(){
    myChart.resize();
 })


 
  // 获取到 年  季度  月  日
  var Tab=document.getElementsByClassName('Tab')
  console.log(Tab)
 var index=0
 var timer;
  for(var i=0;i<Tab.length;i++){
    Tab[i].setAttribute('index',i)
    Tab[i].onclick=function(){
      var index=this.getAttribute('index')
      // console.log(index)

      for(var j=0;j<Tab.length;j++){
        Tab[j].classList.remove('active')
        Tab[index].classList.add('active')
      }

      // 获取自定义属性data-time
      var datatime=this.getAttribute('data-time')
      // console.log(data)

      // 修改图表1的数据
      option.series[0].data=data[datatime][0]

         // 修改图表2的数据
         option.series[1].data=data[datatime][1]

        //  需要重新调用
         myChart.setOption(option);
    }
  }

 // 设置自动切换
 function auto(){
  timer=setInterval(function(){
      index++
      if (index>=Tab.length) {
          index=0
      }
      Tab[index].click();
     }
     ,2000)
 } 
auto();
    //  鼠标移入时暂停 
    // 获取到整个折线图的大盒子
    var seles=document.getElementsByClassName('seles')[0]
    // console.log(seles)
    seles.onmouseenter=function(){
      clearInterval(timer)
    }
// 鼠标移出时继续
  seles.onmouseleave=function(){
    auto();
  }
     
})();




// 雷达图
(function(){
  var myChart=echarts.init(document.querySelector('.radar'));
 var option = {

  radar: {
    radius:'47%',
    indicator: [
      { name: '机场', max: 100 },
      { name: '商场', max: 100 },
      { name: '火车站', max: 100 },
      { name: '汽车站', max: 100 },
      { name: '地铁', max: 100 },
    ],
    shape: 'circle',
    // 设置雷达图有几个圆
    splitNumber: 4,
    axisName: {
    //雷达图的文字颜色
      color: '#4c9bfd'
    },
    // 设置雷达图圆边框的颜色
    splitLine: {
      lineStyle: {

        color: 'rgba(255, 255, 255, 0.5)'
      }
    },
   
    splitArea: {
      show: false
    },
     // 设置雷达图5条小竖线的颜色
    axisLine: {
      lineStyle: {
       
        color: 'rgba(255, 255, 255, 0.5)'
      }
    }
  },
   // 控制提示框组件的显示位置
   tooltip:
    {
      show: true,
      // 控制提示框组件的显示位置
      position: ['20%', '0%'],
      backgroundColor: 'rgba(255, 255, 255, 0.3)'
  },
  series: [
    {
        name: 'Beijing',
        type: 'radar',
        lineStyle: {
            normal: {
                color: '#fff',
                // width: 1
            }
        },
        data: [[90, 100, 56, 11, 34]],
        symbol: 'circle',
        symbolSize: 5,
        itemStyle: {
            color: '#fff'
        },
        label: {
            show: true,
            color: '#fff',
            fontSize: 10
        },
        areaStyle: {
            color: 'rgba(238, 197, 102, 0.6)',
        },


    }
]
};
myChart.setOption(option);
//  // 解决echarts设置option后 ，图标特别小的情况
    //页面加载的时候 调用echarts实例对象的reszie（）方法
    // 必须使用时间监听
 window.addEventListener('load',function(){
        myChart.resize();
 })
 window.addEventListener('resize',function(){
    myChart.resize();
 })
})();