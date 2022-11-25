(function(){
   // 获取到故障设别监控和异常设被监控
var choseTab=document.getElementsByClassName('choseTab')
//choseTab[0]故障设备监控  choseTab[1]异常设备监控
console.log(choseTab)

// 获取到故障设别监控和异常设被监控下面的部分
var showTab=document.getElementsByClassName('showTab')
// showTab[0]默认显示的   showTab[1]默认隐藏的 
console.log(showTab)

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











