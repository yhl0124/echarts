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
  var myChart = echarts.init(document.getElementsByClassName('pie')[0]);

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
              radius: ['10%', '65%'],
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
// (function(){

// var myChart = echarts.init(document.getElementsByClassName('bar')[0]);
// var option = {
//     tooltip: {
//       trigger: 'axis',
//       axisPointer: {
//         type: 'shadow'
//       }
//     },
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true
//     },
//     xAxis: [
//       {
//         type: 'category',
//         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
//         axisTick: {
//           alignWithLabel: true
//         }
//       }
//     ],
//     yAxis: [
//       {
//         type: 'value'
//       }
//     ],
//     series: [
//       {
//         name: 'Direct',
//         type: 'bar',
//         barWidth: '60%',
//         data: [10, 52, 200, 334, 390, 330, 220]
//       }
//     ]
//   };
// myChart.setOption(option)
//   // 解决echarts设置option后 ，图标特别小的情况
//     //页面加载的时候 调用echarts实例对象的reszie（）方法
//     // 必须使用时间监听
//  window.addEventListener('load',function(){
//         myChart.resize()
//  })
//  window.addEventListener('resize',function(){
//     myChart.resize()
// })
// })();



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
})()



// (function(){
//    var myChart=echarts.init(document.getElementsByClassName('sline')[0])
//    var option = {
//     title: {
//       text: 'Stacked Line'
//     },
//     tooltip: {
//       trigger: 'axis'
//     },
//     legend: {
//       data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine']
//     },
//     grid: {
//       left: '3%',
//       right: '4%',
//       bottom: '3%',
//       containLabel: true
//     },
//     toolbox: {
//       feature: {
//         saveAsImage: {}
//       }
//     },
//     xAxis: {
//       type: 'category',
//       boundaryGap: false,
//       data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//       type: 'value'
//     },
//     series: [
//       {
//         name: 'Email',
//         type: 'line',
//         stack: 'Total',
//         data: [120, 132, 101, 134, 90, 230, 210]
//       },
//       {
//         name: 'Union Ads',
//         type: 'line',
//         stack: 'Total',
//         data: [220, 182, 191, 234, 290, 330, 310]
//       },
//       {
//         name: 'Video Ads',
//         type: 'line',
//         stack: 'Total',
//         data: [150, 232, 201, 154, 190, 330, 410]
//       },
//       {
//         name: 'Direct',
//         type: 'line',
//         stack: 'Total',
//         data: [320, 332, 301, 334, 390, 330, 320]
//       },
//       {
//         name: 'Search Engine',
//         type: 'line',
//         stack: 'Total',
//         data: [820, 932, 901, 934, 1290, 1330, 1320]
//       }
//     ]
//   };

//   myChart.setOption(option)
//     // 解决echarts设置option后 ，图标特别小的情况
//     //页面加载的时候 调用echarts实例对象的reszie（）方法
//     // 必须使用时间监听
//  window.addEventListener('load',function(){
//         myChart.resize()
//  })
//  window.addEventListener('resize',function(){
//     myChart.resize()
//  })
// })();









